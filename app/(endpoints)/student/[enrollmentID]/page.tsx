'use client'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {getStudentProfileData} from "@/app/lib/dataFetchClient";
import React from 'react';
import {
    LineChart,
    CartesianGrid,
    Line,
    Legend,
    XAxis,
    YAxis,
    Tooltip,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer,
  } from "recharts";
import { themes } from "@/app/registry/themes";
// import { useTheme } from "next-themes";
// import { useConfig } from "@/hooks/use-config"

export default async function Page(
    {
        params
    }: {
        params: { enrollmentID: string }
    }) {
    const studentData = await getStudentProfileData(params.enrollmentID);
    // const { theme: mode } = useTheme()
    // const [config] = useConfig()

    // const theme = themes.find((theme) => theme.name === config.theme)

    return (
        <div className={"w-full px-6 flex-row gap-6"}>
            <div className={"w-full flex flex-row justify-between text-2xl font-bold scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xlscroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"}>
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
                        <Tabs className={""} defaultValue={"overall"}>
                            <TabsList className="grid grid-cols-4 mb-2">
                                <TabsTrigger value="overall">Overall</TabsTrigger>
                                {studentData?.marksPerSemester.sort((i, j) => parseInt(i.semester) - parseInt(j.semester))
                                    .map((semData, idx) =>
                                        <TabsTrigger
                                            key={idx + 1}
                                            value={"Sem " + semData.semester}>
                                            Sem {semData.semester}
                                        </TabsTrigger>
                                    )
                                }
                            </TabsList>

                            <TabsContent value="overall" className={"grid grid-cols-3 gap-4"}>
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
                                    <TabsContent key={idx + 1} value={"Sem " + semData.semester}
                                                 className={"grid grid-cols-3 gap-4"}>
                                        <Card>
                                            <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
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
                                            <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
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
                                            <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
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
                                            <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
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
                                            <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
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
                                            <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
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

                {/* <div className={"col-span-1 bg-yellow-400"}/> */}
                <CardContent className="pb-4 pt-8">
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                width={500}
                                height={250}
                                data={studentData?.marksPerSemester.sort((a, b) => Number(a.semester) - Number(b.semester))}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <XAxis dataKey="semester" domain={[0, studentData?.marksPerSemester.length]}
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
                                    (dataMax: number) => dataMax,
                                ]}
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
                                                <span className="text-[0.70rem] uppercase text-muted-foreground">
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
                                <Legend 
                                verticalAlign="top"
                                height={36}
                                />
                                <Line
                                type="monotone"
                                dataKey="sgpa"
                                strokeWidth={4}
                                activeDot={{
                                    r: 6,
                                    style: { fill: "var(--theme-primary)", opacity: 0.10 },
                                  }}
                                  style={
                                    {
                                      stroke: "var(--theme-primary)",
                                      opacity: 0.75,
                                      "--theme-primary": `hsl(${
                                        themes[6]?.cssVars["dark"].primary
                                      })`,
                                    } as React.CSSProperties
                                  }
                                  />
                                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
            <Card className="pb-4 pt-4 gap-4">
                    <div className="">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                width={500}
                                height={250}
                                data={studentData?.marksPerSemester.sort((a, b) => Number(a.semester) - Number(b.semester))}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <XAxis dataKey="semester" domain={[0, studentData?.marksPerSemester.length]}
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
                                    (dataMax: number) => dataMax,
                                ]}
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
                                                <span className="text-[0.70rem] uppercase text-muted-foreground">
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
                                <Legend 
                                verticalAlign="top"
                                height={36}
                                />
                                <Line
                                type="monotone"
                                dataKey="sgpa"
                                strokeWidth={4}
                                activeDot={{
                                    r: 6,
                                    style: { fill: "var(--theme-primary)", opacity: 0.10 },
                                  }}
                                  style={
                                    {
                                      stroke: "var(--theme-primary)",
                                      opacity: 0.75,
                                      "--theme-primary": `hsl(${
                                        themes[6]?.cssVars["dark"].primary
                                      })`,
                                    } as React.CSSProperties
                                  }
                                  />
                                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
                <CardContent className="pb-4 pt-8">
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                width={500}
                                height={250}
                                data={studentData?.marksPerSemester.sort((a, b) => Number(a.semester) - Number(b.semester))}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <XAxis dataKey="semester" domain={[0, studentData?.marksPerSemester.length]}
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
                                    (dataMax: number) => dataMax,
                                ]}
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
                                                <span className="text-[0.70rem] uppercase text-muted-foreground">
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
                                <Legend 
                                verticalAlign="top"
                                height={36}
                                />
                                <Line
                                type="monotone"
                                dataKey="sgpa"
                                strokeWidth={4}
                                activeDot={{
                                    r: 6,
                                    style: { fill: "var(--theme-primary)", opacity: 0.10 },
                                  }}
                                  style={
                                    {
                                      stroke: "var(--theme-primary)",
                                      opacity: 0.75,
                                      "--theme-primary": `hsl(${
                                        themes[6]?.cssVars["dark"].primary
                                      })`,
                                    } as React.CSSProperties
                                  }
                                  />
                                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
                <CardContent className="pb-4 pt-8">
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                width={500}
                                height={250}
                                data={studentData?.marksPerSemester.sort((a, b) => Number(a.semester) - Number(b.semester))}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <XAxis dataKey="semester" domain={[0, studentData?.marksPerSemester.length]}
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
                                    (dataMax: number) => dataMax,
                                ]}
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
                                                <span className="text-[0.70rem] uppercase text-muted-foreground">
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
                                <Legend 
                                verticalAlign="top"
                                height={36}
                                />
                                <Line
                                type="monotone"
                                dataKey="sgpa"
                                strokeWidth={4}
                                activeDot={{
                                    r: 6,
                                    style: { fill: "var(--theme-primary)", opacity: 0.10 },
                                  }}
                                  style={
                                    {
                                      stroke: "var(--theme-primary)",
                                      opacity: 0.75,
                                      "--theme-primary": `hsl(${
                                        themes[6]?.cssVars["dark"].primary
                                      })`,
                                    } as React.CSSProperties
                                  }
                                  />
                                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
                <CardContent className="pb-4 pt-8">
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                width={500}
                                height={250}
                                data={studentData?.marksPerSemester.sort((a, b) => Number(a.semester) - Number(b.semester))}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <XAxis dataKey="semester" domain={[0, studentData?.marksPerSemester.length]}
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
                                    (dataMax: number) => dataMax,
                                ]}
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
                                                <span className="text-[0.70rem] uppercase text-muted-foreground">
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
                                <Legend 
                                verticalAlign="top"
                                height={36}
                                />
                                <Line
                                type="monotone"
                                dataKey="sgpa"
                                strokeWidth={4}
                                activeDot={{
                                    r: 6,
                                    style: { fill: "var(--theme-primary)", opacity: 0.10 },
                                  }}
                                  style={
                                    {
                                      stroke: "var(--theme-primary)",
                                      opacity: 0.75,
                                      "--theme-primary": `hsl(${
                                        themes[6]?.cssVars["dark"].primary
                                      })`,
                                    } as React.CSSProperties
                                  }
                                  />
                                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </div>
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

