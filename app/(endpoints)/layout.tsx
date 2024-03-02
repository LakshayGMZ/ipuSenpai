import React from "react";

export default function DashboardLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <div className={"min-h-screen mt-[1px]"}>
            {children}
        </div>
    )
}