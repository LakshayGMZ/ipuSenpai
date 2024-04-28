"use client"

import {getBatches, getInstitutes, getProgrammes, getSemesters, getShifts, getSpecs} from "@/app/lib/dataFetchServer";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {PreBuiltSelect} from "@/components/ui/select";
import {RanklistQueryFields, RanklistSelectDataFields, StudentDataJoined, StudentResults,} from "@/types/types";
import {Button} from "@/components/ui/button";
import {DataTable} from "@/components/ranklist/DataTable";
import {columnsOverall, columnsSem} from "@/app/lib/data";
import {isMobile} from "@/app/lib/actions";
import {useLoader} from "@/app/lib/LoaderContext";
import {StudentDataDialog} from "@/components/ranklist/StudentDataDialog";
import {Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, YAxis,} from "recharts";
import {useRouter} from "next/navigation";

export default function Ranklist(
    {
        data,
        results
    }:{
        data: RanklistSelectDataFields,
        results: StudentResults
    }) {
    console.log(data)
    const router = useRouter();
    const [selectedData, setSelectedData] = useState<RanklistSelectDataFields>(data);
    const loader = useLoader();
    const [programmes, setProgrammes] = useState<RanklistQueryFields[]>([]);
    const [institutes, setInstitutes] = useState<RanklistQueryFields[]>([]);
    const [specializations, setSpecializations] = useState<RanklistQueryFields[]>([]);
    const [shifts, setShifts] = useState<RanklistQueryFields[]>([]);
    const [batches, setBatches] = useState<RanklistQueryFields[]>([]);
    const [semesters, setSemesters] = useState<RanklistQueryFields[]>([]);

    const [selectStudent, setSelectStudent] = useState<{ open: boolean; data: StudentDataJoined; }>({
        open: false,
        data: {
            cgpa: 0,
            creditMarks: 0,
            creditsPercentage: 0,
            enrollment: "",
            marks: 0,
            marksPerSemester: [],
            name: "",
            percentage: 0,
            rank: 0,
            semesters: 0,
            sgpa: 0,
            subject: [],
            total: 0,
            totalCreditMarks: 0,
            totalCreditMarksWeighted: 0,
            totalCredits: 0
        }
    });
    const [pagination, setPagination] = useState<{ totalPages?: number, pageIndex: number, pageSize: number }>({
        pageIndex: parseInt(String(data.page!)),
        pageSize: parseInt(String(data.pageSize!)),
        totalPages: results.totalPages
    });
    const is_mobile = useRef<boolean>(false);

    useEffect(() => {
        isMobile()
            .then(value => {
                is_mobile.current = value;
            })
    }, []);

    useEffect(() => {
        const fetchProgrammes = async () =>
            setProgrammes(await getProgrammes());
        fetchProgrammes();
    }, []);

    useEffect(() => {
        loader.inactiveLoader();
    }, [results]);

    useEffect(() => {
        const fetchInstitutes = async () =>
            setInstitutes(await getInstitutes(selectedData.programme));
        if (selectedData.programme !== "") fetchInstitutes();
    }, [selectedData.programme]);

    useEffect(() => {
        const fetchSpecs = async () => {
            setSpecializations(await getSpecs(selectedData.programme, selectedData.institute));
            setBatches(await getBatches(selectedData.programme, selectedData.institute));
        }
        if (selectedData.programme !== "" && selectedData.institute !== "") fetchSpecs();
    }, [selectedData.programme, selectedData.institute]);

    useEffect(() => {
        const fetchShifts = async () =>
            setShifts(await getShifts(selectedData.institute));
        if (selectedData.institute !== "") fetchShifts();
    }, [selectedData.institute]);


    useEffect(() => {
        const fetchSemester = async () =>
            setSemesters(await getSemesters(selectedData.programme, selectedData.institute, selectedData.batch));
        if (selectedData.programme !== "" && selectedData.institute !== "" && selectedData.batch !== "")
            fetchSemester();
    }, [selectedData.institute, selectedData.programme, selectedData.batch]);

    useEffect(() => {
        const currUrl = new URL(window.location.href)
        const currPage = parseInt(String(currUrl.searchParams.get("page")));
        if (currPage !== null) {
            if (currPage > 0) {
                currUrl.searchParams.set("page", String(pagination.pageIndex - 1));
                router.push(currUrl.toString());
            }

        }
    }, [pagination.pageIndex]);

    const handleSubmit = () => {
        router.push(`?batch=${selectedData.batch}&institute=${encodeURIComponent(selectedData.institute)}&programme=${encodeURIComponent(selectedData.programme)}&semester=${selectedData.semester}&shift=${selectedData.shift}&specialization=${selectedData.specialization}`);
    }

    return (
        <>
            <form className="lg:px-10">
                <div className="rounded-lg mx-4 md:mx-10">
                    <h1 className="mb-6 scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight first:mt-0 lg:text-5xl">Ranklist</h1>
                    <div className="grid grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6">
                        <PreBuiltSelect<RanklistSelectDataFields>
                            name={"programme"}
                            values={programmes}
                            valueState={selectedData.programme}
                            setValueState={setSelectedData}
                            disabled={false}
                            is_mobile={is_mobile.current}
                        />
                        <PreBuiltSelect<RanklistSelectDataFields>
                            name={"institute"}
                            values={institutes}
                            valueState={selectedData.institute}
                            setValueState={setSelectedData}
                            disabled={institutes.length === 0}
                            is_mobile={is_mobile.current}
                        />
                        <PreBuiltSelect<RanklistSelectDataFields>
                            name={"specialization"}
                            values={specializations}
                            valueState={selectedData.specialization}
                            setValueState={setSelectedData}
                            disabled={specializations.length === 0}
                            is_mobile={is_mobile.current}
                        />
                        <PreBuiltSelect<RanklistSelectDataFields>
                            name={"shift"}
                            values={shifts}
                            valueState={selectedData.shift}
                            setValueState={setSelectedData}
                            disabled={shifts.length === 0}
                            is_mobile={is_mobile.current}
                        />
                        <PreBuiltSelect<RanklistSelectDataFields>
                            name={"batch"}
                            values={batches}
                            valueState={selectedData.batch}
                            setValueState={setSelectedData}
                            disabled={batches.length === 0}
                            is_mobile={is_mobile.current}
                        />
                        <PreBuiltSelect<RanklistSelectDataFields>
                            name={"semester"}
                            values={semesters}
                            valueState={selectedData.semester}
                            setValueState={setSelectedData}
                            disabled={semesters.length === 0}
                            is_mobile={is_mobile.current}

                        />
                        <Button
                            className="col-span-2 md:col-span-1 md:col-start-2 lg:col-start-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            variant={"outline"}
                            disabled={Object.values(selectedData).some(i => i === "")}
                            onClick={async (e) => {
                                e.preventDefault();
                                loader.activeLoader();
                                handleSubmit();
                            }}
                        >Search</Button>
                    </div>
                </div>
            </form>

            {results.gpaList.length > 0 && <div>
                <ResponsiveContainer width="99%" height={300}>
                    <LineChart
                        data={results.gpaList}
                        margin={{
                            top: 5,
                            right: -10,
                            left: -10,
                            bottom: 5,
                        }}
                    >
                        {/* <XAxis dataKey="name"
                            label={{
                                key: 'xAxisLabel',
                                value: 'Name',
                                position: 'bottom',
                                }}
                            padding={{ left: 20, right: 20 }}
                        /> */}
                        <YAxis
                            yAxisId="left"
                            dataKey={"gpa"}
                            domain={[
                                (dataMin: number) => Math.round((dataMin + Number.EPSILON) * 100) / 100,
                                (dataMax: number) => Math.round((dataMax + Number.EPSILON) * 100) / 100,
                            ]}
                            padding={{top: 10, bottom: 10}}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            dataKey={"percentage"}
                            domain={[
                                (dataMin: number) => Math.round((dataMin + Number.EPSILON) * 100) / 100,
                                (dataMax: number) => Math.round((dataMax + Number.EPSILON) * 100) / 100,
                            ]}
                            padding={{top: 10, bottom: 10}}
                        />
                        <Tooltip
                            content={({active, payload}) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                                            <div className="grid grid-rows-2 grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                        GPA
                                                    </span>
                                                    <span className="font-bold text-muted-foreground">
                                                        {payload[0].payload.gpa}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                        Enrollment
                                                    </span>
                                                    <span className="font-bold">
                                                        {payload[0].payload.enrollment}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                        Percentage
                                                    </span>
                                                    <span className="font-bold text-muted-foreground">
                                                        {payload[0].payload.percentage.toFixed(2)}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                        Name
                                                    </span>
                                                    <span className="font-bold">
                                                        {payload[0].payload.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                return null
                            }}
                        />
                        {/* <CartesianGrid strokeDasharray="2 2" /> */}
                        <Legend
                            formatter={(value, entry, index) =>
                            <ul className={`flex flex-row leading-5 [&:not(:first-child)]:mt-5 text-color-css dark:text-white text-slate-950`}>
                                {index === 0 ? 'GPA' : 'Percentage'}
                            </ul>}
                            verticalAlign="top"
                            height={5}
                            iconType="plainline"
                            iconSize={20}
                        />
                        {/* <Legend verticalAlign="top" height={5} /> */}
                        <ReferenceLine y={results.avgGpa} stroke="white" strokeDasharray="3 3" label={{
                            value: 'Average GPA: ' + results.avgGpa.toFixed(4),
                            position: 'insideBottomRight',
                            fill: "white",
                            fontSize: 16
                        }}
                        yAxisId="left"
                        />
                        <ReferenceLine y={results.avgPercentage} stroke="white" strokeDasharray="3 3" label={{
                            value: 'Average %: ' + results.avgPercentage.toFixed(4),
                            position: 'insideTopRight',
                            fill: "white",
                            fontSize: 16
                        }}
                        yAxisId="right"
                        />

                        <Line
                            name="GPA"
                            type="monotone"
                            yAxisId="left"
                            dataKey="gpa"
                            strokeWidth={4}
                            dot={false}
                            animationDuration={2000}
                        />
                        <Line
                            name="Percentage"
                            type="monotone"
                            yAxisId="right"
                            dataKey="percentage"
                            strokeWidth={4}
                            dot={false}
                            animationDuration={2000}
                            opacity={0.75}
                            strokeDasharray="6 5 5"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>}



            <StudentDataDialog studentData={selectStudent} setStudentData={setSelectStudent}/>

            {results.ranklist.length > 0 && <DataTable
                columns={results.ranklist[0].sgpa !== undefined ? columnsSem : columnsOverall}
                pagination={pagination}
                setPagination={setPagination}
                data={results.ranklist}
                setSelectStudent={setSelectStudent}
            />}
        </>
    );
}