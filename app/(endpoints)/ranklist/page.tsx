import Ranklist from "@/components/ranklist/Ranklist";
import { RanklistSelectDataFields, StudentResults } from "@/types/types";
import { getResult } from "@/app/lib/dataFetchServer";
import { Metadata, ResolvingMetadata } from "next";

function removePageQueryParam(params: RanklistSelectDataFields) {
  let u = new URL("https://www.ipusenpai.in/ranklist");
  const { page, pageSize, ...rest } = params;
  let key: keyof typeof rest;
  for (key in rest) {
    if (key.toString() !== "pageSize" && key.toString() !== "page") {
      u.searchParams.append(key, rest[key]);
    }
  }
  return u.toString();
}

export const runtime = "edge";

export async function generateMetadata(
  { searchParams: params }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: `Ranklist | IPU Senpai | ${params.programme !== undefined ? params.programme + " | " : ""}${params.semester !== undefined ? "Semester " + params.semester + " | " : ""}${params.institute || ""}`,
    description:
      "Student ranklist. Ranklist of students based on their GPA, percentage, marks, credit marks, etc.",
    keywords:
      "ipu, ranklist, ggsipu, ipuranklist, open source, btech, bba, cse, it, gpa, sgpa, percentage, marks, results, ipu results",

    openGraph: {
      title: `Ranklist | IPU Senpai | ${params.programme !== undefined ? params.programme + " | " : ""}${params.semester !== undefined ? "Semester " + params.semester + " | " : ""}${params.institute || ""}`,
      description:
        "Student ranklist. Ranklist of students based on their GPA, percentage, marks, credit marks, etc.",
      url: "https://www.ipusenpai.in/ranklist",
    },
    alternates: {
      canonical: removePageQueryParam(params),
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
