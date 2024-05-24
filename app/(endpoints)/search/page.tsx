import Search from "@/components/search/Search";
import {Metadata, ResolvingMetadata} from "next";

export async function generateMetadata(
    {searchParams: params}: any,
    parent: ResolvingMetadata
): Promise<Metadata> {
    console.log(params);
    return {
        title: "Search | IPU Senpai",
        description: "Student search. Search for students based on their name, programme, institute, batch, etc.",
        keywords: "ipu, search, name, ranklist, ggsipu, ipuranklist, open source, btech, bba, cse, it, gpa, sgpa, percentage, marks, results, ipu results",

        openGraph: {
            title: "Search | IPU Senpai",
            description: "Student search. Search for students based on their name, programme, institute, batch, etc.",
            url: "https://www.ipusenpai.in/search",

        },
    }
}



export default function Page() {

    return (
        <Search/>
    )

}