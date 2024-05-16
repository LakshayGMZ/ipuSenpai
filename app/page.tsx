"use client"
import React, { useEffect, useState } from "react";
import { Gradient } from "whatamesh";
import Image from "next/image";
import { Divider } from "@mui/material";
import { customFetch } from "@/app/lib/dataFetchServer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { CountUp } from "countup.js";
import {
    LabelList,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
    Tooltip,
    Bar,
    ComposedChart,
    Line,
    XAxis,
    YAxis,
    BarChart
} from "recharts";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

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


interface StudentCountSingle {
    name: string,
    count: number
}

interface StudentCountByProgramme {
    name: string,
    studentCounts: StudentCountSingle[]
}

interface StudentCountByInstitute {
    name: string,
    studentCounts: StudentCountSingle[]
}

interface StudentCountByBatch {
    name: string,
    studentCounts: StudentCountSingle[]
}

interface StudentCountBy {
    byProgramme: StudentCountByProgramme,
    byInstitute: StudentCountByInstitute,
    byBatch: StudentCountByBatch
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
    const [studentCountBy, setStudentCountBy] = useState<StudentCountBy>({
        byProgramme: {
            name: "Programme",
            studentCounts: []
        },
        byInstitute: {
            name: "Institute",
            studentCounts: []
        },
        byBatch: {
            name: "Batch",
            studentCounts: []
        }
    });

    const us0 = [
        {
            id: 1,
            name: "martian0x80",
            designation: "Backend Developer",
            image: "/vedant.gif",
        },

    ];
    const us1 = [
        {
            id: 1,
            name: "LakshayGMZ",
            designation: "Frontend Developer",
            image: "/lakshay.png",
        },
    ];

    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
        gradient.play();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            const response = await customFetch<StudentCountBy>("/count/by");
            setStudentCountBy(response);
        };
        fetchData();
    }, [])


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
                className={"fixed bottom-0 left-0 pb-4 scale-x-[-1]"}
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
                    Just kidding. <br />
                    No, fr though. Im BATMAN <br />

                </p>
            </div>

            <Divider className={"my-6"} variant="middle" />

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
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.15, delay: 0.2 },
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

            <Divider className={"my-6"} variant="middle" />

            <div className={"grid grid-cols-2 md:grid-cols-2 gap-4"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Students by Programme</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <ComposedChart
                                data={studentCountBy.byProgramme.studentCounts}
                                margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
                                layout="horizontal"
                            >
                                {/* <XAxis dataKey="subcode"
                                label={{
                                    key: 'xAxisLabel',
                                    value: 'Programme',
                                    position: 'bottom',
                                }}
                                padding={{ left: 20, right: 20 }}
                                angle={0}
                                offset={10}
                                fontSize={10}
                            /> */}
                                {/* <YAxis
                                domain={[
                                    (dataMin: number) => Math.round((dataMin) / 1000) * 1000,
                                    (dataMax: number) => Math.round((dataMax) / 1000) * 1000
                                ]}
                                // textLength={45}
                                label={
                                    {
                                        value: 'Count',
                                        angle: -90,
                                        position: 'insideLeft',
                                    }
                                }
                                padding={{ top: 20, bottom: 20 }}
                            /> */}
                                <Tooltip
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                                <div className="rounded-lg  bg-background p-2 shadow-sm">
                                                    <div className="grid grid-rows-2 grid-cols-1 gap-0">
                                                        {payload[0].payload.internal !== "" &&
                                                            <div className="flex flex-row flex-col grid-row-1">
                                                                <span
                                                                    className="text-[0.70rem] uppercase text-muted-foreground">
                                                                    Programme
                                                                </span>
                                                                <span className="font-bold text-muted-foreground">
                                                                    {payload[0].payload.name}
                                                                </span>
                                                            </div>}
                                                        <div className="flex flex-row flex-col grid-row-1">
                                                            <span
                                                                className="text-[0.70rem] uppercase text-muted-foreground">
                                                                Count
                                                            </span>
                                                            <span className="font-bold text-muted-foreground">
                                                                {payload[0].payload.count}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        return null
                                    }}
                                />
                                <Bar
                                    dataKey="count"
                                    fill="var(--primary)"
                                />
                                <Line
                                    type="monotone"
                                    dot={true}
                                    dataKey="count"
                                    style={{ stroke: "var(--secondary-foreground)" }}
                                    strokeWidth={4}
                                />
                            </ComposedChart>

                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Students by Institute</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <ComposedChart
                                data={studentCountBy.byInstitute.studentCounts.sort((a, b) => a.count - b.count)}
                                margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
                                layout="horizontal"
                            >
                                {/* <XAxis dataKey="subcode"
                                label={{
                                    key: 'xAxisLabel',
                                    value: 'Programme',
                                    position: 'bottom',
                                }}
                                padding={{ left: 20, right: 20 }}
                                angle={0}
                                offset={10}
                                fontSize={10}
                            /> */}
                                {/* <YAxis
                                domain={[
                                    (dataMin: number) => Math.round((dataMin) / 1000) * 1000,
                                    (dataMax: number) => Math.round((dataMax) / 1000) * 1000
                                ]}
                                // textLength={45}
                                label={
                                    {
                                        value: 'Count',
                                        angle: -90,
                                        position: 'insideLeft',
                                    }
                                }
                                padding={{ top: 20, bottom: 20 }}
                            /> */}
                                <Tooltip
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                                <div className="rounded-lg  bg-background p-2 shadow-sm">
                                                    <div className="grid grid-rows-2 grid-cols-1 gap-0">
                                                        {payload[0].payload.internal !== "" &&
                                                            <div className="flex flex-row flex-col grid-row-1">
                                                                <span
                                                                    className="text-[0.70rem] uppercase text-muted-foreground">
                                                                    Institute
                                                                </span>
                                                                <span className="font-bold text-muted-foreground">
                                                                    {payload[0].payload.name}
                                                                </span>
                                                            </div>}
                                                        <div className="flex flex-row flex-col grid-row-1">
                                                            <span
                                                                className="text-[0.70rem] uppercase text-muted-foreground">
                                                                Count
                                                            </span>
                                                            <span className="font-bold text-muted-foreground">
                                                                {payload[0].payload.count}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        return null
                                    }}
                                />
                                <Bar
                                    dataKey="count"
                                    fill="var(--primary)"
                                />
                                <Line
                                    type="monotone"
                                    dot={true}
                                    dataKey="count"
                                    style={{ stroke: "var(--secondary-foreground)" }}
                                    strokeWidth={4}
                                />
                            </ComposedChart>

                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Students by Batch</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <ComposedChart
                                data={studentCountBy.byBatch.studentCounts}
                                margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
                                layout="horizontal"
                            >
                                {/* <XAxis dataKey="subcode"
                                label={{
                                    key: 'xAxisLabel',
                                    value: 'Programme',
                                    position: 'bottom',
                                }}
                                padding={{ left: 20, right: 20 }}
                                angle={0}
                                offset={10}
                                fontSize={10}
                            /> */}
                                {/* <YAxis
                                domain={[
                                    (dataMin: number) => Math.round((dataMin) / 1000) * 1000,
                                    (dataMax: number) => Math.round((dataMax) / 1000) * 1000
                                ]}
                                // textLength={45}
                                label={
                                    {
                                        value: 'Count',
                                        angle: -90,
                                        position: 'insideLeft',
                                    }
                                }
                                padding={{ top: 20, bottom: 20 }}
                            /> */}
                                <Tooltip
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                                <div className="rounded-lg  bg-background p-2 shadow-sm">
                                                    <div className="grid grid-rows-1 grid-cols-2 gap-1">
                                                        {payload[0].payload.internal !== "" &&
                                                            <div className="flex flex-row flex-col grid-row-1">
                                                                <span
                                                                    className="text-[0.70rem] uppercase text-muted-foreground">
                                                                    Batch
                                                                </span>
                                                                <span className="font-bold text-muted-foreground">
                                                                    {payload[0].payload.name}
                                                                </span>
                                                            </div>}
                                                        <div className="flex flex-row flex-col grid-row-1">
                                                            <span
                                                                className="text-[0.70rem] uppercase text-muted-foreground">
                                                                Count
                                                            </span>
                                                            <span className="font-bold text-muted-foreground">
                                                                {payload[0].payload.count}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        return null
                                    }}
                                />
                                <Bar
                                    dataKey="count"
                                    fill="var(--primary)"
                                />
                                <Line
                                    type="monotone"
                                    dot={true}
                                    dataKey="count"
                                    style={{ stroke: "var(--secondary-foreground)" }}
                                    strokeWidth={4}
                                />
                            </ComposedChart>

                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            <Divider className={"my-6"} variant="middle" />
            <div className={"grid grid-rows-2 grid-cols-2 gap-4"}>
                <a href="https://github.com/martian0x80" target="_blank" rel="noreferrer">
                    <iframe
                        width={"100%"}
                        height={"100%"}
                        src={"https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=martian0x80&theme=gotham"}
                    />
                </a>
                <AnimatedTooltip items={us0} />
                <a href="https://github.com/martian0x80" target="_blank" rel="noreferrer">
                    <iframe
                        width={"100%"}
                        height={"100%"}
                        src={"https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=LakshayGMZ&theme=gotham"}
                    />
                </a>
                <AnimatedTooltip items={us1} />

            </div>


        </div>
    );
}

