import {StudentProfileData} from "@/types/types";
import SemTest from "@/app/(endpoints)/student/[enrollmentID]/SemTest";
import OverallTest from "@/app/(endpoints)/student/[enrollmentID]/OverallTest";

export default function ResultChartsCollection(
    {
        studentData,
        selectedSem
    }: {
        studentData: StudentProfileData,
        selectedSem: string;
    }
) {
    return (
        <>
            {
                studentData == undefined ? null : selectedSem === "overall" ? <OverallTest studentData={studentData}/> :
                    <SemTest sem={selectedSem} studentData={studentData}/>
            }
        </>

    )
}