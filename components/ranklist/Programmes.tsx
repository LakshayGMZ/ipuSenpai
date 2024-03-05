"use client"

import {getInstitutes} from "@/app/lib/ranklist";
import * as React from "react";
import {useState} from "react";
import InstCombobox from "@/components/ranklist/InstCombobox";
import {Check, ChevronDown, ChevronUp, ChevronUpIcon} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function Programmes(
    {
        programmes,
    }: {
        programmes: string[],
    }) {
    const [progname, setProgname] = useState("");
    const [cllgList, setCllgList] = useState([]);


    return (
        <>
            <Select className="w-full md:col-span-1"
                    onValueChange={async (v: string) => {
                        if (v !== "") {
                            setProgname(v);
                            setCllgList(await getInstitutes(v));
                        }}}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Institute"/>
                </SelectTrigger>
                <SelectContent position="popper">
                    {
                        programmes.map(
                            (cllg: string, idx: number) =>
                                <SelectItem key={idx + 1} value={cllg}>
                                    {cllg}
                                </SelectItem>
                        )}

                </SelectContent>
            </Select>


            <InstCombobox collegeList={cllgList} progname={progname} disabled={cllgList.length == 0}/>
        </>
    )
}