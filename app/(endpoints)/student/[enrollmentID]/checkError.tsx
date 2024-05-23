"use client"

import {StudentProfileData} from "@/types/types";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function CheckError(
    {
        data,
        enrollID
    }:{
        data: StudentProfileData,
        enrollID: string
    }
) {
    const router = useRouter();
    useEffect(() => {
        if (data.enrollment === undefined) {
            router.replace("/student");
        }
    }, []);

    return (
        <>
        </>
    )
}