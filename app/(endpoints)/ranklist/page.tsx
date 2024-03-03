"use client"

import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {ChevronDownIcon, ChevronsUpDownIcon} from "lucide-react";
import {Command, CommandEmpty, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {useState} from "react";

export default function Page() {
    const [collegeName, setCollegeName] = useState("ADGIPS");
    const collegeList = ["ADGIPS", "ADGITM", "NIEC", "MAIT", "BPIT", "BVP"]
    return (
        <form>
            <div className="bg-[#1a202c] p-[2rem] shadow-md rounded-lg max-w-[72rem] mx-auto my-8">
                <h1 className="text-4xl font-semibold text-white mb-6">University Ranklist</h1>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
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
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button className="flex h-10 text-black w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
                                {collegeName
                                    ? collegeList.find((cllg) => cllg.toLowerCase() === collegeName.toLowerCase())
                                    : "Select College"}
                                <ChevronsUpDownIcon className="w-4 h-4 translate-x-1" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-48">
                            <Command>
                                <CommandInput className="h-9" placeholder="Select College" />
                                <CommandEmpty>No College found.</CommandEmpty>
                                <CommandList>
                                    {collegeList.map((cllg) => (
                                        <CommandItem
                                            key={cllg}
                                            value={cllg}
                                            onSelect={(currentValue) => {
                                                setCollegeName(currentValue);
                                            }}
                                        >{cllg}</CommandItem>
                                    ))}
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <Select className="w-full md:col-span-1">
                        <SelectTrigger id="programme">
                            <SelectValue placeholder="Shift" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="morning">Morning</SelectItem>
                            <SelectItem value="evening">Evening</SelectItem>
                            <SelectItem value="both">Both</SelectItem>
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
                        <SelectTrigger id="course">
                            <SelectValue placeholder="Course" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="cse">CSE</SelectItem>
                            <SelectItem value="ece">ECE</SelectItem>
                            <SelectItem value="me">ME</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select className="w-full md:col-span-1">
                        <SelectTrigger id="criteria">
                            <SelectValue placeholder="Criteria" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="overall">Overall</SelectItem>
                            <SelectItem value="research">Research</SelectItem>
                            <SelectItem value="teaching">Teaching</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="bg-[#38a169] text-white md:col-span-1">Search</Button>
                </div>
            </div>
        </form>
    )
}

