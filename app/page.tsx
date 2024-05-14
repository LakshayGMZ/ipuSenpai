"use client"
import React from "react";
// import { SparklesCore } from "@/components/ui/sparkles";
// import { Spotlight } from "@/components/ui/spotlight";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
// import { Button } from "@/components/ui/button";
import { Gradient } from "whatamesh";
import { useEffect } from "react";

export default function Page() {

    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
        gradient.play();
    }, []);


    return (
        <>
            <div className="min-h-screen flex flex-col relative bg-slate-900">
                <div className="flex flex-row flex-col my-10 px-4 py-7 z-10 w-full">
                    <h1 className="text-8xl text-left font-medium tracking-[-.075em] break-words py-4">
                        IPU SENPAI
                    </h1>
                </div>
                <canvas
                    id="gradient-canvas"
                    className="fixed inset-0"
                    data-transition-in
                />
                <div className="relative h-screen overflow-hidden">
                    <div className="relative inset-x-0 bottom-0 bg-black bg-opacity-50 p-6 text-white z-0">
                        <p>
                            Hmm. I see you've found me. I'm batman.
                            Just kidding. <br />
                            No, fr though. I'm BATMAN <br /> 

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

