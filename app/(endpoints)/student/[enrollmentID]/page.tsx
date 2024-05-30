import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {GradeFrequency, StudentProfileData} from "@/types/types";
import {getStudentProfileData} from "@/app/lib/dataFetchServer";
import ResultSemTabs from "@/components/student/fragments/ResultSemTabs";
import {Metadata, ResolvingMetadata} from "next";
import CheckError from "@/app/(endpoints)/student/[enrollmentID]/checkError";

export async function generateMetadata(
    {
        params,
        searchParams
    }: {
        params: { enrollmentID: string };
        searchParams: any;
    },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const studentData: StudentProfileData = await getStudentProfileData(params.enrollmentID)

    return {
        title: `${studentData.name} | IPU Senpai | ${studentData.enrollment} | ${studentData.programme} | ${studentData.specialization} | Semester ${studentData.semesters}`,
        description: "Student Profile Dashboard. View your marks, grades, percentage, cgpa in a single beautiful dashboard.",
        keywords: "ipu, search, name, ranklist, ggsipu, ipuranklist, open source, btech, bba, cse, it, gpa, sgpa, percentage, marks, results, ipu results",
        openGraph: {
            title: `${studentData.name} | IPU Senpai | ${studentData.enrollment} | ${studentData.programme} | ${studentData.specialization} | ${studentData.semesters}`,
            description: "Student Profile Dashboard. View your marks, grades, percentage, cgpa in a single beautiful dashboard.",
            url: `https://www.ipusenpai.in/student/${studentData.enrollment}`,
        },
    }
}


export default async function Page(
    {
        params
    }: {
        params: { enrollmentID: string }
    }) {

    const studentData = await getStudentProfileData(params.enrollmentID)
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
        <>
            <CheckError data={studentData} enrollID={params.enrollmentID} />
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
                <ResultSemTabs studentData={studentData} frequencyGrades={frequencygrades}/>
            </div>
        </>
    )
}

