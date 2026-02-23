"use client";

import { useState } from "react";

export default function ShutdownScreen() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col">
      <section className="flex-1 w-full flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
        <div className="w-full max-w-[680px]">
          {videoFailed ? (
            <img
              src="/cry_senpai.png"
              alt="IPU Senpai shutting down"
              className="w-full h-auto object-contain select-none"
              draggable={false}
            />
          ) : (
            <video
              src="/cry_senpai.webm"
              poster="/cry_senpai.png"
              className="w-full h-auto object-contain"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onError={() => setVideoFailed(true)}
            />
          )}
        </div>
      </section>

      <footer className="w-full px-4 pb-6 text-center text-sm leading-relaxed text-zinc-200 sm:px-6 sm:pb-8 sm:text-base">
        IPU Senpai is shutting down. The dataset is available at{" "}
        <a
          href="https://www.kaggle.com/datasets/martian0x80/ipuresults"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          kaggle.com/datasets/martian0x80/ipuresults
        </a>{" "}
        and will receive its final updates soon.{" "}
        <a
          href="https://dotnotes.in/results"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          dotnotes.in/results
        </a>{" "}
        now succeeds it. For queries:{" "}
        <a
          href="mailto:ipusenpai0x80@gmail.com"
          className="underline underline-offset-2"
        >
          ipusenpai0x80@gmail.com
        </a>
        .
      </footer>
    </main>
  );
}
