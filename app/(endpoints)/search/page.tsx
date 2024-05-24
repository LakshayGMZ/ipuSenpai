import Search from "@/components/search/Search";
import {Metadata, ResolvingMetadata} from "next";

// <title>Search | IPU Senpai
//     | {selectedData.name} | {selectedData.programme} | {selectedData.institute} | {selectedData.batch}</title>
// <meta name="description"
//       content="Student search. Search for students based on their name, programme, institute, batch, etc."/>
// <meta name='keywords'
//       content='ipu, search, name, ranklist, ggsipu, ipuranklist, open source, btech, bba, cse, it, gpa, sgpa, percentage, marks, results, ipu results'/>
// <meta name='og:title'>IPU Senpai Search
//     | {selectedData.name} | {selectedData.programme} | {selectedData.institute} | {selectedData.batch}</meta>
// <meta name='og:description'
//       content='Student search. Search for students based on their name, programme, institute, batch, etc.'/>
// <meta name='og:url' content='https://www.ipusenpai.in/search'/>

export async function generateMetadata(
    {searchParams: params}: any,
    parent: ResolvingMetadata
): Promise<Metadata> {
    console.log(params);
    return {
        title: `Ranklist | IPU Senpai | ${params.programme} |
                    Semester ${params.semester} | ${params.institute}`,
        description: "Student ranklist. Ranklist of students based on their GPA, percentage, marks, credit marks, etc.",
        keywords: "ipu, ranklist, ggsipu, ipuranklist, open source, btech, bba, cse, it, gpa, sgpa, percentage, marks, results, ipu results",

        openGraph: {
            title: `Ranklist | IPU Senpai | ${params.programme} |
                    Semester ${params.semester} | ${params.specialization} | ${params.institute}`,
            description: "Student ranklist. Ranklist of students based on their GPA, percentage, marks, credit marks, etc.",
            url: "https://www.ipusenpai.in/ranklist",

        },
    }
}



export default function Page() {

    return (
        <Search/>
    )

}