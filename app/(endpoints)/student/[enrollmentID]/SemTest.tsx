import {StudentProfileData} from "@/types/types";

export default function SemTest(
    {
        sem,
        data
    }:{
        sem: string,
        data?: StudentProfileData
    }
) {

    return (
        <>
            This is Sem {sem}
        </>
    )
}