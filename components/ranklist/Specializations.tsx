"use client"

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {getInstitutes} from "@/app/lib/ranklist";

export default function Specializations(
    {
        specializations,
        disabled = true
    }: {
        specializations: string[],
        disabled?: boolean
    }) {
    // const [specs, setSpecs] = useState()
    //     <InstCombobox collegeList={[]} />
    // )

    return (

        <>
            <Select disabled={disabled} className="w-full md:col-span-1"
                    // onValueChange={(v) => setInsituteState(getInstitutes(v))}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Course"/>
                </SelectTrigger>
                <SelectContent position="popper">
                    {
                        Object.keys(specializations).map(
                            (spec, idx: number) =>
                                <SelectItem key={idx + 1} value={spec}>
                                    {spec}
                                </SelectItem>
                        )}

                </SelectContent>
            </Select>
            {/*{insituteState}*/}
        </>

    )
}