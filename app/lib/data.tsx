import {ColumnDef} from "@tanstack/react-table";
import {Button} from "@/components/ui/button";
import {ArrowUpDown} from "lucide-react";
import * as React from "react";
import {StudentResults} from "@/types/types";

export const columnsOverall: ColumnDef<StudentResults>[] = [
    {
        accessorKey: "enrollment",

        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Enroll No.
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.enrollment}</div>,
    },
    {
        accessorKey: "name",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="capitalize">{row.original.name}</div>,
    },
    {
        accessorKey: "marks",
        header: "marks",
        cell: ({row}) => (
            <div className="capitalize">{row.original.marks}/{row.original.total}</div>
        ),
    },
    {
        accessorKey: "cgpa",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    CGPA
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.cgpa!.toFixed(2)}</div>,
    },
    {
        accessorKey: "percentage",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    %
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.percentage.toFixed(2)}</div>,
    },
    {
        accessorKey: "creditsPercentage",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Credit %
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.creditsPercentage.toFixed(2)}</div>,
    },
    {
        accessorKey: "rank",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Rank
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.rank}</div>,
    }
]


export const columnsSem: ColumnDef<StudentResults>[] = [
    {
        accessorKey: "enrollment",

        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Enroll No.
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.enrollment}</div>,
    },
    {
        accessorKey: "name",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="capitalize">{row.original.name}</div>,
    },
    {
        accessorKey: "marks",
        header: "Marks",
        cell: ({row}) => (
            <div className="capitalize">{row.original.marks}/{row.original.total}</div>
        ),
    },
    {
        accessorKey: "sgpa",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    SGPA
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.sgpa!.toFixed(2)}</div>,
    },
    {
        accessorKey: "percentage",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    %
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.percentage.toFixed(2)}</div>,
    },
    {
        accessorKey: "creditsPercentage",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Credit %
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.creditsPercentage.toFixed(2)}</div>,
    },
    {
        accessorKey: "rank",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Rank
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.rank}</div>,
    }
]