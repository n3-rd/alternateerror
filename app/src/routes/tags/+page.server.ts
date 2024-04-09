import { getAllTags } from "$lib/utils";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async () => {
    let tags = await getAllTags();
    const tagCounts = new Map<string, number>();

    tags.forEach((tag) => {
        const count = tagCounts.get(tag) ?? 0;
        tagCounts.set(tag, count + 1);
    });
    return {

        tags,
        tagCounts

    };
};