'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getStudentProfileData } from "@/app/lib/dataFetchClient";
import React, { useEffect, useState } from 'react';
import {
    Legend,
    Line,
    LineChart,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { useLoader } from "@/app/lib/LoaderContext";
import { StudentProfileData } from "@/types/types";
import OverallTest from "@/app/(endpoints)/student/[enrollmentID]/OverallTest";
import SemTest from "@/app/(endpoints)/student/[enrollmentID]/SemTest";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Page(
    {
        params
    }: {
        params: { enrollmentID: string }
    }) {

    const loader = useLoader();

    const [studentData, setStudentData] = useState<StudentProfileData>();
    const [selectedSem, setSelectedSem] = useState("overall");
    const handleResultFetch = async () => {
        const resData = await getStudentProfileData(params.enrollmentID);
        loader.inactiveLoader();
        setStudentData(resData);
    }
    console.log(studentData?.marksPerSemester[0]);

    useEffect(() => {
        loader.activeLoader();
        handleResultFetch();
    }, []);

    // const { theme: mode } = useTheme()
    // const [config] = useConfig()

    // const theme = themes.find((theme) => theme.name === config.theme)

    return (
        <div className={"w-full px-6 flex-row gap-6"}>
            <div
                className={"w-full flex flex-row justify-between text-2xl font-bold scroll-m-20 tracking-tight lg:text-5xlscroll-m-20 pb-2 first:mt-0"}>
                <h1>
                    Hi, {studentData?.name}
                </h1>
                <h2>
                    {studentData?.batch}
                </h2>
            </div>
            <div className={"flex flex-row justify-between gap-4"}>
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

            <div className={"grid grid-cols-3 grid-rows-1 gap-4 pb-4"}>
                <div className={"col-span-2"}>
                    <h1 className={"text-2xl font-bold pt-4 pb-3"}>Results</h1>
                    <div>
                        <Tabs
                            className={""}
                            defaultValue={"overall"}
                            onValueChange={value => setSelectedSem(value)}
                        >
                            <TabsList className="flex flex-row  mb-2">
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
                                {studentData?.marksPerSemester.sort((i, j) => parseInt(i.semester) - parseInt(j.semester))
                                    .map((semData, idx) =>
                                        <TabsTrigger
                                            key={idx + 1}
                                            className={"flex-[1_1_0] relative"}
                                            value={semData.semester}
                                        >
                                            {selectedSem == semData.semester && <motion.div
                                                layoutId="clickedbutton2"
                                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                                className={cn(
                                                    "absolute inset-0 bg-primary-foreground rounded-full"
                                                )}
                                            />}
                                            <span className="relative block text-primary">
                                                Sem {semData.semester}
                                            </span>

                                        </TabsTrigger>
                                    )
                                }
                            </TabsList>

                            <TabsContent value="overall" className={"grid grid-cols-3 gap-4 pt-10"}>
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
                                {/* <div className="flex items-center space-x-2 col-span-3">
                                    <Checkbox/>
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Show Credit Info
                                    </label>
                                </div> */}
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

                            {studentData?.marksPerSemester.sort((i, j) => parseInt(i.semester) - parseInt(j.semester))
                                .map((semData, idx) =>
                                    <TabsContent key={idx + 1} value={semData.semester}
                                        className={"grid grid-cols-3 gap-4"}>
                                        <Card>
                                            <CardHeader
                                                className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                                <CardTitle>Marks</CardTitle>
                                            </CardHeader>
                                            <CardContent className="font-semibold p-5">
                                                {semData.marks} / {semData.total}
                                                <CardDescription>
                                                    Total Marks Obtained
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader
                                                className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                                <CardTitle>SGPA</CardTitle>
                                            </CardHeader>
                                            <CardContent className="font-semibold p-5">
                                                {Number(semData.sgpa).toFixed(3)}
                                                <CardDescription>
                                                    Semester Grade Point Average
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader
                                                className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                                <CardTitle>Percentage</CardTitle>
                                            </CardHeader>
                                            <CardContent className="font-semibold p-5">
                                                {Number(semData.percentage).toFixed(3)}%
                                                <CardDescription>
                                                    Percentage of Marks Obtained
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                        {/* <div className="flex items-center space-x-2 col-span-3">
                                            <Checkbox/>
                                            <label
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Show Credit Info
                                            </label>
                                        </div> */}
                                        <Card>
                                            <CardHeader
                                                className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                                <CardTitle>Credit Marks</CardTitle>
                                            </CardHeader>
                                            <CardContent className="font-semibold p-5">
                                                {semData.creditmarks} / {semData.creditmarks}
                                                <CardDescription>
                                                    Total Credit Marks Obtained
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader
                                                className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                                <CardTitle>Total Credits</CardTitle>
                                            </CardHeader>
                                            <CardContent className="font-semibold p-5">
                                                {semData.totalcredits}
                                                <CardDescription>
                                                    Total Credits for the Semester
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader
                                                className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                                <CardTitle>C. Percentage</CardTitle>
                                            </CardHeader>
                                            <CardContent className="font-semibold p-5">
                                                {Number(semData.creditspercentage).toFixed(3)}%
                                                <CardDescription>
                                                    Percentage of Credit Marks Obtained
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                )
                            }
                        </Tabs>
                    </div>
                    <div>
                    </div>
                </div>

                <CardContent className="pb-4 pt-8 col-span-1">
                    <div className="h-[200px]">
                        <ResponsiveContainer width={450} height={500}>
                            {(selectedSem !== "overall") ? <RadarChart
                                data={studentData?.subject.find(i => i.semester === selectedSem)?.subjects}
                                margin={{ top: 5, right: 10, left: 10, bottom: 15 }}
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
                                <LineChart
                                data={studentData?.marksPerSemester.sort((a, b) => Number(a.semester) - Number(b.semester))}
                                margin={{ top: 10, right: 20, left: 20, bottom: 18 }}
                            >
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <XAxis dataKey="semester" domain={[0, studentData?.marksPerSemester.length || 1]}
                                    label={{
                                        key: 'xAxisLabel',
                                        value: 'Semester',
                                        position: 'bottom',
                                    }}
                                    padding={{ left: 20, right: 20 }}
                                />
                                <YAxis
                                    domain={[
                                        (dataMin: number) => Math.round((dataMin + Number.EPSILON) * 100) / 100,
                                        (dataMax: number) => Math.round((dataMax + Number.EPSILON) * 100) / 100
                                    ]}
                                    label={
                                        {
                                            value: 'SGPA',
                                            angle: -90,
                                            position: 'insideLeft',
                                        }
                                    }
                                    padding={{ top: 20, bottom: 20 }}
                                />
                                {/* 
                                    <YAxis 
                                    domain={[
                                        parseFloat(data1[0].sgpa.slice(0, -1)),
                                        parseFloat(data1[data1.length - 1].sgpa.slice(0, -1)),
                                    ]}/>
                                    */}
                                <Tooltip
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                                <div className="rounded-lg border bg-background p-2 shadow-sm">
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="flex flex-col">
                                                            <span
                                                                className="text-[0.70rem] uppercase text-muted-foreground">
                                                                SGPA
                                                            </span>
                                                            <span className="font-bold text-muted-foreground">
                                                                {payload[0].value}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
    
                                        return null
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dot={false}
                                    dataKey="sgpa"
                                    strokeWidth={4}
                                />
                                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                            </LineChart>}
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </div>
            {selectedSem === "overall" ? <OverallTest studentData={studentData}/> : <SemTest sem={selectedSem} studentData={studentData}/>}
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
    )
}

