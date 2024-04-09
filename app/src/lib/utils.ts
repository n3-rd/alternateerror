import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";
import { createClient } from '@sanity/client';
import groq from 'groq';
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from "$env/static/public";
export const client = createClient({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    useCdn: false, // `false` if you want to ensure fresh data
    apiVersion: '2023-03-20' // date of setup
});


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
    y?: number;
    x?: number;
    start?: number;
    duration?: number;
};

export const flyAndScale = (
    node: Element,
    params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;

    const scaleConversion = (
        valueA: number,
        scaleA: [number, number],
        scaleB: [number, number]
    ) => {
        const [minA, maxA] = scaleA;
        const [minB, maxB] = scaleB;

        const percentage = (valueA - minA) / (maxA - minA);
        const valueB = percentage * (maxB - minB) + minB;

        return valueB;
    };

    const styleToString = (
        style: Record<string, number | string | undefined>
    ): string => {
        return Object.keys(style).reduce((str, key) => {
            if (style[key] === undefined) return str;
            return str + `${key}:${style[key]};`;
        }, "");
    };

    return {
        duration: params.duration ?? 200,
        delay: 0,
        css: (t) => {
            const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
            const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
            const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

            return styleToString({
                transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                opacity: t
            });
        },
        easing: cubicOut
    };
};

export async function getAllTags(): Promise<string[]> {
    return await client.fetch(groq`*[_type == "post" && defined(myTags)][].myTags[]`);
}


export const getTaggedPosts = async (tag: string): Promise<any[]> => {
    const query = groq`
      *[
        _type == "post" 
        && myTags[].value match $tag
      ] {
        title,
        slug,
        body,
        _createdAt,
        _updatedAt,
        mainImage,
        myTags,
        author,
        excerpt
      }
    `;
    return await client.fetch(query, { tag });
};
export const getPostTags = async (slug: string) => {
    return client.fetch(groq`*[_type == "post" && slug.current == $slug][0].myTags`, {
        slug
    });
}

export const timeToRead = (content: string): number => {
    const words = content.split(" ").length;
    const wordsPerMinute = 200;
    return Math.ceil(words / wordsPerMinute);
}