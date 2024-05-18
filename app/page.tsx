"use client"
import React, {useEffect, useState} from "react";
import {Gradient} from "whatamesh";
import Image from "next/image";
import {Divider} from "@mui/material";
import {customFetch} from "@/app/lib/dataFetchServer";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {AnimatePresence, motion} from "framer-motion";
import {CountUp} from "countup.js";
import {Mail} from "lucide-react";
import {Bar, ComposedChart, Line, ResponsiveContainer, Tooltip,} from "recharts";
import {Button} from "@/components/ui/button";

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
                className={"fixed bottom-0 left-0 pb-4  w-[15%]"}
                alt={"ipu senpai logo"}
                width={260}
                height={600}
            />
            <h1 className="text-[8rem] font-extrabold text-[rgba(255,255,255,0.6)] text-center break-words py-4">
                IPU SENPAI
            </h1>

            <div className="bg-black bg-opacity-50 p-6 text-white text-center text-2xl font-medium rounded-xl">
                <p>
                    The modern, open-source, beautiful and better ranklist and result portal for GGSIPU.
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

            <div className="text-center mt-4">
                <p className="text-[0.75rem] text-neutral-400 dark:text-neutral-500">
                    Note: The actual number of results is {counterStats.actualResult}. The number of results shown here
                    is the number of result rows expanded in the database per subject.
                </p>
            </div>

            <Divider className={"my-6"} variant="middle"/>

            <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Students by Programme</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={250}>
                            <ComposedChart
                                data={studentCountBy.byProgramme.studentCounts}
                                margin={{top: 10, right: 10, left: 10, bottom: 20}}
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
                                    content={({active, payload}) => {
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
                                    style={{stroke: "var(--secondary-foreground)"}}
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
                        <ResponsiveContainer width="100%" height={250}>
                            <ComposedChart
                                data={studentCountBy.byInstitute.studentCounts.sort((a, b) => a.count - b.count)}
                                margin={{top: 10, right: 10, left: 10, bottom: 20}}
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
                                    content={({active, payload}) => {
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
                                    style={{stroke: "var(--secondary-foreground)"}}
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
                        <ResponsiveContainer width="100%" height={250}>
                            <ComposedChart
                                data={studentCountBy.byBatch.studentCounts}
                                margin={{top: 10, right: 10, left: 10, bottom: 20}}
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
                                    content={({active, payload}) => {
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
                                    style={{stroke: "var(--secondary-foreground)"}}
                                    strokeWidth={4}
                                />
                            </ComposedChart>

                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            <Divider className={"my-6 py-5"} variant="middle"/>

            <h1 className="text-[4rem] font-extrabold text-[rgba(255,255,255,0.6)] text-center break-words py-4">
                Contribution
            </h1>
            <div className="bg-black bg-opacity-50 p-6 text-white text-center text-xl font-medium rounded-xl">
                <p>
                    Contribute to this project on GitHub. We are open to contributions. Star the project if you like
                    it. :D
                </p>
            </div>
            <div
                className={"grid grid-cols-1 xl:grid-cols-2 rounded-xl p-4 gap-4 place-items-center"}>
                <object type="image/svg+xml"
                        data="https://gh-card.dev/repos/LakshayGMZ/ipuSenpai.svg?fullname=&link_target=_blank"></object>
                <object type="image/svg+xml"
                        data="https://gh-card.dev/repos/martian0x80/IPUSenpaiBackend.svg?fullname=&link_target=_blank"></object>
            </div>


            <div className={"grid grid-auto-rows grid-auto-cols !w-full"}>
                <a href="https://github.com/martian0x80" target="_blank" rel="noreferrer">

                    <iframe className="aspect-[3.5] !w-full h-[100%] p-0 md:p-2"
                            src={"https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=martian0x80&theme=github_dark"}
                    />
                </a>
                <a href="https://github.com/LakshayGMZ" target="_blank" rel="noreferrer">

                    <iframe className="aspect-[3.5] !w-full h-[100%] p-0 md:p-2"
                            src={"https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=LakshayGMZ&theme=github_dark"}
                    />
                </a>

            </div>

            <Divider className={"my-6 py-5"} variant="middle"/>

            <h1 className="text-[4rem] font-extrabold text-[rgba(255,255,255,0.6)] text-center break-words py-4">
                Socials
            </h1>
            <div className={"grid grid-cols-1"}>
                <div className="bg-black bg-opacity-50 p-6 text-white text-center text-xl font-medium rounded-xl">
                    <p>
                        Join our discord server to get latest updates and to discuss about the project.
                    </p>
                </div>
                <div className="grid grid-rows-1 grid-cols-1 rounded-xl p-4 gap-4 place-items-center">
                    <iframe src="https://discord.com/widget?id=1052916034702692433&theme=dark" width="350" height="500"
                            allowTransparency={true} frameBorder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
            </div>

            <Divider className={"my-6 py-5"} variant="middle"/>

            <h1 className="text-[4rem] font-extrabold text-[rgba(255,255,255,0.6)] text-center break-words py-4">
                We also Freelance!
            </h1>
            <div className={"grid grid-cols-1"}>
                <div className="bg-black bg-opacity-50 p-6 text-white text-center text-xl font-medium rounded-xl">
                    <p>
                        We also take freelance projects. Contact us for more details.
                    </p>
                </div>
                <div className="grid grid-rows-1 grid-cols-1 rounded-xl p-4 gap-4 place-items-center">
                    <a
                        href="mailto:ipusenpai0x80@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button className="bg-primary text-white">
                            <Mail className="w-6 h-6 mr-2"/>
                            Contact Us
                        </Button>
                    </a>
                </div>
            </div>

            {/* Footer */}
            <Divider className={"my-6 py-5"} variant="middle"/>

            <div className="bg-black bg-opacity-50 p-6 text-white text-center text-md font-sm rounded-xl">
                <p>
                    Made with ❤️ by <a href="https://github.com/martian0x80/">martian0x80</a> and <a
                    href="https://github.com/lakshayGMZ/">LakshayGMZ</a>
                </p>

                <p>
                    &copy; 2024 IPU SENPAI
                </p>

                <p>
                    All rights reserved.
                </p>

            </div>

        </div>
    );
}

