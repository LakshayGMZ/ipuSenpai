import Ranklist from "@/components/ranklist/Ranklist";
import { RanklistSelectDataFields, StudentResults } from "@/types/types";
import { getResult } from "@/app/lib/dataFetchServer";
import Head from 'next/head';


export default async function Page({ searchParams }: any) {
    const selectedData: RanklistSelectDataFields = {
        programme: searchParams["programme"] || "",
        institute: searchParams["institute"] || "",
        specialization: searchParams["specialization"] || "",
        shift: searchParams["shift"] || "",
        batch: searchParams["batch"] || "",
        semester: searchParams["semester"] || "",
        page: searchParams["page"] || "1",
        pageSize: searchParams["pageSize"] || "100",
    }
    let studentResults: StudentResults = {
        avgGpa: 0,
        avgPercentage: 0,
        gpaList: [],
        ranklist: []
    };

    if (selectedData.programme !== "") {
        studentResults = await getResult(selectedData);
    }


    return (
        <>
            <Head>
                <title>Ranklist | IPU Senpai | {selectedData.programme} | Semester {selectedData.semester} | {selectedData.specialization} | {selectedData.institute}</title>
                <meta name="description" content="Student ranklist. Ranklist of students based on their GPA, percentage, marks, credit marks, etc." />
                <link rel="icon" href="/favicon.ico" />
                <meta name='keywords' content='ipu, ranklist, ggsipu, ipuranklist, open source, btech, bba, cse, it, gpa, sgpa, percentage, marks, results, ipu results'/>
                <meta name='url' content='https://www.ipusenpai.in/ranklist'/>
                <meta name='HandheldFriendly' content='True'/>
                <meta name='og:title'>IPU Senpai Ranklist | {selectedData.programme} | Semester {selectedData.semester} | {selectedData.specialization} | {selectedData.institute}</meta>
                <meta name='og:description' content='Student ranklist. Ranklist of students based on their GPA, percentage, marks, credit marks, etc.'/>
                <meta name='og:image' content='https://www.ipusenpai.in/logo.png'/>
                <meta name='og:url' content='https://www.ipusenpai.in/ranklist'/>
                <meta name='og:type' content='website'/>
                <meta name='og:site_name' content='IPU Senpai'/>
                <meta name='og:locale' content='en_US'/>
                <meta name='og:image:type' content='image/png'/>
                <meta name='og:image:alt' content='IPU Senpai Logo'/>
            </Head>
            <Ranklist data={selectedData} results={studentResults} />
        </>
    )

}

