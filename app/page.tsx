import Image from "next/image";
import { Divider } from "@mui/material";
import { customFetch } from "@/app/lib/dataFetchServer";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CounterType, StudentCountBy } from "@/types/types";
import BGGradient from "@/components/index/BGGradient";
import Counter from "@/components/index/Counter";
import HomePageGraphs from "@/components/index/Graphs";
import { Metadata } from "next";

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
          <BGGradient />
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
              A modern, open-source, beautifully designed, ready-to-use
              alternative to ipuranklist for IPU students.
            </p>
          </div>

          <Divider className={"my-6"} variant="middle" />

          <div className={"grid grid-cols-1 md:grid-cols-2"}>
            <Counter counterStats={counterStats} />
          </div>

          <div className="text-center mt-4">
            <p className="text-[0.75rem] text-neutral-400 dark:text-neutral-500">
              Note: The actual number of results is {counterStats.actualResult}.
              The number of results shown here is the number of result rows
              expanded in the database per subject.
            </p>
          </div>

          <Divider className={"my-6"} variant="middle" />

          <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
            <HomePageGraphs studentCountBy={studentCountBy} />
          </div>

          <Divider className={"my-6 py-5"} variant="middle" />

          <h1 className="text-[4rem] font-extrabold text-[rgba(255,255,255,0.6)] text-center break-words py-4">
            Contribution
          </h1>
          <div className="bg-black bg-opacity-50 p-6 text-white text-center text-xl font-medium rounded-xl">
            <p>
              Contribute to this project on GitHub. We are open to
              contributions. Star the project if you like it. :D
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
            <div className="text-center">
              <h2 className="font-extrabold text-[rgba(255,255,255,0.6)] text-center break-words py-4 text-4xl font-bold mb-4">
                Frontend
              </h2>
              <a href="https://github.com/LakshayGMZ/ipuSenpai/actions/workflows/production.yml">
                <img
                  src="https://github.com/LakshayGMZ/ipuSenpai/actions/workflows/production.yml/badge.svg"
                  alt="Vercel Production Deployment"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/LakshayGMZ/ipuSenpai/actions/workflows/preview.yml">
                <img
                  src="https://github.com/LakshayGMZ/ipuSenpai/actions/workflows/preview.yml/badge.svg?branch=devel"
                  alt="Vercel Preview Deployment"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/lakshayGMZ/ipuSenpai/issues">
                <img
                  src="https://img.shields.io/github/issues/lakshayGMZ/ipuSenpai"
                  alt="GitHub issues"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/lakshayGMZ/ipuSenpai/pulls">
                <img
                  src="https://img.shields.io/github/issues-pr/lakshayGMZ/ipuSenpai"
                  alt="GitHub pull requests"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/lakshayGMZ/ipuSenpai/graphs/contributors">
                <img
                  src="https://img.shields.io/github/contributors/lakshayGMZ/ipuSenpai"
                  alt="GitHub contributors"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/lakshayGMZ/ipuSenpai/blob/main/LICENSE">
                <img
                  src="https://img.shields.io/github/license/lakshayGMZ/ipuSenpai"
                  alt="GitHub license"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/lakshayGMZ/ipuSenpai/stargazers">
                <img
                  src="https://img.shields.io/github/stars/lakshayGMZ/ipuSenpai"
                  alt="GitHub stars"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/lakshayGMZ/ipuSenpai/network">
                <img
                  src="https://img.shields.io/github/forks/lakshayGMZ/ipuSenpai"
                  alt="GitHub forks"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/lakshayGMZ/ipuSenpai/watchers">
                <img
                  src="https://img.shields.io/github/watchers/lakshayGMZ/ipuSenpai"
                  alt="GitHub watchers"
                  className="inline-block mx-2 my-2"
                />
              </a>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-[rgba(255,255,255,0.6)] text-center break-words py-4 text-4xl font-bold mb-4">
                Backend
              </h2>
              <a href="https://github.com/martian0x80/IPUSenpaiBackend/actions/workflows/docker-workflow.yml">
                <img
                  src="https://github.com/martian0x80/IPUSenpaiBackend/actions/workflows/docker-workflow.yml/badge.svg"
                  alt="IPUSenpai Backend"
                  className="inline-block mx-2 my-2"
                />
              </a>
              {/* <a href="https://www.rmrf.online/status/ipusenpai">
                <img
                  src="https://status.rmrf.online/api/badge/11/status?style=flat"
                  alt="Uptime Status"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://www.rmrf.online/status/ipusenpai">
                <img
                  src="https://status.rmrf.online/api/badge/11/ping?style=flat"
                  alt="Uptime Ping"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://www.rmrf.online/status/ipusenpai">
                <img
                  src="https://status.rmrf.online/api/badge/11/uptime?style=flat"
                  alt="Uptime"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://www.rmrf.online/status/ipusenpai">
                <img
                  src="https://status.rmrf.online/api/badge/11/response?style=flat"
                  alt="Response Time"
                  className="inline-block mx-2 my-2"
                />
              </a> */}
              <a href="https://github.com/martian0x80/IPUSenpaiBackend/issues">
                <img
                  src="https://img.shields.io/github/issues/martian0x80/IPUSenpaiBackend"
                  alt="GitHub issues"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/martian0x80/IPUSenpaiBackend/blob/master/LICENSE">
                <img
                  src="https://img.shields.io/github/license/martian0x80/IPUSenpaiBackend"
                  alt="GitHub license"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/martian0x80/IPUSenpaiBackend/commits/master">
                <img
                  src="https://img.shields.io/github/last-commit/martian0x80/IPUSenpaiBackend"
                  alt="GitHub last commit"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/martian0x80/IPUSenpaiBackend/pulls">
                <img
                  src="https://img.shields.io/github/issues-pr/martian0x80/IPUSenpaiBackend"
                  alt="GitHub pull requests"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/martian0x80/IPUSenpaiBackend/network">
                <img
                  src="https://img.shields.io/github/forks/martian0x80/IPUSenpaiBackend"
                  alt="GitHub forks"
                  className="inline-block mx-2 my-2"
                />
              </a>
              <a href="https://github.com/martian0x80/IPUSenpaiBackend/stargazers">
                <img
                  src="https://img.shields.io/github/stars/martian0x80/IPUSenpaiBackend"
                  alt="GitHub stars"
                  className="inline-block mx-2 my-2"
                />
              </a>
            </div>
          </div>

          <Divider className={"my-6 py-5"} variant="middle" />

          <h1 className="text-[4rem] font-extrabold text-[rgba(255,255,255,0.6)] text-center break-words py-4">
            Socials
          </h1>
          <div className={"grid grid-cols-1"}>
            <div className="bg-black bg-opacity-50 p-6 text-white text-center text-xl font-medium rounded-xl">
              <p>
                Join our discord server to get latest updates and to discuss
                about the project.
              </p>
              <p className="py-2">OR</p>
              <p>
                Join our whatsapp group to get latest updates and to discuss
                about the project.
              </p>
              <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 rounded-xl p-4 gap-4 place-items-center">
                <a
                  aria-label="Chat on WhatsApp"
                  href="https://chat.whatsapp.com/HC8epjRUoxXFvZySFslmGO"
                >
                  <img
                    alt="Chat on WhatsApp"
                    src="assets/WhatsAppButtonWhiteLarge.svg"
                  />
                </a>
                <a
                  href="mailto:ipusenpai0x80@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="bg-primary text-white">
                    <Mail className="w-6 h-6 mr-2" />
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1 rounded-xl p-4 gap-4 place-items-center">
              <iframe
                src="https://discord.com/widget?id=1052916034702692433&theme=dark"
                width="350"
                height="500"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>

          <Divider className={"my-6 py-5"} variant="middle" />

          <div className="bg-black bg-opacity-50 p-6 text-white text-center text-md font-sm rounded-xl">
            <p>
              Made with ❤️ by{" "}
              <a href="https://github.com/martian0x80/">martian0x80</a> and{" "}
              <a href="https://github.com/lakshayGMZ/">LakshayGMZ</a>
            </p>

            <p>&copy; 2024 IPU SENPAI</p>

            <p>All rights reserved.</p>
          </div>
        </div>
      </>
    );
}

