import {ColumnDef} from "@tanstack/react-table";
import {Button} from "@/components/ui/button";
import {ArrowUpDown} from "lucide-react";
import * as React from "react";
import {RanklistQueryFields, StudentDataJoined} from "@/types/types";
import {Badge} from "@/components/ui/badge";

export const columnsOverall: ColumnDef<StudentDataJoined>[] = [
	{
		accessorKey: "enrollment",

		header: ({column}) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Enroll No.
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({row}) => <a href={"/student/" + row.original.enrollment} className="lowercase">{row.original.enrollment}</a>,
	},
	{
		accessorKey: "name",
		header: ({column}) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({row}) => (
			<div className="capitalize text-center">
				{row.original.name}
				{row.original.rank === 1 && (
					<>
						<Badge className={"ml-2 rounded-2xl text-center align-middle"} variant={row.original.rank === 1 ? "default" : "secondary"}>
							Topper
						</Badge>
						<span className="ml-2 text-center align-middle">👑</span>
					</>
				)}
				{row.original.rank === 2 && <span className="ml-2 text-center align-middle">🏅</span>}
				{row.original.rank === 3 && <span className="ml-2 text-center align-middle">🔥</span>}
			</div>
		),
	},
	{
		accessorKey: "marks",
		header: "Marks",
		cell: ({row}) => (
			<div className="capitalize">
				{row.original.marks}/{row.original.total}
			</div>
		),
	},
	{
		accessorKey: "cgpa",
		header: ({column}) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					CGPA
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({row}) => <div className="lowercase">{row.original.cgpa!.toFixed(2)}</div>,
	},
	{
		accessorKey: "percentage",
		header: ({column}) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					%
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({row}) => <div className="lowercase">{row.original.percentage.toFixed(2)}</div>,
	},
	{
		accessorKey: "creditsPercentage",
		header: ({column}) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Credit %
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({row}) => <div className="lowercase">{row.original.creditsPercentage.toFixed(2)}</div>,
	},
	{
		accessorKey: "rank",
		header: ({column}) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Rank
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({row}) => <div className="lowercase">{row.original.rank}</div>,
	},
];

export const columnsSem: ColumnDef<StudentDataJoined>[] = [
	{
		accessorKey: "enrollment",

		header: ({column}) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Enroll No.
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({row}) => <a href={"/student/" + row.original.enrollment} className="lowercase">{row.original.enrollment}</a>,
	},
	{
		accessorKey: "name",
		header: ({column}) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({row}) => (
			<div className="capitalize text-center">
				{row.original.name}
				{row.original.rank === 1 && (
					<>
					<Badge className={"ml-2 rounded-2xl text-center align-middle"} variant={row.original.rank === 1 ? "default" : "secondary"}>
						Topper
					</Badge>
					<span className="ml-2 text-center align-middle">👑</span>
				</>
				)}
				{row.original.rank === 2 && <span className="ml-2 text-center align-middle">🏅</span>}
				{row.original.rank === 3 && <span className="ml-2 text-center align-middle">🔥</span>}
			</div>
		),
	},
	{
		accessorKey: "marks",
		header: "Marks",
		cell: ({row}) => (
			<div className="capitalize">
				{row.original.marks}/{row.original.total}
			</div>
		),
	},
	{
		accessorKey: "sgpa",
		header: ({column}) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					SGPA
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({row}) => <div className="lowercase">{row.original.sgpa!.toFixed(2)}</div>,
	},
	{
		accessorKey: "percentage",
		header: ({column}) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					%
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({row}) => <div className="lowercase">{row.original.percentage.toFixed(2)}</div>,
	},
	{
		accessorKey: "creditsPercentage",
		header: ({column}) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Credit %
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({row}) => <div className="lowercase">{row.original.creditsPercentage.toFixed(2)}</div>,
	},
	{
		accessorKey: "rank",
		header: ({column}) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Rank
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({row}) => <div className="lowercase">{row.original.rank}</div>,
	},
];

export const batches: RanklistQueryFields[] = [
	{
		name: "All Batches",
		value: "*",
	},
	{
		name: "2025-2029",
		value: "2025",
	},
	{
		name: "2024-2028",
		value: "2024",
	},
	{
		name: "2023-2027",
		value: "2023",
	},
	{
		name: "2022-2026",
		value: "2022",
	},
	{
		name: "2021-2025",
		value: "2021",
	},
	{
		name: "2020-2024",
		value: "2020",
	},
];
