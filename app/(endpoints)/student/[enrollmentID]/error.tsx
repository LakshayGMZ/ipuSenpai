'use client' // Error components must be Client Components

import {useEffect} from 'react'
import {useParams, useRouter} from "next/navigation";

export default function Error(
    {
        error,
        reset,
    }: {
        error: Error & { digest?: string }
        reset: () => void
    }) {
    const router = useRouter();
    const {enrollmentID} = useParams();

    useEffect(() => {
        if (localStorage.getItem("studentEnrollment") === enrollmentID)
            localStorage.removeItem("studentEnrollment");
        router.replace("/student");
    }, [])

    return (
        <div>
            <h2>Something went wrong!</h2>
        </div>
    )
}