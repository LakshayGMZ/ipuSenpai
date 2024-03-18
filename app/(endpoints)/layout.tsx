import React from "react";
import {MultiStepLoader} from "@/components/ui/Loader";

export default function DashboardLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <div className={"mt-28"}>
            {children}
            <MultiStepLoader/>
        </div>
    )
}