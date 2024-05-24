"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Bar, ComposedChart, Line, ResponsiveContainer, Tooltip} from "recharts";
import {StudentCountBy} from "@/types/types";

export default function HomePageGraphs(
    {
        studentCountBy
    }:{
        studentCountBy: StudentCountBy
    }
) {

    return (
        <>
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
        </>
    )
}