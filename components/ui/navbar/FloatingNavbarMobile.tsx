"use client";
import React, {useState} from "react";
import {useMotionValueEvent, useScroll,} from "framer-motion";

export const FloatingNavMobile = (
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
            <div className="flex justify-center relative">
                <div className="flex flex-row small-12 text-left relative">

                    <span id="titolo-pillol" className="opacity-100">Home</span>

                    <div id="mobile-pillol"
                         className={"bg-black translate-x-0 translate-y-0 h-[60px] w-full rounded-[27px]"}>

                    </div>


                    <a className="buttolo-mobile">
            <span id="mcbuttonM" className="McButton">
                <b className="top-[27.7778%]"></b>
                <b className="bottom-[5px]"></b>
            </span>
                    </a>

                </div>
            </div>
        </div>
    );

};
