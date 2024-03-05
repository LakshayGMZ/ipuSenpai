"use client"

import {ReactNode, useEffect, useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Check, ChevronsUpDown, ChevronsUpDownIcon} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {getInstitutes, getSpecs} from "@/app/lib/ranklist";
import {cn} from "@/lib/utils";
import Specializations from "@/components/ranklist/Specializations";

export default function InstCombobox(
    {
        collegeList,
        progname,
        disabled = true
    }:{
        collegeList: string[],
        progname: string,
        disabled?: boolean
    }
) {
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const [specState, setSpecState] = useState<ReactNode>(
        <Specializations specializations={[]}/>
    )
    useEffect(() => {
        if (progname !== "")
            setSpecState(getSpecs(progname));
    }, [progname]);

    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        disabled={disabled}
                        className="w-full justify-between"
                    >
                        {value !== ""
                            ? collegeList.find((cllg) => cllg.toLowerCase() === value.toLowerCase())
                            : "Select College"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                    <Command>
                        <CommandInput placeholder="Search College" />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {collegeList.map((cllg, idx) => (
                                <CommandItem
                                    key={idx+1}
                                    value={cllg}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value.toLowerCase() === cllg.toLowerCase() ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {cllg}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
            {specState}
        </>

    );
}