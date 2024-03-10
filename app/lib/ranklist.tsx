'use server'

import {RanklistQueryFields, RanklistSelectDataFields, StudentResults} from "@/types/types";

const base_url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

const getAbsoluteUrl = (path: string) => {
    return (new URL(path, base_url!)).href;
}


export async function getProgrammes(): Promise<RanklistQueryFields[]> {
    const res = await fetch(getAbsoluteUrl('/programmes'));

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return await res.json();
}


export async function getInstitutes(progname: string): Promise<RanklistQueryFields[]> {
    const res = await fetch(getAbsoluteUrl('/institutes/programme=' + encodeURI(progname)));

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return await res.json();
}


export async function getSpecs(progname: string, institute: string): Promise<RanklistQueryFields[]> {
    const res = await fetch(getAbsoluteUrl(`/specializations/programme=${encodeURI(progname)}&institute=${encodeURI(institute)}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return await res.json();
}


export async function getShifts(institute: string): Promise<RanklistQueryFields[]> {
    const res = await fetch(getAbsoluteUrl(`/institute/shifts/${encodeURI(institute)}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return await res.json();
}

export async function getBatches(progname: string, institute: string): Promise<RanklistQueryFields[]> {
    const res = await fetch(getAbsoluteUrl(`/batches/programme=${encodeURI(progname)}&institute=${encodeURI(institute)}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return await res.json();
}

export async function getSemesters(progname: string, institute: string): Promise<RanklistQueryFields[]> {
    const res = await fetch(getAbsoluteUrl(`/semesters/programme=${encodeURI(progname)}&institute=${encodeURI(institute)}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return [{name: "Overall", value: "0"}, ...await res.json()];
}

export async function getResultOverall(data: RanklistSelectDataFields, page: number = 0, pageSize: number = 50): Promise<StudentResults[]> {
    const res = await fetch(getAbsoluteUrl(`/rank/instcode=${data.shift}&progcode=${data.specialization}&batch=${data.batch}&pageNumber=${page}&pageSize=${pageSize}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }

    return await res.json();
}


export async function getResultSem(data: RanklistSelectDataFields, page: number = 0, pageSize: number = 50): Promise<StudentResults[]> {
    const res = await fetch(getAbsoluteUrl(`/rank/semester/instcode=${data.shift}&progcode=${data.specialization}&batch=${data.batch}&sem=${data.semester}&pageNumber=${page}&pageSize=${pageSize}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }

    return await res.json();
}
