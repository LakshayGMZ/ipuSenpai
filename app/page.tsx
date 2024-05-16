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
import {CountUp} from "countup.js";

const options = {
    startVal: 0,
    duration: 3,
    suffix: '+',
};

interface CounterType {
    student: number,
    result: number,
    programme: number,
    institute: number,
    actualResult: number
}

export default function Page() {
    const [counterStats, setCounterStats] = useState<CounterType>({
        student: 0,
        result: 0,
        programme: 0,
        institute: 0,
        actualResult: 0
    })
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
        gradient.play();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await customFetch<CounterType>("/count");
            new CountUp("studentCounter", response.student, options).start();
            new CountUp("programmeCounter", response.programme, options).start();
            new CountUp("instituteCounter", response.institute, options).start();
            new CountUp("resultCounter", response.result, options).start();
            setCounterStats(response);
        };
        fetchData();
    }, [])

    return (
        <div className={"px-[15%]"}>
            <canvas
                id="gradient-canvas"
                className="fixed inset-0 z-[-10]"
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

            <Divider className={"my-6"} variant="middle"/>

            <div className={"grid grid-cols-1 md:grid-cols-2"}>
                {
                    [
                        {
                            title: "Institutes",
                            id: "instituteCounter",
                            description: counterStats.institute
                        },
                        {
                            title: "Students",
                            id: "studentCounter",
                            description: counterStats.student
                        },
                        {
                            title: "Programmes",
                            id: "programmeCounter",
                            description: counterStats.programme
                        },
                        {
                            title: "Results",
                            id: "resultCounter",
                            description: counterStats.result
                        }
                    ].map((item: {
                        title: string;
                        id: string;
                        description: number;
                    }, idx) => (
                        <div
                            key={idx + 1}
                            className="relative group  block p-2 h-full w-full"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className="absolute z-[-1] inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
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
                            <Card className={"hover:scale-100"}>
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <h2 id={item.id} className={"text-4xl font-medium"}>{item.description}</h2>
                                </CardContent>

                            </Card>
                        </div>
                    ))}
            </div>

            <Divider className={"my-6"} variant="middle"/>

            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                <div className={"bg-white aspect-square"}>
                    Graph 1
                </div>
                <div className={"bg-white aspect-square"}>
                    Graph 2
                </div>
                <div className={"bg-white aspect-square"}>
                    Graph 3
                </div>
                <div className={"bg-white aspect-square"}>
                    Graph 4
                </div>
            </div>

            <Divider className={"my-6"} variant="middle"/>
            <div className={"h-[14rem]"}>
                <iframe
                    width={"100%"}
                    // className={"relative"}
                    // height={""}
                    src={"https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=LakshayGMZ&theme=gotham"}
                />

            </div>
            {/*<iframe*/}
            {/*    width={"100%"}*/}
            {/*    src={"https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=martian0x80&theme=gotham"}></iframe>*/}


        </div>
    );
}

