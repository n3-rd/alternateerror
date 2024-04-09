import { getTaggedPosts } from '$lib/utils.js';

export async function load({ params }) {
    const { slug } = params;
    const posts = await getTaggedPosts(slug);
    return {
        posts,
        slug
    }
}

