import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

export default function Page() {
    return (
        <div key="1" className="bg-[#111827] text-white p-8 rounded-lg shadow-lg">
            <div className="border-l-4 border-green-500 pl-4 mb-6">
                <h1 className="text-2xl md:text-4xl font-bold">CLASS OF 2026</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h2 className="text-lg md:text-xl font-semibold text-center md:text-left">
                    DR. AKHILESH DAS GUPTA INSTITUTE OF TECHNOLOGY AND MANAGEMENT (FORMERLY NIEC)
                </h2>
                <h3 className="text-lg md:text-xl font-semibold text-center md:text-right">LAKSHAY GULATI (15615602722)</h3>
            </div>
            <div className="bg-white text-black rounded-md p-6 mb-6 shadow-md">
                <h3 className="text-lg md:text-2xl font-semibold mb-4">Student Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p>
                        <strong>Enrollment Number:</strong>
                        15615602722{"\n              "}
                    </p>
                    <p>
                        <strong>Student Name:</strong>
                        LAKSHAY GULATI{"\n              "}
                    </p>
                    <p>
                        <strong>Programme:</strong>
                        Bachelor of Technology (B. Tech.){"\n              "}
                    </p>
                    <p>
                        <strong>Branch:</strong>
                        Computer Science and Engineering{"\n              "}
                    </p>
                    <p>
                        <strong>Institute:</strong>
                        Dr. Akhilesh Das Gupta Institute Of Technology And Management (Formerly Niec){"\n              "}
                    </p>
                </div>
            </div>
            <div className="bg-white text-black rounded-md p-6 shadow-md mb-6">
                <div className="bg-white text-black rounded-md p-6 shadow-md mb-6">
                    <Tabs className="w-full" defaultValue="overall">
                        <TabsList className="grid grid-cols-4">
                            <TabsTrigger value="overall">Overall</TabsTrigger>
                            <TabsTrigger value="sem1">Sem 1</TabsTrigger>
                            <TabsTrigger value="sem2">Sem 2</TabsTrigger>
                            <TabsTrigger value="sem3">Sem 3</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overall">
                            <h3 className="text-lg md:text-2xl font-semibold mb-4">Overall Result</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <p>
                                    <strong>Marks:</strong>
                                    2520 / 3200{"\n                          "}
                                </p>
                                <p>
                                    <strong>Percentage:</strong>
                                    78.750 %{"\n                          "}
                                </p>
                                <p>
                                    <strong>Credit Marks:</strong>
                                    5669 / 7600{"\n                          "}
                                </p>
                                <p>
                                    <strong>Credit Percentage:</strong>
                                    74.592 %{"\n                          "}
                                </p>
                                <p>
                                    <strong>CGPA:</strong>
                                    8.447{"\n                          "}
                                </p>
                                <p>
                                    <strong>Equivalent Percentage:</strong>
                                    84.5 %{"\n                          "}
                                </p>
                                <p>
                                    <strong>Credits Obtained:</strong>
                                    76 / 76{"\n                          "}
                                </p>
                            </div>
                        </TabsContent>
                        <TabsContent value="sem1"/>
                        <TabsContent value="sem2"/>
                        <TabsContent value="sem3"/>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

