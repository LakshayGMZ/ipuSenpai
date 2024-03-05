"use client"

import {ReactNode, useEffect, useState} from "react";
import {getSpecs} from "@/app/lib/ranklist";
import Specializations from "@/components/ranklist/Specializations";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function Batches(
    {
        batches,
        disabled = true
    }: {
        batches: string[],
        disabled?: boolean
    }
) {

    return (

        <>
            <Select className="w-full md:col-span-1"
                    disabled={disabled}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Batch"/>
                </SelectTrigger>
                <SelectContent position="popper">
                    {
                        batches.map(
                            (batch: string, idx: number) =>
                                <SelectItem key={idx + 1} value={batch}>
                                    {batch}
                                </SelectItem>
                        )}

                </SelectContent>
            </Select>
        </>

    );
}