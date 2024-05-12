import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import {FloatingNav} from "@/components/ui/navbar/FloatingNavbar";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {cn} from "@/lib/utils";
import axios from "axios";
import {LoaderProvider} from "@/app/lib/LoaderContext";
import {MUIThemeProvider} from "@/app/lib/MUIThemeProvider";
import {ThemeProvider} from "@/app/lib/ThemeProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "IPU Senpai",
    description: "The modern and better IPU ranklist.",
};

const navItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Ranklist",
        link: "/ranklist",
    },
    {
        name: "Student Profile",
        link: "/student",
    },
    {
        name: "Search",
        link: "/search",
    },
    {
        name: "Statistics",
        link: "/statistics",
    },
];

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

    return (
        <html lang="en" suppressHydrationWarning>
        <body className={cn(inter.className, "flex flex-col")}>
        <link rel="icon" href="/favicon.ico" sizes="48x48 32x32 16x16"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

        <div className="h-screen overflow-y-auto flex gridBackground">
            <div className="absolute pointer-events-none inset-y-0 mx-0 w-full flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
            <div className={"z-10 w-screen"}>
                <LoaderProvider>
                    <ThemeProvider
                        attribute="data-theme"
                        defaultTheme={"rose_dark"}
                        // enableSystem
                        disableTransitionOnChange
                    >
                        <MUIThemeProvider>

                            <FloatingNav navItems={navItems}/>
                            {children}
                            <SpeedInsights/>

                        </MUIThemeProvider>
                    </ThemeProvider>

                </LoaderProvider>
            </div>
        </div>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        </body>
        </html>
    );
}

