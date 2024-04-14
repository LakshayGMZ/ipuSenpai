import {StudentProfileData} from "@/types/types";
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
