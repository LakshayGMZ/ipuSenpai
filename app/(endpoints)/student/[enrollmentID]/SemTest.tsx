import { StudentProfileData, GradeFrequency } from "@/types/types";
import { Card } from "@/components/ui/card";
import { Bar, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, RadialBar, RadialBarChart, LabelList } from "recharts";
import { SemResultTable } from "@/components/student/SemResultTable";

export default function SemTest(
    {
        sem,
        studentData
    }: {
        sem: string,
        studentData?: StudentProfileData
    }
) {

    let frequencygrades: GradeFrequency[] = []

    studentData?.subject.find(i => i.semester === sem)?.subjects.forEach((subject) => {
        if (subject.grade) {
            let grade = frequencygrades.find((grade) => grade.grade === subject.grade)
            if (grade) {
                grade.frequency += 1
            } else {
                frequencygrades.push({
                    grade: subject.grade,
                    frequency: 1
                })
            }
        }
    })

    return (
        <>
            <h1 className={"text-2xl font-bold pt-4 pb-3"}>Semester {sem} Statistics</h1>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 pb-5"}>
                <Card className="pb-4 pt-4 gap-4">
                    <ResponsiveContainer width="100%" height={350}>
                        <ComposedChart
                            data={studentData?.subject.find(i => i.semester === sem)?.subjects}
                            margin={{ top: 10, right: 10, left: 15, bottom: 18 }}
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
                                offset={10}
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
                                fill="var(--primary-foreground)"
                                stackId="subject"
                            />
                            <Bar
                                dataKey="external"
                                fill="var(--primary)"
                                stackId="subject"
                            />
                            <Line
                                type="monotone"
                                dot={true}
                                dataKey="total"
                                style={{ stroke: "var(--secondary-foreground)" }}
                                // stroke=
                                strokeWidth={4}
                            />
                            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                        </ComposedChart>
                    </ResponsiveContainer>
                </Card>

                {/* TODO
                    Need a frequency distribution chart for the grades
                */}

<Card className="pb-4 pt-4 gap-4">
                    <ResponsiveContainer width="100%" height={350}>
                    <RadialBarChart
                                data={frequencygrades.sort((i, j) => i.frequency - j.frequency).reverse()}
                                innerRadius="12%" 
                                outerRadius="100%" 
                                startAngle={0} 
                                endAngle={360}
                            >
                                
                                <Tooltip
                                    content={({active, payload}) => {
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
                                    <LabelList dataKey="grade" position="inside" fill="var(--primary-foreground)" fontWeight={600} />
                                </RadialBar>
                            </RadialBarChart>
                    </ResponsiveContainer>
                </Card>
            </div>
            <h1 className={"text-2xl font-bold pt-4 pb-3"}>Result Breakdown</h1>
            <SemResultTable resultData={studentData!.subject.find(i => i.semester === sem)!.subjects} />
        </>
    )
}