"use client"

import {
    getBatches,
    getInstitutes,
    getProgrammes,
    getResult,
    getSemesters,
    getShifts,
    getSpecs
} from "@/app/lib/dataFetch";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {PreBuiltSelect} from "@/components/ui/select";
import {RanklistQueryFields, RanklistSelectDataFields, StudentResults,} from "@/types/types";
import {Button} from "@/components/ui/button";
import {DataTable} from "@/components/ranklist/DataTable";
import {columnsOverall, columnsSem} from "@/app/lib/data";
import {isMobile} from "@/app/lib/actions";
import {useLoader} from "@/app/lib/LoaderContext";
import {StudentDataDialog} from "@/components/ranklist/StudentDataDialog";


export default function Programmes() {
    const [selectedData, setSelectedData] = useState<RanklistSelectDataFields>({
        programme: "",
        institute: "",
        specialization: "",
        shift: "",
        batch: "",
        semester: "",
    })
    const loader = useLoader();
    const [programmes, setProgrammes] = useState<RanklistQueryFields[]>([]);
    const [institutes, setInstitutes] = useState<RanklistQueryFields[]>([]);
    const [specializations, setSpecializations] = useState<RanklistQueryFields[]>([]);
    const [shifts, setShifts] = useState<RanklistQueryFields[]>([]);
    const [batches, setBatches] = useState<RanklistQueryFields[]>([]);
    const [semesters, setSemesters] = useState<RanklistQueryFields[]>([]);
    const [resultData, setResultData] = useState<StudentResults[]>([]);
    const [selectStudent, setSelectStudent] = useState<{ open: boolean; data: StudentResults; }>({
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
        pageIndex: 1,
        pageSize: 60,
        totalPages: 5
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

    const handleResultFetch = async () => {
        const resData = await getResult(selectedData, setPagination, pagination.pageIndex - 1, pagination.pageSize);
        loader.inactiveLoader();

        setResultData(resData);
    }

    useEffect(() => {
        const fetchSemester = async () =>
            setSemesters(await getSemesters(selectedData.programme, selectedData.institute, selectedData.batch));
        if (selectedData.programme !== "" && selectedData.institute !== "" && selectedData.batch !== "")
            fetchSemester();
    }, [selectedData.institute, selectedData.programme, selectedData.batch]);

    useEffect(() => {
        if (pagination.pageIndex > pagination.totalPages!) {
            setPagination(prevState => ({...prevState, pageIndex: 1}));
        } else if (Object.values(selectedData).every(i => i !== "")) {
            loader.activeLoader();
            (async () => await handleResultFetch())();
        }
    }, [pagination.pageIndex, pagination.pageSize]);


    return (
        <>
            <form className="lg:px-10">
                <div className="rounded-lg mx-4 md:mx-10">
                    <h1 className="text-4xl font-semibold mb-6">Ranklist</h1>
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
                                await handleResultFetch();
                            }}
                        >Search</Button>
                    </div>
                </div>
            </form>

            <StudentDataDialog studentData={selectStudent} setStudentData={setSelectStudent}/>

            {resultData.length > 0 && <DataTable
                columns={resultData[0].sgpa !== undefined ? columnsSem : columnsOverall}
                pagination={pagination}
                setPagination={setPagination}
                data={resultData}
                setSelectStudent={setSelectStudent}
            />}
        </>
    )
}