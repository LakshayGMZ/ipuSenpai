"use client"

const base_url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

const getAbsoluteUrl = (path: string) => {
    return (new URL(path, base_url!)).href;
}

export async function getProgrammes() {
    console.log(base_url);
    const res = await fetch(getAbsoluteUrl('/programmes'), { next: { revalidate: 3600 }});

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
