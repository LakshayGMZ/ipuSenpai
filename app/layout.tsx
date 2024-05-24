import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import {FloatingNav} from "@/components/ui/navbar/FloatingNavbar";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/react"
import {cn} from "@/lib/utils";
import axios from "axios";
import {LoaderProvider} from "@/app/lib/LoaderContext";
import {MUIThemeProvider} from "@/app/lib/MUIThemeProvider";
import {ThemeProvider} from "@/app/lib/ThemeProvider";
import CustomScripts from "@/components/ui/CustomScripts";
import {MultiStepLoader} from "@/components/ui/Loader";

const inter = Inter({subsets: ["latin"]});

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
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@ipusenpai"/>
        <meta name="twitter:creator" content="@ipusenpai"/>
        <meta name="twitter:title" content="IPU Senpai: The modern, open-source and better alternative to ipuranklist"/>
        <meta name="twitter:description"
              content="IPU Senpai is an open-source project that aims to provide a better, modern and feature-rich alternative to ipuranklist."/>
        <meta name="twitter:image" content="/logo.png"/>

        <meta name='og:image' content='https://www.ipusenpai.in/logo.png'/>
        <meta name='og:type' content='website'/>
        <meta name='og:site_name' content='IPU Senpai'/>
        <meta name='og:locale' content='en_US'/>
        <meta name='og:image:type' content='image/png'/>
        <meta name='og:image:alt' content='IPU Senpai Logo'/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name='HandheldFriendly' content='True'/>
        <meta name='og:image' content='https://www.ipusenpai.in/logo.png'/>

        <CustomScripts/>

        <LoaderProvider>
            <ThemeProvider
                attribute="data-theme"
                defaultTheme={"rose_dark"}
                // enableSystem
                disableTransitionOnChange
            >
                <MUIThemeProvider>

                    <FloatingNav navItems={navItems}/>
                    <div className={"mt-20 overflow-x-clip"}>
                        {children}
                        <MultiStepLoader/>
                    </div>

                    <SpeedInsights/>
                    <Analytics/>

                </MUIThemeProvider>
            </ThemeProvider>

        </LoaderProvider>
        </body>
        </html>
    )
        ;
}

