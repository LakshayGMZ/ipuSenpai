"use client"

import {
    getBatches,
    getInstitutes,
    getProgrammes,
    getResultOverall,
    getResultSem,
    getSemesters,
    getShifts,
    getSpecs
} from "@/app/lib/ranklist";
import * as React from "react";
import {useEffect, useState} from "react";
import {PreBuiltSelect} from "@/components/ui/select";
import {RanklistQueryFields, RanklistSelectDataFields as DataFields, StudentResults,} from "@/types/types";
import {Button} from "@/components/ui/button";
import {DataTable} from "@/components/ranklist/DataTable";
import {columnsOverall, columnsSem} from "@/app/lib/data";


export default function Programmes() {
    const [selectedData, setSelectedData] = useState<DataFields>({
        programme: "",
        institute: "",
        specialization: "",
        shift: "",
        batch: "",
        semester: "",
    })
    const [programmes, setProgrammes] = useState<RanklistQueryFields[]>([]);
    const [institutes, setInstitutes] = useState<RanklistQueryFields[]>([]);
    const [specializations, setSpecializations] = useState<RanklistQueryFields[]>([]);
    const [shifts, setShifts] = useState<RanklistQueryFields[]>([]);
    const [batches, setBatches] = useState<RanklistQueryFields[]>([]);
    const [semesters, setSemesters] = useState<RanklistQueryFields[]>([]);
    const [resultData, setResultData] = useState<StudentResults[]>([]);
    const [pagination, setPagination] = useState<{totalPages?: number, pageIndex: number, pageSize: number}>({
        pageIndex: 1,
        pageSize: 60,
        totalPages: 5
    });

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
            setSemesters(await getSemesters(selectedData.programme, selectedData.institute));
        }
        if (selectedData.programme !== "" && selectedData.institute !== "") fetchSpecs();
    }, [selectedData.programme, selectedData.institute]);

    useEffect(() => {
        const fetchShifts = async () =>
            setShifts(await getShifts(selectedData.institute));
        if (selectedData.institute !== "") fetchShifts();
    }, [selectedData.institute]);

    const handleResultFetch = async () => {
        // e.preventDefault();
        if (selectedData.semester === "0") setResultData(await getResultOverall(selectedData, setPagination, pagination.pageIndex-1, pagination.pageSize));
        else setResultData(await getResultSem(selectedData, setPagination, pagination.pageIndex-1, pagination.pageSize));
    }

    useEffect(() => {
        if (Object.values(selectedData).every(i => i !== "")) handleResultFetch();
    }, [pagination.pageIndex, pagination.pageSize]);


    return (
        <>
            <form className="lg:px-10">
                <div className="rounded-lg mx-10">
                    <h1 className="text-4xl font-semibold mb-6">Ranklist</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6">
                        <PreBuiltSelect
                            name={"programme"}
                            values={programmes}
                            valueState={selectedData.programme}
                            setValueState={setSelectedData}
                            disabled={false}
                        />
                        <PreBuiltSelect
                            name={"institute"}
                            values={institutes}
                            valueState={selectedData.institute}
                            setValueState={setSelectedData}
                            disabled={institutes.length === 0}
                        />
                        <PreBuiltSelect
                            name={"specialization"}
                            values={specializations}
                            valueState={selectedData.specialization}
                            setValueState={setSelectedData}
                            disabled={specializations.length === 0}
                        />
                        <PreBuiltSelect
                            name={"shift"}
                            values={shifts}
                            valueState={selectedData.shift}
                            setValueState={setSelectedData}
                            disabled={shifts.length === 0}
                        />
                        <PreBuiltSelect
                            name={"batch"}
                            values={batches}
                            valueState={selectedData.batch}
                            setValueState={setSelectedData}
                            disabled={batches.length === 0}
                        />
                        <PreBuiltSelect
                            name={"semester"}
                            values={semesters}
                            valueState={selectedData.semester}
                            setValueState={setSelectedData}
                            disabled={semesters.length === 0}
                        />
                        <Button
                            className="md:col-start-2 lg:col-start-3 rounded-2xl"
                            variant={"outline"}
                            disabled={Object.values(selectedData).some(i => i === "")}
                            onClick={(e) => {e.preventDefault();handleResultFetch();}}
                        >Search</Button>
                    </div>
                </div>
            </form>


            {resultData.length > 0 && <DataTable
                columns={resultData[0].sgpa !== undefined ? columnsSem : columnsOverall}
                pagination={pagination}
                setPagination={setPagination}
                data={resultData}
            />}

        </>
    )
}