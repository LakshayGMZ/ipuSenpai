import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {GradeFrequency, StudentProfileData} from "@/types/types";
import {getStudentProfileData} from "@/app/lib/dataFetchServer";
import ResultSemTabs from "@/components/student/fragments/ResultSemTabs";

export default async function Page(
    {
        params
    }: {
        params: { enrollmentID: string }
    }) {

    // const loader = useLoader();

    const studentData: StudentProfileData = await getStudentProfileData(params.enrollmentID)
    let frequencygrades: GradeFrequency[] = []

    studentData?.subject.forEach((semester) => {
        semester.subjects.forEach((subject) => {
            if (subject.grade) {
                let grade = frequencygrades.find((grade) => grade.grade === subject.grade)
                if (grade) {
                    grade.frequency += 1
                } else {
                    frequencygrades.push({
                        grade: subject.grade,
                        frequency: 1
                    })
                }
            }
        })
    })

    return (
        <div className={"w-full px-3 md:px-6 flex-row gap-6"}>
            <div
                className={"w-full flex flex-row justify-between text-2xl font-bold scroll-m-20 tracking-tight lg:text-5xlscroll-m-20 pb-2 first:mt-0"}>
                <h1>
                    Hi, {studentData?.name}
                </h1>
                <h2>
                    {studentData?.batch}
                </h2>
            </div>
            <div className={"grid  md:grid-cols-2 lg:grid-cols-4 justify-between gap-4"}>
                <Card>
                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                        <CardTitle>
                            {studentData?.enrollment}
                        </CardTitle>
                        <CardDescription>
                            Enrollment
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="font-semibold p-5">
                        {studentData?.sid}
                        <CardDescription>
                            SID
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className="border">
                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                        <CardTitle>{studentData?.institute.split('(')[0]}</CardTitle>
                    </CardHeader>
                    <CardContent className="font-semibold p-5">
                        {studentData?.instCode}
                        <CardDescription>
                            Institute Code
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                        <CardTitle>{studentData?.programme}</CardTitle>
                    </CardHeader>
                    <CardContent className="font-semibold p-5">
                        {studentData?.progCode}
                        <CardDescription>
                            Programme Code
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                        <CardTitle>{studentData?.specialization}</CardTitle>
                    </CardHeader>
                    <CardContent className="font-semibold p-5">
                        {studentData?.progCode}
                        <CardDescription>
                            Branch Code
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
            {/* CLIENT COMPONENT BELOW */}
            <ResultSemTabs studentData={studentData} frequencyGrades={frequencygrades} />

            {/*{studentData == undefined ? null : selectedSem === "overall" ? <OverallTest studentData={studentData}/> :*/}
            {/*    <SemTest sem={selectedSem} studentData={studentData}/>}*/}

        </div>
    )
}

