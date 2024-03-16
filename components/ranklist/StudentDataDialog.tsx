"use client"

import {Switch} from "@mui/material";
import {SemesterData, StudentResults, SubjectData} from "@/types/types";
import React, {useEffect} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Drawer, DrawerContent} from "@/components/ui/drawer";
import {useRouter} from "next/navigation";

const TableHeadForSem = () => (
    <>
        <TableHead>Paper ID</TableHead>
        <TableHead>Subject Name</TableHead>
        <TableHead>Int. | Ext.</TableHead>
        <TableHead>Marks</TableHead>
    </>

)

const TableHeadForOverall = () => (
    <>
        <TableHead>Sem</TableHead>
        <TableHead>Marks</TableHead>
        <TableHead>Percentage</TableHead>
        <TableHead>SGPA</TableHead>
    </>

)


export function StudentDataDialog(
    {
        studentData,
        setStudentData
    }: {
        studentData: { open: boolean; data: StudentResults; },
        setStudentData: React.Dispatch<React.SetStateAction<{ open: boolean; data: StudentResults; }>>,
    }
) {

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
                <div className="max-w-4xl mx-auto p-6 shadow rounded">
                    <div className="flex flex-col space-y-4 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold">
                                    Enrollment Number: <span
                                    className="font-normal">{studentData.data.enrollment}</span>
                                </p>
                                <p className="font-semibold">
                                    Name: <span className="font-normal">{studentData.data.name}</span>
                                </p>
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
                        <hr/>
                        <div className="flex items-center justify-between">
                            <Button variant="outline">Show credit marks and credit percentage</Button>
                            <Switch id="toggle-details"/>
                        </div>
                        <Table className={"h-[50vh]"}>

                            <TableHeader style={{backgroundColor: "hsl(var(--background))"}} className={"sticky top-0"}>
                                <TableRow>
                                    {studentData.data.sgpa == undefined ? <TableHeadForOverall/> : <TableHeadForSem/>}
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {studentData.data.sgpa == undefined ?
                                    studentData.data.marksPerSemester?.sort((i, j) => i.semester - j.semester)?.map(
                                        (semester: SemesterData, idx: number) =>
                                            <TableRow key={idx + 1}>
                                                <TableCell>{semester.semester}</TableCell>
                                                <TableCell>{semester.marks}/{semester.total}</TableCell>
                                                <TableCell>{(semester.marks/semester.total*100).toFixed(2)}%</TableCell>
                                                <TableCell>{semester.sgpa}</TableCell>
                                            </TableRow>
                                    )
                                    :
                                    studentData.data.subject?.map(
                                        (subject: SubjectData, idx: number) =>
                                            <TableRow key={idx + 1}>
                                                <TableCell>{subject.paperid}</TableCell>
                                                <TableCell>{subject.subname} ({subject.credits})</TableCell>
                                                <TableCell>{subject.internal} | {subject.external}</TableCell>
                                                <TableCell>{subject.total}</TableCell>
                                            </TableRow>
                                    )
                                }

                            </TableBody>
                        </Table>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}