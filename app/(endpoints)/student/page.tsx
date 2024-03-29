"use client"

import {Input} from "@/components/ui/input"
import React, {useEffect, useState} from "react";
import {redirect, useRouter} from "next/navigation";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
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
import {Checkbox} from "@/components/ui/checkbox";


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
        localStorage.setItem("transfer", "false");
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
                        <DialogTitle>Enter Enrollment No.</DialogTitle>
                        <DialogDescription>
                            Enter your enrollment here.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-row items-center gap-3">
                        {/* // TODO: Save the value of the checkbox to localStorage
                        // @assigned-to: @lakshayGMZ */}
                        <Checkbox id="transfer" onChange={() => {
                        }}/>
                        <Label htmlFor="transfer" className="text-right">
                            Are you a upgradation/transfer student?
                        </Label>
                    </div>
                    <div className="flex flex-row items-center gap-2">

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
                        Hi, Sniper
                    </h1>
                    <h2>
                        6969
                    </h2>
                </div>

                <div className={"flex flex-row justify-between"}>
                    <Card className={"transition-none transform-none "}>
                        <CardHeader>
                            <CardTitle>enrollment</CardTitle>
                        </CardHeader>
                        <CardContent>
                            1234
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>institute</CardTitle>
                        </CardHeader>
                        <CardContent>
                            instCode
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>programme</CardTitle>
                        </CardHeader>
                        <CardContent>
                            progCode
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Branch</CardTitle>
                        </CardHeader>
                        <CardContent>
                            specialization
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
                                        <CardHeader>
                                            <CardTitle>Marks</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            marks/total
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>CGPA</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            10
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Percentage</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            100%
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Credit Marks</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            creditMarks/totalCreditMarks
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Total Credits</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            totalCredits
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>C. Percentage</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            100%
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                    <div className={"col-span-1 bg-yellow-400"}>

                    </div>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    <div className={"h-80 bg-amber-400"}></div>
                    <div className={"h-80 bg-amber-400"}></div>
                    <div className={"h-80 bg-amber-400"}></div>
                    <div className={"h-80 bg-amber-400"}></div>
                </div>
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
