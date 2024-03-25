"use client"

import {Input} from "@/components/ui/input"
import React, {useEffect, useState} from "react";
import {redirect, useRouter} from "next/navigation";

export default function Page() {

    const [value, setValue] = useState("");
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem("studentEnrollment") !== null) {
            redirect("/student/" + localStorage.getItem("studentEnrollment"));
        }
    }, []);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        localStorage.setItem("studentEnrollment", value);
        router.push("/student/" + value);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className={"text-3xl"}>Search</h1>
            <div className="relative w-full max-w-sm mt-6">
                <form onSubmit={handleSubmit}>
                    <SearchIcon

                        className="h-4 w-4 absolute right-2.5 inset-y-0 m-auto text-gray-500 dark:text-gray-400"
                        onClick={handleSubmit}
                    />
                    <Input
                        value={value}
                        className="pl-4 pr-8"
                        onChange={e => setValue(e.target.value)}
                        placeholder="Search"
                    />
                </form>

            </div>
        </div>
    )
}

function SearchIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}
