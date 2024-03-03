"use client";
import React, {useState} from "react";
import {AnimatePresence, motion, useMotionValueEvent, useScroll,} from "framer-motion";
import {cn} from "@/lib/utils";
import {NavbarTabs} from "@/components/ui/navbar/NavBarTabs";

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
        let direction = current! - scrollYProgress.getPrevious()!;
        if (direction !== 1) {
            if (direction < 0) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }

    });

    return (
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
                    "flex max-w-fit fixed top-10 " +
                    "border border-transparent dark:border-white/[0.2] rounded-full " +
                    "dark:bg-black bg-white inset-x-0 m-auto " +
                    "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] " +
                    "z-[5000] px-4 py-2 whitespace-nowrap",
                    className
                )}
            >
                <NavbarTabs tabs={navItems} />
            </motion.div>
        </AnimatePresence>
    );
};
