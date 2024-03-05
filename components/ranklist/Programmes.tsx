"use client"

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {getInstitutes} from "@/app/lib/ranklist";
import {ReactNode, useEffect, useState} from "react";
import InstCombobox from "@/components/ranklist/InstCombobox";

export default function Programmes(
    {
        programmes,
    }: {
        programmes: string[],
    }) {
    const [instituteState, setInstituteState] = useState<ReactNode>(
        <InstCombobox progname={""} collegeList={[]} />
    )

    return (

        <>
            <Select className="w-full md:col-span-1" onValueChange={(v) => setInstituteState(getInstitutes(v))}>
            <SelectTrigger>
                <SelectValue placeholder="Programme"/>
            </SelectTrigger>
            <SelectContent position="popper">
                {
                    programmes.map(
                        (progname, idx: number) =>
                            <SelectItem key={idx + 1} value={progname}>
                                {progname}
                            </SelectItem>
                    )}

            </SelectContent>
        </Select>
            {instituteState}
        </>

    )
}