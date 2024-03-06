'use server'

const base_url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

const getAbsoluteUrl = (path: string) => {
    return (new URL(path, base_url!)).href;
}


export async function getProgrammes() {
    const res = await fetch(getAbsoluteUrl('/programmes'));

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return await res.json();
}


export async function getInstitutes(progname: string) {
    const res = await fetch(getAbsoluteUrl('/institutes/programme=' + encodeURI(progname)));

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return await res.json();
}


export async function getSpecs(progname: string, institute: string) {
    const res = await fetch(getAbsoluteUrl(`/specializations/programme=${encodeURI(progname)}&institute=${encodeURI(institute)}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return Object.keys(await res.json());
}


export async function getShifts(institute: string){
    const res = await fetch(getAbsoluteUrl(`/institute/shifts/${encodeURI(institute)}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return Object.keys(await res.json());
}

export async function getBatches(progname: string, institute: string){
    const res = await fetch(getAbsoluteUrl(`/batches/programme=${encodeURI(progname)}&institute=${encodeURI(institute)}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return Object.keys(await res.json());
}

export async function getSemesters(progname: string, institute: string){
    const res = await fetch(getAbsoluteUrl(`/semesters/programme=${encodeURI(progname)}&institute=${encodeURI(institute)}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return Object.keys(await res.json());
}

