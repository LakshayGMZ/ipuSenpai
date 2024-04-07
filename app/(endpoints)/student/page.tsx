"use client"

import {Input} from "@/components/ui/input"
import React, {useEffect, useState} from "react";
import {redirect, useRouter} from "next/navigation";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label"


export default function Page() {

    const [value, setValue] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem("studentEnrollment") !== null) {
            redirect("/student/" + localStorage.getItem("studentEnrollment"));
        }
    }, []);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        localStorage.setItem("studentEnrollment", value);
        router.push("/student/" + value);
    }
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setTimeout(
            () =>
                document.getElementsByTagName("body")[0].setAttribute("style", ""),
            100
        );
        setOpen(true);
    }, []);

    return (
        <>
            <Dialog open={open}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Student Profile Dashboard</DialogTitle>
                        <DialogDescription>
                            Enter your enrollment here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-row items-center gap-4 py-4">
                        <Label htmlFor="name" className="text-right">
                            Enrollment&nbsp;No.
                        </Label>
                        <Input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="col-span-3"
                            // TODO: Enforce pattern for enrollment number
                            // @assigned-to: @lakshayGMZ
                            // pattern="^[0-9]{4,}$"
                        />
                    </div>
                    <DialogFooter>
                        <Button onClick={handleSubmit} type="submit">Save changes</Button>
                        {/*
                        TODO: Add loader here
                        @assigned-to: @lakshayGMZ
                         */}
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <div className={"absolute inset-0 backdrop-blur-md"}></div>
            <div className={"w-full px-6 flex flex-col gap-6"}>

                <div className={"w-full flex flex-row justify-between text-2xl font-bold"}>
                    <h1>
                        Hi, Miyuki Shirogane
                    </h1>
                    <h2>
                        2020
                    </h2>
                </div>

                <div className={"flex flex-row justify-between gap-4"}>
                <Card>
                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                        <CardTitle>
                            01096202722
                        </CardTitle>
                        <CardDescription>
                            Enrollment
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="font-semibold p-5">
                        01096202722
                        <CardDescription>
                            SID
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className="border">
                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                        <CardTitle>Shuchi'in Academy</CardTitle>
                    </CardHeader>
                    <CardContent className="font-semibold p-5">
                        6969
                        <CardDescription>
                            Institute Code
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                        <CardTitle>High School</CardTitle>
                    </CardHeader>
                    <CardContent className="font-semibold p-5">
                        6969
                        <CardDescription>
                            Programme Code
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                        <CardTitle>Student President</CardTitle>
                    </CardHeader>
                    <CardContent className="font-semibold p-5">
                        6969
                        <CardDescription>
                            Branch Code
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>

                <div className={"grid grid-cols-3 grid-rows-1 gap-4"}>
                    <div className={"col-span-2"}>

                        <h1>Results</h1>
                        <div>
                            <Tabs className={""} defaultValue={"overall"}>
                                <TabsList className="grid grid-cols-4 mb-2">
                                    <TabsTrigger value="overall">Overall</TabsTrigger>
                                    <TabsTrigger value="sem1">Sem 1</TabsTrigger>
                                    <TabsTrigger value="sem2">Sem 2</TabsTrigger>
                                    <TabsTrigger value="sem3">Sem 3</TabsTrigger>
                                </TabsList>

                                <TabsContent value="overall" className={"grid grid-cols-3 gap-4"}>
                                <Card>
                                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                        <CardTitle>Marks</CardTitle>
                                    </CardHeader>
                                    <CardContent className="font-semibold p-5">
                                        1000 / 1000
                                        <CardDescription>
                                            Total Marks Obtained
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                        <CardTitle>CGPA</CardTitle>
                                    </CardHeader>
                                    <CardContent className="font-semibold p-5">
                                        10.000
                                        <CardDescription>
                                            Cumulative Grade Point Average
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                        <CardTitle>Percentage</CardTitle>
                                    </CardHeader>
                                    <CardContent className="font-semibold p-5">
                                        100%
                                        <CardDescription>
                                            Percentage of Marks Obtained
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                {/* <div className="flex items-center space-x-2 col-span-3">
                                    <Checkbox/>
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Show Credit Info
                                    </label>
                                </div> */}
                                <Card>
                                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                        <CardTitle>Credit Marks</CardTitle>
                                    </CardHeader>
                                    <CardContent className="font-semibold p-5">
                                        2500 / 2500
                                        <CardDescription>
                                            Total Credit Marks Obtained
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                        <CardTitle>Total Credits</CardTitle>
                                    </CardHeader>
                                    <CardContent className="font-semibold p-5">
                                        69
                                        <CardDescription>
                                            Total Credits Overall
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                                        <CardTitle>C. Percentage</CardTitle>
                                    </CardHeader>
                                    <CardContent className="font-semibold p-5">
                                        100%
                                        <CardDescription>
                                            Percentage of Credit Marks Obtained
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                    {/* <div className={"col-span-1 bg-yellow-400"}>

                    </div> */}
                </div>
                {/* <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    <div className={"h-80 bg-amber-400"}></div>
                    <div className={"h-80 bg-amber-400"}></div>
                    <div className={"h-80 bg-amber-400"}></div>
                    <div className={"h-80 bg-amber-400"}></div>
                </div> */}
            </div>
        </>


    );
}

function SearchIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
        </svg>
    )
}
