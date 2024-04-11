import {StudentProfileData} from "@/types/types";
import {Card} from "@/components/ui/card";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {OverallResultTable} from "@/components/student/OverallResultTable";

export default function OverallTest(
    {
        studentData
    }:{
        studentData?: StudentProfileData
    }
) {

    return (
        <>
            <h1 className={"text-2xl font-bold pt-4 pb-3"}>Overall Statistics</h1>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 pb-4"}>
                <Card className="pb-4 pt-4 gap-4">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            data={studentData?.marksPerSemester.sort((a, b) => Number(a.semester) - Number(b.semester))}
                            margin={{ top: 10, right: 20, left: 20, bottom: 18 }}
                            syncMethod={"index"}
                            syncId={"overallSyncID"}
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
                        </LineChart>
                    </ResponsiveContainer>
                </Card>
                <Card className="pb-4 pt-4 gap-4">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            data={studentData?.marksPerSemester.sort((a, b) => Number(a.semester) - Number(b.semester))}
                            margin={{ top: 10, right: 20, left: 20, bottom: 18 }}
                            syncMethod="index"
                            syncId={"overallSyncID"}
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
                                        value: 'Percentage',
                                        angle: -90,
                                        position: 'insideLeft',
                                        offset: -1
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
                                                    <div className="flex flex-col col-span-1">
                                                        <span
                                                            className="text-[0.70rem] uppercase text-muted-foreground">
                                                            Percentage
                                                        </span>
                                                        <span className="font-bold text-muted-foreground">
                                                            {payload[0].payload.percentage}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col col-span-1">
                                                        <span
                                                            className="text-[0.70rem] uppercase text-muted-foreground">
                                                            C. Percentage
                                                        </span>
                                                        <span className="font-bold text-muted-foreground">
                                                            {payload[0].payload.creditspercentage}
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
                                dataKey="percentage"
                                strokeWidth={4}
                            />
                            <Line
                                type="monotone"
                                dot={false}
                                dataKey="creditspercentage"
                                strokeWidth={4}
                                strokeDasharray="5 5"
                            />
                            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                        </LineChart>
                    </ResponsiveContainer>
                </Card>
            </div>

            <h1 className={"text-2xl font-bold pt-4 pb-3"}>Absolute Result Breakdown</h1>
            {studentData && <OverallResultTable resultData={studentData.marksPerSemester}/>}
            {/* {studentData?.marksPerSemester?.length > 0 && <DataTable
                columns={studentData?.marksPerSemester[0].sgpa !== undefined ? columnsSem : columnsOverall}
                pagination={pagination}
                setPagination={setPagination}
                data={resultData.ranklist}
                setSelectStudent={setSelectStudent}
            />} */}
            <h1 className={"text-2xl font-bold pt-4 pb-3"}>Cumulative Result Breakdown</h1>
            {/* TODO:
                Add a table to show the cumulative result breakdown
             */}
        </>
    )
}