"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { use, useEffect, useRef, useState } from "react";
import { CounterType } from "@/types/types";
import { CountUp } from "countup.js";
import { customFetch } from "@/app/lib/dataFetchServer";

const options = {
  startVal: 0,
  duration: 3,
  suffix: "+",
};

export default function Counter(
  {
    // counterStats
  }: {
    // counterStats: CounterType
  },
) {
  const [counterStats, setCounterStats] = useState<CounterType>({
    student: 0,
    programme: 0,
    institute: 0,
    result: 0,
    actualResult: 0,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const data = await customFetch<CounterType>("/count");
      setCounterStats(data);
    })();
  }, []);

  useEffect(() => {
    new CountUp("studentCounter", counterStats.student, options).start();
    new CountUp("programmeCounter", counterStats.programme, options).start();
    new CountUp("instituteCounter", counterStats.institute, options).start();
    new CountUp("resultCounter", counterStats.result, options).start();
  }, [counterStats]);

  return (
    <>
      <div className={"grid grid-cols-1 md:grid-cols-2"}>
        {[
          {
            title: "Institutes",
            id: "instituteCounter",
            description: counterStats.institute,
          },
          {
            title: "Students",
            id: "studentCounter",
            description: counterStats.student,
          },
          {
            title: "Programmes",
            id: "programmeCounter",
            description: counterStats.programme,
          },
          {
            title: "Results",
            id: "resultCounter",
            description: counterStats.result,
          },
        ].map(
          (
            item: {
              title: string;
              id: string;
              description: number;
            },
            idx,
          ) => (
            <div
              key={idx + 1}
              className="relative group  block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute z-[-1] inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card className={"hover:scale-100"}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <h2 id={item.id} className={"text-4xl font-medium"}>
                    {item.description}
                  </h2>
                </CardContent>
              </Card>
            </div>
          ),
        )}
      </div>
      <div className="text-center mt-4">
        <p className="text-[0.75rem] text-neutral-400 dark:text-neutral-500">
          Note: The actual number of results is {counterStats.actualResult}. The
          number of results shown here is the number of result rows expanded in
          the database per subject.
        </p>
      </div>
    </>
  );
}
