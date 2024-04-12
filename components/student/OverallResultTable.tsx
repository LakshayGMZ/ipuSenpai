"use client"

import {MarksPerSemester} from "@/types/types";
import React, {useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {ChevronDown} from "lucide-react";

export function OverallResultTable(
    {
        resultData,
    }: {
        resultData: MarksPerSemester[],
    }
) {
    const [tableHeadForOverall, setTableHeadForOverall] = useState<{ [key: string]: boolean }>({
        "Sem": true,
        "Marks": true,
        "Percentage": true,
        "C. Marks": false,
        "C. Percentage": false,
        "SGPA": true,
    });

    const TableHeaderForOverall = () => (
        <>
            {tableHeadForOverall["Sem"] && <TableHead>Sem</TableHead>}
            {tableHeadForOverall["Marks"] && <TableHead>Marks</TableHead>}
            {tableHeadForOverall["Percentage"] && <TableHead>Percentage</TableHead>}
            {tableHeadForOverall["C. Marks"] && <TableHead>C. Marks</TableHead>}
            {tableHeadForOverall["C. Percentage"] && <TableHead>C. Percentage</TableHead>}
            {tableHeadForOverall["SGPA"] && <TableHead>SGPA</TableHead>}
        </>
    )


    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="rounded-2xl w-fit">
                        Columns <ChevronDown className="ml-2 h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {Object.keys(tableHeadForOverall)
                        .map((column, idx) =>
                            <DropdownMenuCheckboxItem
                                key={idx + 1}
                                className="capitalize"
                                checked={tableHeadForOverall[column]}
                                onCheckedChange={(value) =>
                                    setTableHeadForOverall(prevState =>
                                        ({...prevState, [column]: value})
                                    )
                                }
                            >
                                {column}
                            </DropdownMenuCheckboxItem>
                        )}
                </DropdownMenuContent>
            </DropdownMenu>

            <Table className={"min-w-max"}>
                <TableHeader style={{backgroundColor: "var(--background)"}}
                             className={"sticky top-0"}>
                    <TableRow>
                        <TableHeaderForOverall/>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        resultData.map(
                            (semester: MarksPerSemester, idx: number) =>
                                <TableRow key={idx + 1}>
                                    {tableHeadForOverall["Sem"] && <TableCell>{semester.semester}</TableCell>}
                                    {tableHeadForOverall["Marks"] && <TableCell>{semester.marks}/{semester.total}</TableCell>}
                                    {tableHeadForOverall["Percentage"] && <TableCell>{Number(semester.percentage).toFixed(2)}%</TableCell>}
                                    {tableHeadForOverall["C. Marks"] && <TableCell>{semester.creditmarks}/{semester.totalcreditmarks}</TableCell>}
                                    {tableHeadForOverall["C. Percentage"] && <TableCell>{Number(semester.creditspercentage).toFixed(2)}%</TableCell>}
                                    {tableHeadForOverall["SGPA"] && <TableCell>{Number(semester.sgpa).toFixed(3)}</TableCell>}
                                </TableRow>
                        )
                    }

                </TableBody>
            </Table>
        </>

    );
}
