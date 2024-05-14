"use server"

import {RanklistQueryFields, RanklistSelectDataFields, StudentProfileData, StudentResults} from "@/types/types";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "http://localhost:3000";

const baseUrl: string = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "http://localhost:3000";

const getAbsoluteUrl = (path: string) => {
    return (new URL(path, baseUrl)).href;
}


export async function getStudentProfileData(enrollment: string): Promise<StudentProfileData> {
    const res = await fetch(getAbsoluteUrl(`/student/${enrollment}`), {
        next: {
            revalidate: 3600
        }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return await res.json();
}


export async function getResult(
    data: RanklistSelectDataFields,
): Promise<StudentResults> {

    const url = data.semester !== "0" ?
        `/rank/semester/instcode=${data.shift}&progcode=${data.specialization}&batch=${data.batch}&sem=${data.semester}&pageNumber=${parseInt(String(data.page)) - 1}&pageSize=${data.pageSize}/${data.shift === "*" ? encodeURI(data.institute): ""}` :
        `/rank/instcode=${data.shift}&progcode=${data.specialization}&batch=${data.batch}&pageNumber=${parseInt(String(data.page)) - 1}&pageSize=${data.pageSize}/${data.shift === "*" ? encodeURI(data.institute) : ""}`

    const res = await fetch(getAbsoluteUrl(url));
    console.log(res.url)
    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }


    return {totalPages: parseInt(res.headers.get("x-total-page-count")!), ...(await res.json())};
}


export async function getProgrammes(): Promise<RanklistQueryFields[]> {
    const res = await fetch(getAbsoluteUrl('/programmes'));

    if (res.status !== 200) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return res.json();
}

export async function getAllInstitutes(): Promise<RanklistQueryFields[]> {
    const res = await fetch('/institutes');

    if (res.status !== 200) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return (await res.json()).map((i: RanklistQueryFields) => ({name: i.name}));
}


export async function getInstitutes(progname: string): Promise<RanklistQueryFields[]> {
    const res = await fetch(getAbsoluteUrl('/institutes/programme=' + encodeURI(progname)));

    if (res.status !== 200) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return res.json();
}


export async function getSpecs(progname: string, institute: string): Promise<RanklistQueryFields[]> {
    const res = await fetch(getAbsoluteUrl(`/specializations/programme=${encodeURI(progname)}&institute=${encodeURI(institute)}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return res.json();
}


export async function getShifts(institute: string): Promise<RanklistQueryFields[]> {
    const res = await fetch(getAbsoluteUrl(`/institute/shifts/${encodeURI(institute)}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return res.json();
}

export async function getBatches(progname: string, institute: string): Promise<RanklistQueryFields[]> {
    const res = await fetch(getAbsoluteUrl(`/batches/programme=${encodeURI(progname)}&institute=${encodeURI(institute)}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return res.json();
}

export async function getSemesters(progname: string, institute: string, batch: string): Promise<RanklistQueryFields[]> {
    const res = await fetch(getAbsoluteUrl(`/semesters/programme=${encodeURI(progname)}&institute=${encodeURI(institute)}&batch=${encodeURI(batch)}`));

    if (!res.ok) {
        throw new Error('Failed to fetch data. URL: ' + res.url)
    }
    return [{name: "Overall", value: "0"}, ...(await res.json())];
}

