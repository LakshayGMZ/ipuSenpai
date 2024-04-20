"use client";
import React, {useState} from "react";
import {AnimatePresence, motion, useMotionValueEvent, useScroll,} from "framer-motion";
import {cn} from "@/lib/utils";
import {NavbarTabs} from "@/components/ui/navbar/NavBarTabs";
import ThemeChangerTray from "@/components/ui/navbar/ThemeChangerTray";

export const FloatingNav = (
    {
        navItems,
        className,
    }: {
        navItems: {
            name: string;
            link: string;
        }[];
        className?: string;
    }) => {
    const {scrollYProgress} = useScroll();

    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        const direction = current! - scrollYProgress.getPrevious()!;
        if (direction !== 1) {
            if (direction < 0) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }

    });

    return (
        <div className={"flex fixed top-10 px-2 items-center z-[5000] -translate-x-2/4 -translate-y-2/4 left-2/4"}>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{
                        opacity: 1,
                        y: -100,
                    }}
                    animate={{
                        y: visible ? 0 : -100,
                        opacity: visible ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className={cn(
                        "flex w-full sm:w-fit backdrop-blur-md " +
                        "border border-transparent dark:border-white/[0.2] rounded-full " +
                        "m-auto " +
                        "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] " +
                        "px-4 py-2 whitespace-nowrap ",
                        className)}
                >
                    <ThemeChangerTray />
                    <NavbarTabs tabs={navItems} />
                </motion.div>
            </AnimatePresence>
        </div>
    );

};
