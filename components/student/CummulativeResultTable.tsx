"use client"

import {CumulativeResult} from "@/types/types";
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

export function CummulativeResultTable(
    {
        resultData,
    }: {
        resultData: CumulativeResult[],
    }
) {
    const [tableHeadForCummulative, setTableHeadForCummulative] = useState<{ [key: string]: boolean }>({
        "Sem": true,
        "Marks": true,
        "Percentage": true,
        "C. Marks": false,
        "C. Percentage": false,
        "CGPA": true,
    });

    const TableHeaderForOverall = () => (
        <>
            {tableHeadForCummulative["Sem"] && <TableHead>Sem</TableHead>}
            {tableHeadForCummulative["Marks"] && <TableHead>Marks</TableHead>}
            {tableHeadForCummulative["Percentage"] && <TableHead>Percentage</TableHead>}
            {tableHeadForCummulative["C. Marks"] && <TableHead>C. Marks</TableHead>}
            {tableHeadForCummulative["C. Percentage"] && <TableHead>C. Percentage</TableHead>}
            {tableHeadForCummulative["CGPA"] && <TableHead>CGPA</TableHead>}
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
                    {Object.keys(tableHeadForCummulative)
                        .map((column, idx) =>
                            <DropdownMenuCheckboxItem
                                key={idx + 1}
                                className="capitalize"
                                checked={tableHeadForCummulative[column]}
                                onCheckedChange={(value) =>
                                    setTableHeadForCummulative(prevState =>
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
                            (cummSemester: CumulativeResult, idx: number) =>
                                <TableRow key={idx + 1}>
                                    {tableHeadForCummulative["Sem"] && <TableCell>{cummSemester.semester}</TableCell>}
                                    {tableHeadForCummulative["Marks"] && <TableCell>{cummSemester.marks}/{cummSemester.totalmarks}</TableCell>}
                                    {tableHeadForCummulative["Percentage"] && <TableCell>{Number(cummSemester.percentage).toFixed(2)}%</TableCell>}
                                    {tableHeadForCummulative["C. Marks"] && <TableCell>{cummSemester.creditmarks}/{cummSemester.totalcreditmarks}</TableCell>}
                                    {tableHeadForCummulative["C. Percentage"] && <TableCell>{Number(cummSemester.creditspercentage).toFixed(2)}%</TableCell>}
                                    {tableHeadForCummulative["CGPA"] && <TableCell>{Number(cummSemester.cgpa).toFixed(3)}</TableCell>}
                                </TableRow>
                        )
                    }

                </TableBody>
            </Table>
        </>

    );
}
