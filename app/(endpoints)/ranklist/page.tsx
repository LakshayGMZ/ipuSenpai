import Ranklist from "@/components/ranklist/Ranklist";
import {RanklistSelectDataFields, StudentResults} from "@/types/types";
import {getResult} from "@/app/lib/dataFetchServer";


export default async function Page({searchParams}: any) {
    const selectedData: RanklistSelectDataFields = {
        programme: searchParams["programme"] || "",
        institute: searchParams["institute"] || "",
        specialization: searchParams["specialization"] || "",
        shift: searchParams["shift"] || "",
        batch: searchParams["batch"] || "",
        semester: searchParams["semester"] || "",
        page: searchParams["page"] || "0",
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
        <Ranklist data={selectedData} results={studentResults}/>
    )

}

