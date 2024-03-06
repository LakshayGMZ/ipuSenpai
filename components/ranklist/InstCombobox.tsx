"use client"

import {ReactNode, useEffect, useState} from "react";
import {getbatches, getShifts, getSpecs} from "@/app/lib/ranklist";
import Specializations from "@/components/ranklist/Specializations";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import Shifts from "@/components/ranklist/Shifts";
import Batches from "@/components/ranklist/Batches";

export default function InstCombobox(
    {
        collegeList,
        progname,
        disabled = true
    }:{
        collegeList: string[],
        progname: string,
        disabled?: boolean
    }
) {
    const [value, setValue] = useState("");
    const [shifts, setShifts] = useState<string[]>([]);
    const [batches, setBatches] = useState([]);
    const [specState, setSpecState] = useState<ReactNode>(
        <Specializations specializations={[]}/>
    )
    useEffect(() => {
        const fetchData = async () => {
            if (progname !== "" && value !== "") {
                setSpecState(getSpecs(progname, value));
                setShifts(await getShifts(value));
                setBatches(await getbatches(progname, value));
            }
        }
        fetchData();

    }, [value, progname]);

    return (

    <>
        <Select className="w-full md:col-span-1"
                disabled={disabled}
                onValueChange={(v) => setValue(v)}
        >
            <SelectTrigger>
                <SelectValue placeholder="Institute"/>
            </SelectTrigger>
            <SelectContent position="popper">
                {
                    collegeList.map(
                        (cllg: string, idx: number) =>
                            <SelectItem key={idx + 1} value={cllg}>
                                {cllg}
                            </SelectItem>
                    )}

            </SelectContent>
        </Select>
        {specState}
        <Shifts shifts={shifts} disabled={shifts.length == 0} />
        <Batches batches={batches} disabled={batches.length == 0} />
    </>

    );
}