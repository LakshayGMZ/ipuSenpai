import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Button} from "@/components/ui/button"

export default function Page() {
    return (
        <form>
            <div className="bg-[#1a202c] p-[2rem] shadow-md rounded-lg max-w-[72rem] mx-auto my-8">
                <h1 className="text-4xl font-semibold text-white mb-6">University Ranklist</h1>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <Select className="w-full md:col-span-1">
                        <SelectTrigger id="programme">
                            <SelectValue placeholder="Programme" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="btech">B. Tech.</SelectItem>
                            <SelectItem value="mtech">M. Tech.</SelectItem>
                            <SelectItem value="phd">Ph.D.</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select className="w-full md:col-span-1">
                        <SelectTrigger id="year">
                            <SelectValue placeholder="Year Range" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="2022-2026">2022 - 2026</SelectItem>
                            <SelectItem value="2021-2025">2021 - 2025</SelectItem>
                            <SelectItem value="2020-2024">2020 - 2024</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select className="w-full md:col-span-1">
                        <SelectTrigger id="programme">
                            <SelectValue placeholder="All colleges" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="morning">ADGIPS</SelectItem>
                            <SelectItem value="evening">ADGITM</SelectItem>
                            <SelectItem value="both">NIEC</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select className="w-full md:col-span-1">
                        <SelectTrigger id="course">
                            <SelectValue placeholder="Course" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="cse">CSE</SelectItem>
                            <SelectItem value="ece">ECE</SelectItem>
                            <SelectItem value="me">ME</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="bg-[#38a169] text-white md:col-span-1">Search</Button>
                </div>
            </div>
        </form>
    )
}

