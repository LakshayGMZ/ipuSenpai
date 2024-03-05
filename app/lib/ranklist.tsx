'use server'

import InstCombobox from "@/components/ranklist/InstCombobox";
import Specializations from "@/components/ranklist/Specializations";

const base_url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

const getAbsoluteUrl = (path: string) => {
    return (new URL(path, base_url!)).href;
}


export async function getProgrammes() {
    console.log(base_url);
    const res = await fetch(getAbsoluteUrl('/programmes'));

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getInstitutes(progname: string) {
    const res = await fetch(getAbsoluteUrl('/institutes/programme=' + encodeURI(progname)));
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return <InstCombobox collegeList={await res.json()} progname={progname} disabled={false} />
}

export async function getSpecs(progname: string) {
    const res = await fetch(getAbsoluteUrl('/specializations/programme=' + encodeURI(progname)));
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    console.log(res.url)
    return <Specializations specializations={await res.json()} disabled={false} />
}

