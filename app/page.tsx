import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function Page() {

    return (
        <div className="bg-black">
            <div
                className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full absolute inset-0 h-screen">
                    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                        <Spotlight
                            className="-top-40 left-0 md:left-60 md:-top-20 fixed"
                            fill="white"
                        />
                        <SparklesCore
                            id="tsparticlesfullpage"
                            background="transparent"
                            minSize={0.6}
                            maxSize={1.4}
                            particleDensity={100}
                            className="w-full h-full fixed"
                            particleColor="#FFFFFF"
                        />
                        {/* <div className="absolute top-0 left-0 px-5 py-4">
                            <img src="/logo.png" alt="logo" className="w-14 h-15" />
                        </div> */}
                        <div className="absolute top-0 right-0 p-4">
                            <a
                                href="https://github.com/martian0x80/IPUSenpaiBackend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300"
                            >
                                <Button variant="ghost" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                                    <GitHubLogoIcon className="w-5 h-5" />
                                </Button>
                            </a>
                        </div>
                        <div className="p-4 w-full h-min inset-y-0 my-auto">
                            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                                IPU got Parsed <br /> Senpai
                            </h1>
                            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                                UWU OWO
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-4 px-4 flex justify-center">
                <img src="/logo.png" alt="logo" className="w-40 h-40" />
            </div>
        </div>
    );
}

