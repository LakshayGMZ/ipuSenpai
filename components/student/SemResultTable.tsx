"use client"

import {SubjectData} from "@/types/types";
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
import {Badge} from "@/components/ui/badge";

export function SemResultTable(
    {
        resultData,
    }: {
        resultData: SubjectData[],
    }
) {
    const [tableHeadForSem, setTableHeadForSem] = useState<{ [key: string]: boolean }>({
        "Subject Code": true,
        "Subject Name": true,
        "Int. | Ext.": true,
        "Marks": true,
        "Grade": true
    });
    const TableHeaderForSem = () => (
        <>
            {tableHeadForSem["Subject Code"] && <TableHead>Subject Code</TableHead>}
            {tableHeadForSem["Subject Name"] && <TableHead>Subject Name</TableHead>}
            {tableHeadForSem["Int. | Ext."] && <TableHead className={"text-center"}>Int. | Ext.</TableHead>}
            {tableHeadForSem["Marks"] && <TableHead>Marks</TableHead>}
            {tableHeadForSem["Grade"] && <TableHead>grade</TableHead>}
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
                    {Object.keys(tableHeadForSem)
                        .map((column, idx) =>
                            <DropdownMenuCheckboxItem
                                key={idx + 1}
                                className="capitalize"
                                checked={tableHeadForSem[column]}
                                onCheckedChange={(value) =>
                                    setTableHeadForSem(prevState =>
                                        ({...prevState, [column]: value})
                                    )
                                }
                            >
                                {column}
                            </DropdownMenuCheckboxItem>
                        )}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className={"w-full overflow-x-scroll"}>
                <Table className={"min-w-max"}>
                    <TableHeader style={{backgroundColor: "hsl(var(--background))"}}
                                 className={"sticky top-0"}>
                        <TableRow>
                            <TableHeaderForSem/>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {
                            resultData.map(
                                (subject: SubjectData, idx: number) =>
                                    <TableRow key={idx + 1}>
                                        {tableHeadForSem["Subject Code"] &&
                                            <TableCell>{subject.paperid} ({subject.subcode})</TableCell>}
                                        {tableHeadForSem["Subject Name"] &&
                                            <TableCell>{subject.subname} ({subject.credits}) {<Badge
                                                variant="outline">{subject.ExamType}</Badge>} {subject.grade === "F" &&
                                                <Badge variant="destructive">Back</Badge>}</TableCell>}
                                        {tableHeadForSem["Int. | Ext."] && <TableCell
                                            className={"text-center"}>{subject.internal === "" ? "0" : subject.internal} | {subject.external === "" ? "0" : subject.external}</TableCell>}
                                        {tableHeadForSem["Marks"] &&
                                            <TableCell>{subject.total === "" ? (subject.internal === "" ? "0" : subject.internal) : subject.total}</TableCell>}
                                        {tableHeadForSem["Grade"] && <TableCell>{subject.grade}</TableCell>}
                                    </TableRow>
                            )
                        }

                    </TableBody>
                </Table>
            </div>
        </>


    );
}
