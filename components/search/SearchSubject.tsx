"use client";

import { getQueriedSubjects } from "@/app/lib/dataFetchServer";
import { Input } from "@/components/ui/input";
import { SubjectSearchData } from "@/types/types";
import { useEffect, useState } from "react";
import SubjectCard from "./SubjectCard";

export default function SearchSubject() {
  const [searchName, setSearchName] = useState<string>("");
  const [searchData, setSearchData] = useState<SubjectSearchData[]>([]);

  useEffect(() => {
    const debounce = setTimeout(async () => {
      if (searchName !== "")
        setSearchData(await getQueriedSubjects(searchName));
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchName]);

  return (
    <>
      <Input
        value={searchName}
        className="w-full rounded-2xl md:col-span-2"
        type="text"
        required
        minLength={5}
        placeholder="Search by subject name or subject code or paper id"
        onChange={(e) => setSearchName(e.target.value)}
      />
      <hr className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-20 ">
        {searchData.map((data: SubjectSearchData, idx) => (
          <SubjectCard key={idx + 1} data={data} />
        ))}
      </div>
    </>
  );
}
