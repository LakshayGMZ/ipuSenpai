'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from 'react';
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
} from "recharts";
import { GradeFrequency, StudentProfileData } from "@/types/types";
import OverallTest from "@/app/(endpoints)/student/[enrollmentID]/OverallTest";
import SemTest from "@/app/(endpoints)/student/[enrollmentID]/SemTest";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { redirect, useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Head from "next/head";

const studentData: StudentProfileData = {
    "enrollment": "69696969696",
    "name": "Miyuki Shirogane",
    "programme": "PRESIDENT'S COURSE",
    "specialization": "STRATEGIC LEADERSHIP",
    "institute": "SHUCHIIN ACADEMY",
    "batch": "Unknown",
    "sid": "1234567890",
    "transfer": false,
    "instCode": "SA",
    "progCode": "PC",
    "marks": 4250,
    "creditMarks": 8925,
    "totalCreditMarks": 9500,
    "totalCreditMarksWeighted": 780,
    "totalCredits": 95,
    "total": 4900,
    "cgpa": 9.736842,
    "percentage": 98,
    "creditsPercentage": 94,
    "semesters": 3,
    "marksPerSemester": [],
    "subject": [
        {
            "semester": "3",
            "subjects": []
        },
        {
            "semester": "2",
            "subjects": []
        },
        {
            "semester": "1",
            "subjects": []
        }
    ],
    "cumulativeResult": []
}

export default function Page() {
    const [value, setValue] = useState("");
    const router = useRouter();
    const [saveEnroll, setSaveEnroll] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("studentEnrollment") !== null) {
            redirect("/student/" + localStorage.getItem("studentEnrollment"));
        }
    }, []);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (saveEnroll) localStorage.setItem("studentEnrollment", value);
        router.push("/student/" + value);
    }
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setTimeout(
            () =>
                document.getElementsByTagName("body")[0].setAttribute("style", ""),
            100
        );
        setOpen(true);
    }, []);

    const [selectedSem, setSelectedSem] = useState("overall");

    let frequencygrades: GradeFrequency[] = [
        {
            "grade": "A+",
            "frequency": 14
        },
        {
            "grade": "O",
            "frequency": 8
        },
        {
            "grade": "B+",
            "frequency": 5
        },
        {
            "grade": "A",
            "frequency": 5
        }
    ];


    return (
        <>
            <Head>
                <title>Student Profile | IPU Senpai | {value} | {studentData.name} | {studentData.programme} | {studentData.specialization} | {studentData.semesters}</title>
                <meta name="description" content="Student Profile Dashboard. View your marks, grades, percentage, cgpa in a single beautiful dashboard." />
                <link rel="icon" href="/favicon.ico" />
                <meta name='keywords' content='ipu, search, name, ranklist, ggsipu, ipuranklist, open source, btech, bba, cse, it, gpa, sgpa, percentage, marks, results, ipu results' />
                <meta name='url' content='https://www.ipusenpai.in/student' />
                <meta name='HandheldFriendly' content='True' />
                <meta name='og:title'>Student Profile | IPU Senpai | {studentData.enrollment} | {studentData.name} | {studentData.programme} | {studentData.specialization} | {studentData.semesters}</meta>
                <meta name='og:description' content='Student Profile Dashboard. View your marks, grades, percentage, cgpa in a single beautiful dashboard.' />
                <meta name='og:image' content='https://www.ipusenpai.in/logo.png' />
                <meta name='og:url' content='https://www.ipusenpai.in/student' />
                <meta name='og:type' content='website' />
                <meta name='og:site_name' content='IPU Senpai' />
                <meta name='og:locale' content='en_US' />
                <meta name='og:image:type' content='image/png' />
                <meta name='og:image:alt' content='IPU Senpai Logo' />
            </Head>
            <Dialog open={open}>
                <DialogContent className="sm:max-w-[450px]">
                    <DialogHeader>
                        <DialogTitle>Student Profile Dashboard</DialogTitle>
                        <DialogDescription>
                            Enter your enrollment number here.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-row gap-4 items-center justify-between rounded-lg border p-4">
                        <Label htmlFor="save" className="text-left">
                            Save Enrollment No.
                            <DialogDescription className="text-xs">
                                Saves enrollment for future visits.
                            </DialogDescription>
                        </Label>
                        <Switch
                            checked={saveEnroll}
                            onCheckedChange={(checked) => setSaveEnroll(checked)}
                            className="text-sm"
                        />
                    </div>
                    <form className="grid grid-cols-3 items-center gap-4" onSubmit={handleSubmit}>
                        <Label htmlFor="name" className="text-center">
                            Enrollment&nbsp;No.
                        </Label>
                        <Input
                            value={value}
                            onChange={(e) => {
                                if (/^\d+$/.test(e.target.value) || e.target.value === "") setValue(e.target.value);
                            }}
                            className="col-span-2 border-2"
                            autoFocus={true}
                        />
                        <Button
                            // onClick={handleSubmit}
                            className={"col-span-3"}
                            type="submit"
                            disabled={value.length !== 11}
                        >Save changes</Button>
                    </form>
                </DialogContent>
            </Dialog>
            <div className={"absolute z-30 inset-0 backdrop-blur-md"}></div>
            <div className={"w-full px-3 md:px-6 flex-row gap-6"}>
                <div
                    className={"w-full flex flex-row justify-between text-2xl font-bold scroll-m-20 tracking-tight lg:text-5xlscroll-m-20 pb-2 first:mt-0"}>
                    <h1>
                        Hi, {studentData?.name}
                    </h1>
                    <h2>
                        {studentData?.batch}
                    </h2>
                </div>
                <div className={"grid  md:grid-cols-2 lg:grid-cols-4 justify-between gap-4"}>
                    <Card>
                        <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                            <CardTitle>
                                {studentData?.enrollment}
                            </CardTitle>
                            <CardDescription>
                                Enrollment
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="font-semibold p-5">
                            {studentData?.sid}
                            <CardDescription>
                                SID
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card className="border">
                        <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                            <CardTitle>{studentData?.institute.split('(')[0]}</CardTitle>
                        </CardHeader>
                        <CardContent className="font-semibold p-5">
                            {studentData?.instCode}
                            <CardDescription>
                                Institute Code
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                            <CardTitle>{studentData?.programme}</CardTitle>
                        </CardHeader>
                        <CardContent className="font-semibold p-5">
                            {studentData?.progCode}
                            <CardDescription>
                                Programme Code
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                            <CardTitle>{studentData?.specialization}</CardTitle>
                        </CardHeader>
                        <CardContent className="font-semibold p-5">
                            {studentData?.progCode}
                            <CardDescription>
                                Branch Code
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>

                <div
                    className={"grid md:grid-cols-1 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 pb-4 overflow-x-scroll md:overflow-x-hidden"}>
                    <div className={"lg:col-span-2 "}>
                        <h1 className={"text-2xl font-bold pt-4 pb-3"}>Results</h1>
                        <Tabs
                            className={""}
                            defaultValue={"overall"}
                            onValueChange={value => setSelectedSem(value)}
                        >
                            <TabsList className="flex flex-row mb-2">
                                <TabsTrigger
                                    className={"flex-[1_1_0] relative"}
                                    value="overall"
                                >
                                    {selectedSem == "overall" && <motion.div
                                        layoutId="clickedbutton2"
                                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                        className={cn(
                                            "absolute inset-0 bg-primary-foreground rounded-full"
                                        )}
                                    />}
                                    <span className="relative block text-primary">
                                        Overall
                                    </span>
                                </TabsTrigger>
                                <TabsTrigger
                                    className={"flex-[1_1_0] relative"}
                                    value="1"
                                >
                                    <span className="relative block text-primary">
                                        Sem 1
                                    </span>
                                </TabsTrigger>
                                <TabsTrigger
                                    className={"flex-[1_1_0] relative"}
                                    value="2"
                                >
                                    <span className="relative block text-primary">
                                        Sem 2
                                    </span>
                                </TabsTrigger>
                                <TabsTrigger
                                    className={"flex-[1_1_0] relative"}
                                    value="3"
                                >
                                    <span className="relative block text-primary">
                                        Sem 3
                                    </span>
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="overall" className={"grid grid-cols-2 md:grid-cols-3 gap-4"}>
                                <Card>
                                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                        <CardTitle>Marks</CardTitle>
                                    </CardHeader>
                                    <CardContent className="font-semibold p-5">
                                        {studentData?.marks} / {studentData?.total}
                                        <CardDescription>
                                            Total Marks Obtained
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                        <CardTitle>CGPA</CardTitle>
                                    </CardHeader>
                                    <CardContent className="font-semibold p-5">
                                        {Number(studentData?.cgpa).toFixed(3)}
                                        <CardDescription>
                                            Cumulative Grade Point Average
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                        <CardTitle>Percentage</CardTitle>
                                    </CardHeader>
                                    <CardContent className="font-semibold p-5">
                                        {Number(studentData?.percentage).toFixed(3)}%
                                        <CardDescription>
                                            Percentage of Marks Obtained
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                        <CardTitle>Credit Marks</CardTitle>
                                    </CardHeader>
                                    <CardContent className="font-semibold p-5">
                                        {studentData?.creditMarks} / {studentData?.totalCreditMarks}
                                        <CardDescription>
                                            Total Credit Marks Obtained
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                        <CardTitle>Total Credits</CardTitle>
                                    </CardHeader>
                                    <CardContent className="font-semibold p-5">
                                        {studentData?.totalCredits}
                                        <CardDescription>
                                            Total Credits Overall
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                        <CardTitle>C. Percentage</CardTitle>
                                    </CardHeader>
                                    <CardContent className="font-semibold p-5">
                                        {Number(studentData?.creditsPercentage).toFixed(3)}%
                                        <CardDescription>
                                            Percentage of Credit Marks Obtained
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <CardContent>
                        <ResponsiveContainer className={"min-h-[20rem] max-h-[25rem] pt-1 mt-5"}>
                            {(selectedSem !== "overall") ?
                                <RadarChart
                                    data={studentData?.subject.find(i => i.semester === selectedSem)?.subjects}

                                >
                                    <Tooltip
                                        content={({ active, payload }) => {
                                            if (active && payload && payload.length) {
                                                return (
                                                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                                                        <div className="grid grid-rows-2 gap-y-1 text-muted-foreground">
                                                            <div className="flex flex-col col-span-1">
                                                                <span
                                                                    className="text-[0.70rem] uppercase ">
                                                                    Marks
                                                                </span>
                                                                <span className="font-bold">
                                                                    {payload[0].payload.total}
                                                                </span>
                                                            </div>
                                                            <div className="flex flex-col col-span-1">
                                                                <span
                                                                    className="text-[0.70rem] uppercase">
                                                                    Subject
                                                                </span>
                                                                <span className="font-bold">
                                                                    {payload[0].payload.subname}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            return null
                                        }}
                                    />
                                    {/* <Legend fill={`hsl(--primary)`} iconType="circle" color="text-primary"
                                /> */}
                                    <PolarGrid gridType="circle" />
                                    <PolarAngleAxis dataKey="subcode" label="Subjects" fontWeight={550}
                                        radius={80}
                                    />
                                    <PolarRadiusAxis angle={75} domain={[0, 100]} />

                                    <Radar
                                        name={"Semester " + selectedSem}
                                        dataKey="total"
                                        fillOpacity={0.8}
                                        dot={true}
                                    />
                                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                                </RadarChart> :
                                <RadialBarChart
                                    data={frequencygrades.sort((i, j) => i.frequency - j.frequency).reverse()}
                                    innerRadius="12%"
                                    outerRadius="100%"
                                    startAngle={0}
                                    endAngle={360}
                                >

                                    <Tooltip
                                        content={({ active, payload }) => {
                                            if (active && payload && payload.length) {
                                                return (
                                                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <div className="flex flex-col">
                                                                <span
                                                                    className="text-[0.70rem] uppercase text-muted-foreground">
                                                                    Grade
                                                                </span>
                                                                <span className="font-bold text-muted-foreground">
                                                                    {payload[0].payload.grade}
                                                                </span>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span
                                                                    className="text-[0.70rem] uppercase text-muted-foreground">
                                                                    Frequency
                                                                </span>
                                                                <span className="font-bold text-muted-foreground">
                                                                    {payload[0].payload.frequency}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }

                                            return null
                                        }}
                                    />
                                    <RadialBar
                                        dataKey="frequency"
                                        fill="var(--primary)"
                                    >
                                        <LabelList dataKey="grade" position="inside" fill="var(--primary-foreground)"
                                            fontWeight={600} />
                                    </RadialBar>
                                </RadialBarChart>}
                        </ResponsiveContainer>
                    </CardContent>
                </div>
                {studentData == undefined ? null : selectedSem === "overall" ?
                    <OverallTest studentData={studentData} /> :
                    <SemTest sem={selectedSem} studentData={studentData} />}
                {/* <h1>Absolute Result Breakdown</h1>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                <div className={"h-80 bg-amber-400"}></div>
                <div className={"h-80 bg-amber-400"}></div>
            </div>
            <h1>Cumulative Result Breakdown</h1>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                <div className={"h-80 bg-amber-400"}></div>
                <div className={"h-80 bg-amber-400"}></div>
            </div> */}
            </div>
        </>

    )
}

