"use server"
import {headers} from "next/headers";

export async function isMobile() {
    return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        .test(headers().get("user-agent") || "");
}