"use client"

import {SemesterData, StudentDataJoined, SubjectData} from "@/types/types";
import React, {useEffect, useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Drawer, DrawerContent} from "@/components/ui/drawer";
import {useRouter} from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {ChevronDown} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {
    LineChart,
    CartesianGrid,
    Line,
    Legend,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceArea,
    ReferenceLine,
  } from "recharts";

export function StudentDataDialog(
    {
        studentData,
        setStudentData
    }: {
        studentData: { open: boolean; data: StudentDataJoined; },
        setStudentData: React.Dispatch<React.SetStateAction<{ open: boolean; data: StudentDataJoined; }>>,
    }
) {
    const [tableHeadForSem, setTableHeadForSem] = useState<{ [key: string]: boolean }>({
        "Paper ID": true,
        "Subject Name": true,
        "Int. | Ext.": true,
        "Marks": true
    });
    const [tableHeadForOverall, setTableHeadForOverall] = useState<{ [key: string]: boolean }>({
        "Sem": true,
        "Marks": true,
        "Percentage": true,
        "C. Marks": false,
        "C. Percentage": false,
        "SGPA": true,
    });

    const TableHeaderForSem = () => (
        <>
            {tableHeadForSem["Paper ID"] && <TableHead>Paper ID (S. Code)</TableHead>}
            {tableHeadForSem["Subject Name"] && <TableHead>Subject Name</TableHead>}
            {tableHeadForSem["Int. | Ext."] && <TableHead className={"text-center"}>Int. | Ext.</TableHead>}
            {tableHeadForSem["Marks"] && <TableHead>Marks</TableHead>}
        </>
    )

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


    const router = useRouter();
    const handlePopState = () => {
        // e.preventDefault();
        if (document.documentURI.endsWith("/ranklist")) handleDrawerClose(false);
    }

    const handleDrawerClose = (open: boolean) => {
        setStudentData(prevState =>
            ({...prevState, open: open}));
    }

    useEffect(() => {
        if (studentData.open && studentData.data.enrollment !== "") router.push("#drawer");
    }, [studentData.open]);

    useEffect(() => {
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    });

    return (
        <Drawer
            open={studentData.open}
            onOpenChange={handleDrawerClose}
        >
            <DrawerContent>
                <div className="w-screen md:max-w-4xl mx-auto p-4 md:p-6 shadow rounded">
                    <div className="flex flex-col space-y-4 relative">
                        {/* Need icon for close button */}
                        {/* <Button
                            variant="outline"
                            className="absolute top-0 right-0"
                            onClick={() => handleDrawerClose(false)}
                        /> */}
                        <div className="flex items-center justify-center space-x-4">
                            <h1 className="text-2xl font-semibold text-center">{studentData.data.name}</h1>
                            <Badge variant="default" className="ml-2">{studentData.data.rank}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold">
                                    Enrollment Number: <span
                                    className="font-normal">{studentData.data.enrollment}</span>
                                </p>
                                {/* <p className="font-semibold">
                                    Name: <span className="font-normal">{studentData.data.name}</span>
                                </p> */}
                                <p className="font-semibold">
                                    Marks: <span
                                    className="font-normal">{studentData.data.marks} / {studentData.data.total}</span>
                                </p>
                                <p className="font-semibold">
                                    Credit Marks: <span
                                    className="font-normal">{studentData.data.creditMarks} / {studentData.data.totalCreditMarks}</span>
                                </p>
                                {/*<p className="font-semibold">*/}
                                {/*    CGPA: <span className="font-normal">9.184</span>*/}
                                {/*</p>*/}
                                {/*<p className="font-semibold">*/}
                                {/*    Credits Obtained: <span className="font-normal">{studentData.data.totalCreditMarksWeighted} / {studentData.data.totalCredits}</span>*/}
                                {/*</p>*/}
                            </div>
                            <div>
                                <p className="font-semibold">
                                    Percentage: <span
                                    className="font-normal">{studentData.data.percentage.toFixed(2)} %</span>
                                </p>
                                <p className="font-semibold">
                                    Credit Percentage: <span
                                    className="font-normal">{studentData.data.creditsPercentage.toFixed(2)} %</span>
                                </p>
                                {/*<p className="font-semibold">*/}
                                {/*    Equivalent Percentage: <span className="font-normal">{studentData.data.per} %</span>*/}
                                {/*</p>*/}
                                <p className="font-semibold">
                                    Rank: <span className="font-normal">#{studentData.data.rank}</span>
                                </p>
                            </div>
                        </div>
                        {/* Doesn't render unless the drawer is open already */}
                        {/* <div className="h-40 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={studentData.data.marksPerSemester}
                                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="semester"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    
                                    <Line type="linear" dataKey="sgpa" stroke="#82ca9d"/>
                                    <ReferenceArea x1={1} x2={2} label="Reference Area" stroke="red" strokeOpacity={0.3}/>
                                    <ReferenceLine x={3} label="Line" stroke="red"/>
                                </LineChart>
                            </ResponsiveContainer>
                        </div> */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="rounded-2xl w-fit">
                                    Columns <ChevronDown className="ml-2 h-4 w-4"/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {Object.keys(studentData.data.sgpa == undefined ?
                                    tableHeadForOverall
                                    : tableHeadForSem)
                                    .map((column, idx) =>
                                        <DropdownMenuCheckboxItem
                                            key={idx + 1}
                                            className="capitalize"
                                            checked={(studentData.data.sgpa == undefined ?
                                                tableHeadForOverall
                                                : tableHeadForSem)[column]}
                                            onCheckedChange={(value) =>
                                                (studentData.data.sgpa == undefined ?
                                                    setTableHeadForOverall
                                                    : setTableHeadForSem)(prevState =>
                                                    ({...prevState, [column]: value})
                                                )
                                            }
                                        >
                                            {column}
                                        </DropdownMenuCheckboxItem>
                                    )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <hr/>
                        <div className="relative w-full md:w-full max-h-[50vh] overflow-auto">
                            <Table className={"min-w-max"}>
                                <TableHeader style={{backgroundColor: "hsl(var(--background))"}}
                                             className={"sticky top-0"}>
                                    <TableRow>
                                        {(studentData.data.sgpa == undefined ?
                                            <TableHeaderForOverall/>
                                            : <TableHeaderForSem/>)}
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {studentData.data.sgpa == undefined ?
                                        studentData.data.marksPerSemester?.sort((i, j) => i.semester - j.semester)?.map(
                                            (semester: SemesterData, idx: number) =>
                                                <TableRow key={idx + 1}>
                                                    {tableHeadForOverall["Sem"] && <TableCell>{semester.semester}</TableCell>}
                                                    {tableHeadForOverall["Marks"] && <TableCell>{semester.marks}/{semester.total}</TableCell>}
                                                    {tableHeadForOverall["Percentage"] && <TableCell>{Number(semester.percentage).toFixed(2)}%</TableCell>}
                                                    {tableHeadForOverall["C. Marks"] && <TableCell>{semester.creditmarks}/{semester.totalcreditmarks}</TableCell>}
                                                    {tableHeadForOverall["C. Percentage"] && <TableCell>{Number(semester.creditspercentage).toFixed(2)}%</TableCell>}
                                                    {tableHeadForOverall["SGPA"] && <TableCell>{Number(semester.sgpa).toFixed(3)}</TableCell>}
                                                </TableRow>
                                        )
                                        :
                                        studentData.data.subject?.map(
                                            (subject: SubjectData, idx: number) =>
                                                <TableRow key={idx + 1}>
                                                    {tableHeadForSem["Paper ID"] && <TableCell>{subject.paperid} ({subject.subcode})</TableCell>}
                                                    {tableHeadForSem["Subject Name"] && <TableCell>{subject.subname} ({subject.credits}) {<Badge variant = "outline">{subject.ExamType}</Badge>} {subject.grade === "F" && <Badge variant="destructive">Back</Badge>}</TableCell>}
                                                    {tableHeadForSem["Int. | Ext."] && <TableCell className={"text-center"}>{subject.internal === "" ? "0" : subject.internal} | {subject.external === "" ? "0" : subject.external}</TableCell>}
                                                    {tableHeadForSem["Marks"] && <TableCell>{subject.total === "" ? (subject.internal === "" ? "0" : subject.internal) : subject.total}</TableCell>}
                                                </TableRow>
                                        )
                                    }

                                </TableBody>
                            </Table>
                        </div>

                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
