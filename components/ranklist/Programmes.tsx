"use client"

import {getBatches, getInstitutes, getSemesters, getShifts, getSpecs} from "@/app/lib/ranklist";
import * as React from "react";
import {useEffect, useState} from "react";
import {PreBuiltSelect} from "@/components/ui/select";
import {RanklistQueryFields, RanklistSelectDataFields as DataFields} from "@/types/types";


export default function Programmes(
    {
        programmes,
    }: {
        programmes: RanklistQueryFields[],
    }) {
    const [selectedData, setSelectedData] = useState<DataFields>({
        programme: "",
        institute: "",
        specialization: "",
        shift: "",
        batch: "",
        semester: "",
    })

    const [institutes, setInstitutes] = useState<RanklistQueryFields[]>([]);
    const [specializations, setSpecializations] = useState<RanklistQueryFields[]>([]);
    const [shifts, setShifts] = useState<RanklistQueryFields[]>([]);
    const [batches, setBatches] = useState<RanklistQueryFields[]>([]);
    const [semesters, setSemesters] = useState<RanklistQueryFields[]>([]);

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


    return (
        <>
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
        </>
    )
}