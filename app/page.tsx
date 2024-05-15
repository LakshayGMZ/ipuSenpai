"use client"
import React, {useEffect, useState} from "react";
// import { SparklesCore } from "@/components/ui/sparkles";
// import { Spotlight } from "@/components/ui/spotlight";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
// import { Button } from "@/components/ui/button";
import {Gradient} from "whatamesh";
import Image from "next/image";
import {Divider} from "@mui/material";
import {customFetch} from "@/app/lib/dataFetchServer";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";

export default function Page() {
    const [studentCount, setStudentCount] = useState(0);
    const [programmeCount, setProgrammeCount] = useState(0);
    const [instituteCount, setInstituteCount] = useState(0);
    const [resultCount, setResultCount] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
        gradient.play();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await customFetch<number>("/count/student");
            setStudentCount(response);
            const response2 = await customFetch<number>("/count/programme");
            setProgrammeCount(response2);
            const response3 = await customFetch<number>("/count/institute");
            setInstituteCount(response3);
            const response4 = await customFetch<number>("/count/result");
            setResultCount(response4);
        };

        fetchData();
    }, [])


    return (
        <div className={"px-[15%]"}>
            <canvas
                id="gradient-canvas"
                className="fixed inset-0 z-[-1]"
                data-transition-in={true}
            />
            <Image
                src={"/logo.png"}
                className={"fixed bottom-0 right-0 pb-4 scale-x-[-1]"}
                alt={"ipu senpai logo"}
                width={260}
                height={600}
            />
            <h1 className="text-[8rem] font-extrabold text-[rgba(255,255,255,0.6)] text-center break-words py-4">
                IPU SENPAI
            </h1>

            <div className="bg-black bg-opacity-50 p-6 text-white text-center">
                <p>
                    Hmm. I see you ve found me. Im batman.
                    Just kidding. <br/>
                    No, fr though. Im BATMAN <br/>

                </p>
            </div>
            <Divider className={"my-4"} variant="middle"/>

            <div
                className={"grid grid-cols-1 md:grid-cols-2  py-10"}
            >
                {
                    [
                        {
                            title: "Institutes",
                            description: instituteCount
                        },
                        {
                            title: "Students",
                            description: studentCount
                        },
                        {
                            title: "Programmes",
                            description: programmeCount
                        },
                        {
                            title: "Results",
                            description: resultCount
                        }
                    ].map((item: {
                        title: string;
                        description: number;
                    }, idx) => (
                        <Link
                            href={"#blank"}
                            key={idx + 1}
                            className="relative group  block p-2 h-full w-full"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className="absolute z-[-1] inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                        layoutId="hoverBackground"
                                        initial={{opacity: 0}}
                                        animate={{
                                            opacity: 1,
                                            transition: {duration: 0.15},
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: {duration: 0.15, delay: 0.2},
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <h2 className={"text-4xl font-medium"}>{item.description}</h2>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

