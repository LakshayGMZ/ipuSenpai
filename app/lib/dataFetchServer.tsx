'use server'

import {StudentProfileData} from "@/types/types";

import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export async function getStudentProfileData(enrollment: string): Promise<StudentProfileData> {
    const res = await axios.get<StudentProfileData>(`/student/${enrollment}`);

    if (res.status !== 200) {
        throw new Error('Failed to fetch data. URL: ' + res.config.url)
    }
    return res.data;
}
