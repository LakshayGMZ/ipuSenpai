import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Checkbox} from "@mui/material";

export default function Page() {
    return (
        <div className={"w-full px-6 flex flex-col gap-6"}>
            <div className={"w-full flex flex-row justify-between"}>
                <div>
                    Hi, student name
                </div>
                <div>
                    2022
                </div>
            </div>

            <div className={"grid grid-cols-3 grid-rows-1 gap-4"}>
                <div className={"col-span-2"}>
                    <div className={"flex flex-row justify-between"}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Enrollment</CardTitle>
                            </CardHeader>
                            <CardContent>
                                hmm
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Enrollment</CardTitle>
                            </CardHeader>
                            <CardContent>
                                hmm
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Enrollment</CardTitle>
                            </CardHeader>
                            <CardContent>
                                hmm
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Enrollment</CardTitle>
                            </CardHeader>
                            <CardContent>
                                hmm
                            </CardContent>
                        </Card>
                    </div>
                    <h1>Results</h1>
                    <div>
                        <Tabs className={""} defaultValue={"overall"}>
                            <TabsList className="grid grid-cols-4">
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
                                        hmm
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>CGPA</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        hmm
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Percentage</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        hmm
                                    </CardContent>
                                </Card>
                                <div className="flex items-center space-x-2 col-span-3">
                                    <Checkbox/>
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Show Credit Info
                                    </label>
                                </div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Credit Marks</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        hmm
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Total Credits</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        hmm
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>C. Percentage</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        hmm
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>


                    <div>

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
            <h1>Absolute Result Breakdown</h1>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                <div className={"h-80 bg-amber-400"}></div>
                <div className={"h-80 bg-amber-400"}></div>
            </div>
            <h1>Cumulative Result Breakdown</h1>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                <div className={"h-80 bg-amber-400"}></div>
                <div className={"h-80 bg-amber-400"}></div>
            </div>
        </div>
    )
}

