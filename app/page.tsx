import Image from "next/image";
import {Divider} from "@mui/material";
import {customFetch} from "@/app/lib/dataFetchServer";
import {Mail} from "lucide-react";
import {Button} from "@/components/ui/button";
import {CounterType, StudentCountBy} from "@/types/types";
import BGGradient from "@/components/index/BGGradient";
import Counter from "@/components/index/Counter";
import HomePageGraphs from "@/components/index/Graphs";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "IPU Senpai | Open Source, Modern IPU Result Portal and Dashboard",
    description: "A modern, open-source, beautifully designed, ready-to-use alternative to ipuranklist for IPU students.",
    keywords: "ipu, search, name, ranklist, ggsipu, ipuranklist, open source, btech, bba, cse, it, gpa, sgpa, percentage, marks, results, ipu results",

    openGraph: {
        title: "IPU Senpai | Open Source, Modern IPU Result Portal and Dashboard",
        description: "A modern, open-source, beautifully designed, ready-to-use alternative to ipuranklist for IPU students.",
        url: "https://www.ipusenpai.in/",
    }
}

export default async function Page() {
    const counterStats = await customFetch<CounterType>("/count");
    const studentCountBy = await customFetch<StudentCountBy>("/count/by");


    return (
        <>
            <div className={"px-[15%]"}>
                <BGGradient/>
                <Image
                    src={"/logo.png"}
                    className={"fixed bottom-0 left-0 pb-4  w-[15%]"}
                    alt={"ipu senpai logo"}
                    width={260}
                    height={600}
                />
                <h1 className="text-[4.4rem] md:text-[8rem] font-extrabold text-[rgba(255,255,255,0.6)] text-center break-words py-4">
                    IPU SENPAI
                </h1>

                <div className="bg-black bg-opacity-50 p-6 text-white text-center text-2xl font-medium rounded-xl">
                    <p>
                        A modern, open-source, beautifully designed, ready-to-use alternative to ipuranklist for IPU
                        students.
                    </p>
                </div>

                <Divider className={"my-6"} variant="middle"/>

                <div className={"grid grid-cols-1 md:grid-cols-2"}>
                    <Counter counterStats={counterStats}/>
                </div>

                <div className="text-center mt-4">
                    <p className="text-[0.75rem] text-neutral-400 dark:text-neutral-500">
                        Note: The actual number of results is {counterStats.actualResult}. The number of results shown
                        here
                        is the number of result rows expanded in the database per subject.
                    </p>
                </div>

                <Divider className={"my-6"} variant="middle"/>

                <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
                    <HomePageGraphs studentCountBy={studentCountBy}/>
                </div>

                <Divider className={"my-6 py-5"} variant="middle"/>

                <h1 className="text-[4rem] font-extrabold text-[rgba(255,255,255,0.6)] text-center break-words py-4">
                    Contribution
                </h1>
                <div className="bg-black bg-opacity-50 p-6 text-white text-center text-xl font-medium rounded-xl">
                    <p>
                        Contribute to this project on GitHub. We are open to contributions. Star the project if you like
                        it. :D
                    </p>
                </div>
                {/*<div*/}
                {/*    className={"grid grid-cols-1 xl:grid-cols-2 rounded-xl p-4 gap-4 place-items-center aspect-[3.5]"}>*/}
                {/*    <object type="image/svg+xml"*/}
                {/*            data="https://gh-card.dev/repos/LakshayGMZ/ipuSenpai.svg?fullname=&link_target=_blank"></object>*/}
                {/*    <object type="image/svg+xml"*/}
                {/*            data="https://gh-card.dev/repos/martian0x80/IPUSenpaiBackend.svg?fullname=&link_target=_blank"></object>*/}
                {/*</div>*/}

                <Divider className={"my-6 py-5"} variant="middle"/>

                <h1 className="text-[4rem] font-extrabold text-[rgba(255,255,255,0.6)] text-center break-words py-4">
                    Socials
                </h1>
                <div className={"grid grid-cols-1"}>
                    <div className="bg-black bg-opacity-50 p-6 text-white text-center text-xl font-medium rounded-xl">
                        <p>
                            Join our discord server to get latest updates and to discuss about the project.
                        </p>
                        <p className="py-2">
                            OR
                        </p>
                        <p>
                            Join our whatsapp group to get latest updates and to discuss about the project.
                        </p>
                        <div
                            className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 rounded-xl p-4 gap-4 place-items-center">
                            <a aria-label="Chat on WhatsApp" href="https://chat.whatsapp.com/HC8epjRUoxXFvZySFslmGO">
                                <img alt="Chat on WhatsApp" src="assets/WhatsAppButtonWhiteLarge.svg"/></a>
                            <a
                                href="mailto:ipusenpai0x80@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button className="bg-primary text-white">
                                    <Mail className="w-6 h-6 mr-2"/>
                                    Contact Us
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 grid-cols-1 rounded-xl p-4 gap-4 place-items-center">
                        <iframe src="https://discord.com/widget?id=1052916034702692433&theme=dark" width="350"
                                height="500"
                                allowTransparency={true}
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>

                </div>

                <Divider className={"my-6 py-5"} variant="middle"/>

                <div className="bg-black bg-opacity-50 p-6 text-white text-center text-md font-sm rounded-xl">
                    <p>
                        Made with ❤️ by <a href="https://github.com/martian0x80/">martian0x80</a> and <a
                        href="https://github.com/lakshayGMZ/">LakshayGMZ</a>
                    </p>

                    <p>
                        &copy; 2024 IPU SENPAI
                    </p>

                    <p>
                        All rights reserved.
                    </p>

                </div>

            </div>
        </>
    );
}

