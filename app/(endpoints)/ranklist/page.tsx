import Ranklist from "@/components/ranklist/Ranklist";
import { RanklistSelectDataFields, StudentResults } from "@/types/types";
import { getResult } from "@/app/lib/dataFetchServer";
import { Metadata, ResolvingMetadata } from "next";

export const runtime = "edge";

export async function generateMetadata(
  { searchParams: params }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  console.log(params);
  return {
    title: `Ranklist | IPU Senpai | ${params.programme} |
                    Semester ${params.semester} | ${params.institute}`,
    description:
      "Student ranklist. Ranklist of students based on their GPA, percentage, marks, credit marks, etc.",
    keywords:
      "ipu, ranklist, ggsipu, ipuranklist, open source, btech, bba, cse, it, gpa, sgpa, percentage, marks, results, ipu results",

    openGraph: {
      title: `Ranklist | IPU Senpai | ${params.programme} |
                    Semester ${params.semester} | ${params.specialization} | ${params.institute}`,
      description:
        "Student ranklist. Ranklist of students based on their GPA, percentage, marks, credit marks, etc.",
      url: "https://www.ipusenpai.in/ranklist",
    },
  };
}

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
  };
  let studentResults: StudentResults = {
    avgGpa: 0,
    avgPercentage: 0,
    gpaList: [],
    ranklist: [],
  };

  if (selectedData.programme !== "") {
    studentResults = await getResult(selectedData);
  }

  return (
    <>
      <Ranklist data={selectedData} results={studentResults} />
    </>
  );
}
