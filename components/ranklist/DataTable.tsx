"use client"

import * as React from "react"
import {Dispatch, SetStateAction} from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"
import {ChevronDown} from "lucide-react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Input} from "@/components/ui/input"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {StudentDataJoined} from "@/types/types";
import {Pagination} from "@mui/material";
import {useRouter} from "next/navigation";


export function DataTable(
    {
        data,
        columns,
        page,
        pageSize,
        totalPages,
        setSelectStudent
    }: {
        data: StudentDataJoined[]
        columns: ColumnDef<StudentDataJoined>[],
        page: number,
        pageSize: number,
        totalPages: number,
        setSelectStudent: Dispatch<SetStateAction<{ open: boolean; data: StudentDataJoined; }>>
    }
) {
    const router = useRouter();
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({
            percentage: false,
            creditsPercentage: false
        })
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable<StudentDataJoined>({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        autoResetPageIndex: false,
        rowCount: pageSize,
        manualPagination: true,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="text-center lg:px-10">
            <div className="flex items-center py-4 justify-between">
                <Input
                    placeholder="Search by name"
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm rounded-2xl flex-[1_1_0px]"
                />
                {totalPages! >= 2 && <Pagination
                    className={"flex-[1_1_0px] flex justify-center"}
                    variant="outlined"
                    shape="rounded"
                    count={totalPages}
                    defaultValue={page}
                    onChange={(e, v) =>{
                        const currUrl = new URL(window.location.href)
                        currUrl.searchParams.set("page", String(v));
                        router.push(currUrl.toString());
                    }}
                    showFirstButton
                    showLastButton/>
                }
                <div className={"flex-[1_1_0px] flex justify-end"}>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="rounded-2xl">
                                Columns <ChevronDown className="ml-2 h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
            <div className="rounded-2xl border relative w-full overflow-auto">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className={"text-center"}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    onClick={() => setSelectStudent({open: true, data: row.original})}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
