"use client"

import {ReactNode, useEffect, useState} from "react";
import {getSpecs} from "@/app/lib/ranklist";
import Specializations from "@/components/ranklist/Specializations";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function Shifts(
    {
        shifts,
        disabled = true
    }: {
        shifts: string[],
        disabled?: boolean
    }
) {

    return (

        <>
            <Select className="w-full md:col-span-1"
                    disabled={disabled}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Shift"/>
                </SelectTrigger>
                <SelectContent position="popper">
                    {
                        Object.keys(shifts).map(
                            (shift: string, idx: number) =>
                                <SelectItem key={idx + 1} value={shift}>
                                    {shift}
                                </SelectItem>
                        )}

                </SelectContent>
            </Select>
        </>

    );
}