
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Button} from "@/components/ui/button"
import {getInstitutes, getProgrammes} from "@/app/lib/ranklist";
import InstCombobox from "@/components/ranklist/InstCombobox";
import Programmes from "@/components/ranklist/Programmes";


export default async function Page() {

    const programmes = await getProgrammes();

    return (
        <form>
            <div className="bg-[#1a202c] p-[2rem] shadow-md rounded-lg max-w-[72rem] mx-auto my-8">
                <h1 className="text-4xl font-semibold text-white mb-6">University Ranklist</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-6">
                    <Programmes programmes={programmes} />
                    <Select className="w-full md:col-span-1">
                        <SelectTrigger id="programme">
                            <SelectValue placeholder="Shift"/>
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="morning">Morning</SelectItem>
                            <SelectItem value="evening">Evening</SelectItem>
                            <SelectItem value="both">Both</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select className="w-full md:col-span-1">
                        <SelectTrigger id="year">
                            <SelectValue placeholder="Batch"/>
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="2022-2026">2022 - 2026</SelectItem>
                            <SelectItem value="2021-2025">2021 - 2025</SelectItem>
                            <SelectItem value="2020-2024">2020 - 2024</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select className="w-full md:col-span-1">
                        <SelectTrigger id="criteria">
                            <SelectValue placeholder="Semester"/>
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="overall">Sem 1</SelectItem>
                            <SelectItem value="research">Sem 2</SelectItem>
                            <SelectItem value="teaching">Sem 3</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="bg-[#38a169] text-white md:col-span-1">Search</Button>
                </div>
            </div>
        </form>
    )
}

