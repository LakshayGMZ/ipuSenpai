"use client"


import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {Paintbrush} from "lucide-react";
import * as React from "react"
import {useEffect, useState} from "react"
import {themes} from "@/components/themes/themes";
import {cn} from "@/lib/utils";
import {CheckIcon, MoonIcon, ResetIcon, SunIcon} from "@radix-ui/react-icons";
import {Skeleton} from "@mui/material";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Label} from "@/components/ui/label";
import {useMuiTheme} from "@/app/lib/MUIThemeProvider";

export default function ThemeChangerTray() {
    const {theme, setTheme} = useTheme();
    const setMuiTheme = useMuiTheme();

    const [color, setColor] = useState(theme !== undefined ? theme?.split("_")[0] : "rose")
    const [mounted, setMounted] = useState(false);

    const [mode, setMode] = useState<'light' | 'dark'>
    ((theme !== undefined ? theme!.split("_")[1] : "dark") as ("light" | "dark" | (() => "light" | "dark")));


    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        setTheme(color + "_" + mode);
        setMuiTheme(mode);
    }, [color, mode]);


    return (
        <div className="flex items-center space-x-2">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className={"rounded-full"}
                        size={"icon"}
                    >
                        <Paintbrush className="h-4 w-4"/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    align="center"
                    className="z-40 w-[340px] rounded-[0.5rem] bg-white p-6 dark:bg-zinc-950"
                >
                    <div
                        className="flex flex-col space-y-4 md:space-y-6"
                    >
                        <div className="flex items-start pt-4 md:pt-0">
                            <div className="space-y-1 pr-2">
                                <div className="font-semibold leading-none tracking-tight">
                                    Customize
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Pick a style and color for your components.
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="ml-auto rounded-[0.5rem]"
                                // onClick={() => {
                                //     setConfig({
                                //         ...config,
                                //         theme: "zinc",
                                //         radius: 0.5,
                                //     })
                                // }}
                            >
                                <ResetIcon/>
                                <span className="sr-only">Reset</span>
                            </Button>
                        </div>
                        <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
                            <div className="space-y-1.5">
                                <Label className="text-xs">Color</Label>
                                <div className="grid grid-cols-3 gap-2">
                                    {themes.map((themed) => {
                                        const isActive = themed.name === color

                                        return mounted ? (
                                            <Button
                                                variant={"outline"}
                                                size="sm"
                                                value={themed.name}
                                                key={themed.name}
                                                onClick={(e: any) => setColor(e.target.value)}
                                                className={cn(
                                                    "justify-start",
                                                    isActive && "border-2 border-primary"
                                                )}
                                            >
                                                <span
                                                    className={cn(
                                                        "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full"
                                                    )}
                                                    style={{backgroundColor: `hsl(${themed.activeColor[mode]})`}}
                                                >
                                                {isActive && <CheckIcon className="h-4 w-4 text-white"/>}
                                              </span>
                                                {themed.label}
                                            </Button>
                                        ) : (
                                            <Skeleton className="h-8 w-full" key={themed.name}/>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <Label className="text-xs">Mode</Label>
                                <div className="grid grid-cols-3 gap-2">
                                    {mounted ? (
                                        <>
                                            <Button
                                                variant={"outline"}
                                                size="sm"
                                                onClick={() => setMode("light")}
                                                className={cn(mode === "light" && "border-2 border-primary")}
                                            >
                                                <SunIcon className="mr-1 -translate-x-1"/>
                                                Light
                                            </Button>
                                            <Button
                                                variant={"outline"}
                                                size="sm"
                                                onClick={() => setMode("dark")}
                                                className={cn(mode === "dark" && "border-2 border-primary")}
                                            >
                                                <MoonIcon className="mr-1 -translate-x-1"/>
                                                Dark
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Skeleton className="h-8 w-full"/>
                                            <Skeleton className="h-8 w-full"/>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
