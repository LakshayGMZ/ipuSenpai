import React from "react";
import {SparklesCore} from "@/components/ui/sparkles";
import {Spotlight} from "@/components/ui/spotlight";

export default function Page() {

    return (
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
    );
}

