import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Checkbox} from "@mui/material";
import {getStudentProfileData} from "@/app/lib/dataFetchServer";

export default async function Page(
    {
        params
    }: {
        params: { enrollmentID: string }
    }) {
    const studentData = await getStudentProfileData(params.enrollmentID);

    return (
        <div className={"w-full px-6 flex flex-col gap-6"}>
            <div className={"w-full flex flex-row justify-between text-2xl font-bold"}>
                <h1>
                    Hi, {studentData?.name}
                </h1>
                <h2>
                    {studentData?.batch}
                </h2>
            </div>

            <div className={"grid grid-cols-3 grid-rows-1 gap-4"}>
                <div className={"col-span-2"}>
                    <div className={"flex flex-row justify-between"}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{studentData?.enrollment}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {studentData?.sid}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>{studentData?.institute}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {studentData?.instCode}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>{studentData?.programme}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {studentData?.progCode}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Branch</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {studentData?.specialization}
                            </CardContent>
                        </Card>
                    </div>
                    <h1>Results</h1>
                    <div>
                        <Tabs className={""} defaultValue={"overall"}>
                            <TabsList className="grid grid-cols-4 mb-2">
                                <TabsTrigger value="overall">Overall</TabsTrigger>
                                {studentData?.marksPerSemester.sort((i, j) => parseInt(i.semester) - parseInt(j.semester))
                                    .map((semData, idx) =>
                                        <TabsTrigger
                                            key={idx + 1}
                                            value={"Sem " + semData.semester}>
                                            Sem {semData.semester}
                                        </TabsTrigger>
                                    )
                                }
                            </TabsList>

                            <TabsContent value="overall" className={"grid grid-cols-3 gap-4"}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Marks</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {studentData?.marks}/{studentData?.total}
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>CGPA</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {Number(studentData?.cgpa).toFixed(3)}
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Percentage</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {Number(studentData?.percentage).toFixed(2)}%
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
                                        {studentData?.creditMarks}/{studentData?.totalCreditMarks}
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Total Credits</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {studentData?.totalCredits}
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>C. Percentage</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {Number(studentData?.creditsPercentage).toFixed(2)}%
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {studentData?.marksPerSemester.sort((i, j) => parseInt(i.semester) - parseInt(j.semester))
                                .map((semData, idx) =>
                                    <TabsContent key={idx + 1} value={"Sem " + semData.semester}
                                                 className={"grid grid-cols-3 gap-4"}>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Marks</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                {semData.marks}/{semData.total}
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>CGPA</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                {Number(semData.sgpa).toFixed(2)}
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Percentage</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                {Number(semData.percentage).toFixed(2)}%
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
                                                {semData.creditmarks}/{semData.creditmarks}
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Total Credits</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                {semData.totalcredits}
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>C. Percentage</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                {Number(semData.creditspercentage).toFixed(2)}%
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                )
                            }
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

