import {StudentProfileData} from "@/types/types";
import { Card, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, XAxis, YAxis, Tooltip, Line, Legend, LineChart, Bar, BarChart, ComposedChart, RadialBarChart, RadialBar, Scatter, ScatterChart, PieChart, Pie } from "recharts";

export default function SemTest(
    {
        sem,
        studentData
    }:{
        sem: string,
        studentData?: StudentProfileData
    }
) {

    return (
        <>
            <h1 className={"text-2xl font-bold pt-4 pb-3"}>Semester {sem} Statistics</h1>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 pb-5"}>
                <Card className="pb-4 pt-4 gap-4">
                    <ResponsiveContainer>
                        <ComposedChart
                            data={studentData?.subject.find(i => i.semester === sem)?.subjects}
                            margin={{ top: 10, right: 20, left: 20, bottom: 18 }}
                            syncMethod="index"
                            syncId={"overallSyncID"}
                            layout="horizontal"
                        >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="subcode"
                                label={{
                                    key: 'xAxisLabel',
                                    value: 'Subject',
                                    position: 'bottom',
                                }}
                                padding={{ left: 20, right: 20 }}
                                angle={0}
                                offset={30}
                                fontSize={12}
                            />
                            <YAxis
                                domain={[
                                    (dataMin: number) => Math.round((dataMin + Number.EPSILON) * 100) / 100,
                                    (dataMax: number) => Math.round((dataMax + Number.EPSILON) * 100) / 100
                                ]}
                                label={
                                    {
                                        value: 'Marks',
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
                                            <div className="rounded-lg  bg-background p-2 shadow-sm">
                                                <div className="grid grid-rows-3 grid-cols-3 gap-0">
                                                    {payload[0].payload.internal !== "" &&
                                                    <div className="flex flex-row flex-col grid-row-1">
                                                        <span
                                                            className="text-[0.70rem] uppercase text-muted-foreground">
                                                            Internal
                                                        </span>
                                                        <span className="font-bold text-muted-foreground">
                                                            {payload[0].payload.internal}
                                                        </span>
                                                    </div>}
                                                    <div className="flex flex-row flex-col grid-row-1">
                                                        <span
                                                            className="text-[0.70rem] uppercase text-muted-foreground">
                                                            External
                                                        </span>
                                                        <span className="font-bold text-muted-foreground">
                                                            {payload[0].payload.external}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-row flex-col grid-row-1">
                                                        <span
                                                            className="text-[0.70rem] uppercase text-muted-foreground">
                                                            Total
                                                        </span>
                                                        <span className="font-bold text-muted-foreground">
                                                            {payload[0].payload.total}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-row flex-col grid-row-2">
                                                        <span
                                                            className="text-[0.70rem] uppercase text-muted-foreground">
                                                            Credits
                                                        </span>
                                                        <span className="font-bold text-muted-foreground">
                                                            {payload[0].payload.credits}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-row flex-col grid-row-2">
                                                        <span
                                                            className="text-[0.70rem] uppercase text-muted-foreground">
                                                            Grade
                                                        </span>
                                                        <span className="font-bold text-muted-foreground">
                                                            {payload[0].payload.grade}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-row flex-col grid-row-2">
                                                        <span
                                                            className="text-[0.70rem] uppercase text-muted-foreground">
                                                            Type
                                                        </span>
                                                        <span className="font-bold text-muted-foreground">
                                                            {payload[0].payload.ExamType}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-row flex-col grid-row-3 col-span-3">
                                                        <span
                                                            className="text-[0.70rem] uppercase text-muted-foreground">
                                                            Subject
                                                        </span>
                                                        <span className="font-bold text-muted-foreground">
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
                            <Bar
                                dataKey="internal"
                                fill="hsl(var(--primary-foreground))"
                                stackId="subject"
                            />
                            <Bar
                                dataKey="external"
                                fill="hsl(var(--primary))"
                                stackId="subject"
                            />
                            <Line
                                type="monotone"
                                dot={true}
                                dataKey="total"
                                stroke="hsl(var(--background))"
                                strokeWidth={4}
                            />
                            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                        </ComposedChart>
                    </ResponsiveContainer>
                </Card>
                {/* TODO
                    Need a frequency distribution chart for the grades
                */}
            </div>
            <h1 className={"text-2xl font-bold pt-4 pb-3"}>Result Breakdown</h1>
            {/* TODO:
                - Add a table to show the result breakdown
                Columns:
                - Subject Code
                - Subject Name (Credits)
                - Internal
                - External
                - Total
                - Grade
                (Don't forget to add the Exam Type as well)

                Kidding, Just copy the table from the ranklist drawer and modify it accordingly

            */}
        </>
    )
}