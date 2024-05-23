"use server"
import {headers} from "next/headers";
import {redirect} from "next/navigation";

export async function isMobile() {
    return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        .test(headers().get("user-agent") || "");
}

export async function gotoStudentProfile(enrollmentId: string): Promise<void> {
    redirect("/student/" + enrollmentId);
}