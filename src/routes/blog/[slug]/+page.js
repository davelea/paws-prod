import { PUBLIC_CMS_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    try {

        if (!params.slug) {
            return
        }

        const res = await fetch(PUBLIC_CMS_URL + `/api/blogs?filters[slug][$eq]=${params.slug}&populate[0]=author.avatar`);


        if (!res.ok) {
            const text = await res.text();
            throw new Error(text);
        }

        const blogs = await res.json();

        return { blogs };
    } catch (e) {
        console.error('Failure fetching blogs: ', e);
        return { blogs: { error: true } };
    }
}