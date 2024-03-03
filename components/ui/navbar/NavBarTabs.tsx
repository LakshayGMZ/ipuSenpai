"use client";

import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

type Tab = {
    name: string;
    link: string;
};

export const NavbarTabs = ({
                               tabs: propTabs,
                               containerClassName,
                               activeTabClassName,
                               tabClassName,
                           }: {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}) => {
    const pathname = usePathname();
    const [active, setActive] = useState<Tab>(propTabs.find((i) => i.link == pathname) || propTabs[0]);
    const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setActive(newTabs[0]);
    };

    const [hovering, setHovering] = useState(false);

    return (
        <div
            className={cn(
                "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar",
                containerClassName
            )}
        >
            {propTabs.map((tab, idx) => (
                <Link
                    key={idx+1}
                    href={tab.link}
                    onClick={() => {
                        moveSelectedTabToTop(idx);
                        // router.push(tab.link);
                    }}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    className={cn("relative px-4 py-2 rounded-full", tabClassName)}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                >
                    {active.name === tab.name && (
                        <motion.div
                            layoutId="clickedbutton"
                            transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                            className={cn(
                                "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
                                activeTabClassName
                            )}
                        />
                    )}

                    <span className="relative block text-black dark:text-white ">
                            {tab.name}
                        </span>
                </Link>
            ))}
        </div>
    );
};
