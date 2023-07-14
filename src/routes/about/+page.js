import { PUBLIC_CMS_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const res = await fetch(PUBLIC_CMS_URL + '/api/team-members?populate=*');
    const teamMembers = await res.json();
    return { teamMembers };
}