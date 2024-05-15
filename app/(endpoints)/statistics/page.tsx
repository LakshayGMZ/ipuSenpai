"use client";
import axios from "axios"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/cardStatistics";
import React, {useEffect, useState} from "react";
import {customFetch} from "@/app/lib/dataFetchServer";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "http://localhost:3000";

export default function Page() {

    const [studentCount, setStudentCount] = useState(0);
    const [programmeCount, setProgrammeCount] = useState(0);
    const [instituteCount, setInstituteCount] = useState(0);
    const [resultCount, setResultCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await customFetch<number>("/count/student");
            setStudentCount(response);
            const response2 = await customFetch<number>("/count/programme");
            setProgrammeCount(response2);
            const response3 = await customFetch<number>("/count/institute");
            setInstituteCount(response3);
            const response4 = await customFetch<number>("/count/result");
            setResultCount(response4);
        };

        fetchData();
    }, [])

    return (
        <>
            <div className="rounded-lg mx-4 md:mx-10">
                <h1 className="text-4xl font-semibold mb-6">Statistics</h1>
            </div>
            <div className={"grid grid-rows-1 grid-cols-1 gap-4 mx-60 md:mx-100 my-10"}>
                <Card className="flex flex-row flex-col">
                    <CardHeader className="rounded-t-2xl">
                        <CardTitle>Database Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="font-semibold p-5 transition-200 w-full min-w-0 flex-[0_0_100%] rounded-2xl bg-glassy-100 backdrop-blur-[7px] shadow-inner-brand transition-colors md:flex md:flex-col md:flex-shrink p-8 flex flex-col overflow-hidden px-6 py-10 md:!grid md:!grid-cols-2 md:gap-x-6 md:p-20 lg:gap-0 lg:px-[115px] lg:py-[104px]">
                    <div className="pb-4 md:pb-0">
                        <span className={`text-brand-pink text-base font-semibold`}>
                            Database
                        </span>
                        <div className="text-left mt-4">
                            <h2 className="text-2xl font-semibold">
                                Built on 1200+ parsed result PDFs.
                            </h2>
                        </div>
                    </div>
                        <div className="flex w-full flex-col md:ml-auto md:max-w-[320px] md:flex-row lg:max-w-[382px] lg:gap-16">                    
                        <div className="flex flex-col md:flex-row">
                            <img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADPCAYAAAA097tNAAACyUlEQVQ4T63T92/McRgH8Pef4CcRIiR26HWdc+1pex3XnrbX3nXoNEJq1uhUmw4d1KjVVmldrZoVYkWlIsQOIbVjBRGEGEEa37fnKf+AxPeHV77ffNfn8zzvB/gvh8sv1w33yFmEZ5SQPGo2keqTS6SZ5hDpPkKGaS6R5StkKxP0cpLvPGKK/3zBT8jxzyOmKdP98wzMDCggZgXkG8gNLCTmKPPMQp65iMgfXUwUKkWWBYK52ECJpYRYaCkxsGiMsMS6kFhmXUSsUEqti4ky6xKiwrrYQEWQnFUGLyWqgoQa2zJidfByotYmrBu74i8bQlYSdcqWkDJDKCXqQ8oNNISWE41KU1gFsV3ZoTTbVxFee7UBb3gl0WoXdodXEXsjqol9SltEDXEgUjjkWEMcjhKOKO2OWuJolHDMsZY4rpyIXkecjF5PnFLOxGwgzjqFDmcdcc65kegct4k4r1xQLsZuJi7FbSEux20lrijX4uuJ6/ENxA2XcNPVSNxK2EbcVu4kNBF3la7E7cQ99w7ivruZeOgRHnlaiCeencTTJC/xTHme3Eq8VF6l7CZeK2+Ut6l7iHepe//yYfw+4mPafuKT8jn9APEl/SDxVfmeeZj4ofzMPEJ0Z7UTv7KPEkYPWUK33viRIY98y5A3PutXPqa1Ee/1y297fp68i3ihq3qaJIt8rAt/oPvo+rM33WrP9rUkV+O0OOOkahe0iJ0xUtOOaKnzaW3FiShpyrFI6VZ7hPTtoF3622YvI/aESQS8IZKNllCJSpNN4tMQLLnaHCSpq7NKEtdbCgzUjpbEVpolz+WBkvGVATIGS/1mSiZ9ZxALTNMktqYcSbHPVAn1yMnEjBETDeQMzzYwZVimTMXQdJmUIeNleganECmDkojEAQkGXAMTiNgB8YSjfywR0d9JhPZzELa+kYSlTzgR2DuMsA909/r3sf4NF8W1dvcNzdoAAAAASUVORK5CYII="
                                alt="Line Separator" className="hidden md:mr-6 md:block md:h-auto lg:mr-10" width="1" height="207" decoding="async" />
                            <div className="flex place-content-center gap-10 md:grid md:gap-0">
                                <div className="w-[120px]">
                                    <h3 className="text-[64px] font-medium leading-[110%] md:text-5xl lg:text-[45px]">
                                        {instituteCount}
                                    </h3>
                                    <p className="text-base md:text-sm">
                                        Institutes
                                    </p>
                                </div>
                                <div className="w-[120px]">
                                    <h3 className="text-[64px] font-medium leading-[110%] md:text-5xl lg:text-[45px]">
                                        {programmeCount}
                                    </h3>
                                    <p className="text-base md:text-sm">
                                        Programmes
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADPCAYAAAA097tNAAACyUlEQVQ4T63T92/McRgH8Pef4CcRIiR26HWdc+1pex3XnrbX3nXoNEJq1uhUmw4d1KjVVmldrZoVYkWlIsQOIbVjBRGEGEEa37fnKf+AxPeHV77ffNfn8zzvB/gvh8sv1w33yFmEZ5SQPGo2keqTS6SZ5hDpPkKGaS6R5StkKxP0cpLvPGKK/3zBT8jxzyOmKdP98wzMDCggZgXkG8gNLCTmKPPMQp65iMgfXUwUKkWWBYK52ECJpYRYaCkxsGiMsMS6kFhmXUSsUEqti4ky6xKiwrrYQEWQnFUGLyWqgoQa2zJidfByotYmrBu74i8bQlYSdcqWkDJDKCXqQ8oNNISWE41KU1gFsV3ZoTTbVxFee7UBb3gl0WoXdodXEXsjqol9SltEDXEgUjjkWEMcjhKOKO2OWuJolHDMsZY4rpyIXkecjF5PnFLOxGwgzjqFDmcdcc65kegct4k4r1xQLsZuJi7FbSEux20lrijX4uuJ6/ENxA2XcNPVSNxK2EbcVu4kNBF3la7E7cQ99w7ivruZeOgRHnlaiCeencTTJC/xTHme3Eq8VF6l7CZeK2+Ut6l7iHepe//yYfw+4mPafuKT8jn9APEl/SDxVfmeeZj4ofzMPEJ0Z7UTv7KPEkYPWUK33viRIY98y5A3PutXPqa1Ee/1y297fp68i3ihq3qaJIt8rAt/oPvo+rM33WrP9rUkV+O0OOOkahe0iJ0xUtOOaKnzaW3FiShpyrFI6VZ7hPTtoF3622YvI/aESQS8IZKNllCJSpNN4tMQLLnaHCSpq7NKEtdbCgzUjpbEVpolz+WBkvGVATIGS/1mSiZ9ZxALTNMktqYcSbHPVAn1yMnEjBETDeQMzzYwZVimTMXQdJmUIeNleganECmDkojEAQkGXAMTiNgB8YSjfywR0d9JhPZzELa+kYSlTzgR2DuMsA909/r3sf4NF8W1dvcNzdoAAAAASUVORK5CYII="
                                alt="Line Separator" className="hidden md:mr-6 md:block md:h-auto lg:mr-10" width="1" height="207" decoding="async" />
                            <div className="flex place-content-center gap-10 md:grid md:gap-0">
                                <div className="w-[120px]">
                                    <h3 className="text-[64px] font-medium leading-[110%] md:text-5xl lg:text-[45px]">
                                    {(studentCount/1000).toFixed(2)}K
                                    </h3>
                                    <p className="text-base md:text-sm">
                                        Students
                                    </p>
                                </div>
                                <div className="w-[120px]">
                                    <h3 className="text-[64px] font-medium leading-[110%] md:text-5xl lg:text-[45px]">
                                        {(resultCount/1000000).toFixed(2)}M
                                    </h3>
                                    <p className="text-base md:text-sm">
                                        Results
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>  
                    </CardContent>
                </Card>

            </div>
        </>
    )
}

