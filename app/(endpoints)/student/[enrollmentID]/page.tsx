import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GradeFrequency, StudentProfileData } from "@/types/types";
import { getStudentProfileData } from "@/app/lib/dataFetchServer";
import ResultSemTabs from "@/components/student/fragments/ResultSemTabs";
import Head from "next/head";

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
        <>
            <Head>
                <title>Student Profile | IPU Senpai | {params.enrollmentID} | {studentData.name} | {studentData.programme} | {studentData.specialization} | {studentData.semesters}</title>
                <meta name="description" content="Student Profile Dashboard. View your marks, grades, percentage, cgpa in a single beautiful dashboard." />
                <link rel="icon" href="/favicon.ico" />
                <meta name='keywords' content='ipu, search, name, ranklist, ggsipu, ipuranklist, open source, btech, bba, cse, it, gpa, sgpa, percentage, marks, results, ipu results' />
                <meta name='url' content='https://www.ipusenpai.in/student' />
                <meta name='HandheldFriendly' content='True' />
                <meta name='og:title'>Student Profile | IPU Senpai | {studentData.enrollment} | {studentData.name} | {studentData.programme} | {studentData.specialization} | {studentData.semesters}</meta>
                <meta name='og:description' content='Student Profile Dashboard. View your marks, grades, percentage, cgpa in a single beautiful dashboard.' />
                <meta name='og:image' content='https://www.ipusenpai.in/logo.png' />
                <meta name='og:url' content='https://www.ipusenpai.in/student' />
                <meta name='og:type' content='website' />
                <meta name='og:site_name' content='IPU Senpai' />
                <meta name='og:locale' content='en_US' />
                <meta name='og:image:type' content='image/png' />
                <meta name='og:image:alt' content='IPU Senpai Logo' />
            </Head>
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
            </div>
        </>
    )
}

