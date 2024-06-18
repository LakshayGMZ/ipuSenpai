"use client";

import { useLoader } from "@/app/lib/LoaderContext";
import {
  RanklistQueryFields,
  SearchSelectDataFields,
  StudentSearchCard,
  SubjectSearchData,
} from "@/types/types";
import { useEffect, useState } from "react";
import {
  getAllInstitutes,
  getProgrammes,
  getQueriedSubjects,
  getSearchByStudentResult,
} from "@/app/lib/dataFetchServer";
import { PreBuiltSelect } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { batches } from "@/app/lib/data";
import Link from "next/link";
import StudentCard from "@/components/search/StudentCard";

export default function Search() {
  const loader = useLoader();
  const [searchName, setSearchName] = useState<string>("");
  // searchname results data state type Subject Search Data
  const [searchData, setSearchData] = useState<SubjectSearchData[]>([]);

  const [selectedData, setSelectedData] = useState<SearchSelectDataFields>({
    programme: "All Programmes",
    institute: "All Institutes",
    batch: "*",
    name: "",
  });
  const [programmes, setProgrammes] = useState<RanklistQueryFields[]>([]);
  const [institutes, setInstitutes] = useState<RanklistQueryFields[]>([]);
  const [resultData, setResultData] = useState<StudentSearchCard[]>([]);

  // empty use effect
  useEffect(() => {
    const debounce = setTimeout(async () => {
      if (searchName !== "")
        setSearchData(await getQueriedSubjects(searchName));
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchName]);

  useEffect(() => {
    const fetchProgrammes = async () => {
      setProgrammes([{ name: "All Programmes" }, ...(await getProgrammes())]);
      setInstitutes([
        { name: "All Institutes" },
        ...(await getAllInstitutes()),
      ]);
    };
    fetchProgrammes();
  }, []);

  const handleResultFetch = async () => {
    const resData = await getSearchByStudentResult(selectedData);
    loader.inactiveLoader();
    setResultData(resData);
  };

  return (
    <>
      <form
        className="lg:px-10 py-4"
        onSubmit={async (e) => {
          e.preventDefault();
          loader.activeLoader();
          await handleResultFetch();
        }}
      >
        <div className="rounded-lg mx-4 md:mx-10">
          <h1 className="text-4xl font-semibold mb-6">
            Search Student by Name
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
            <PreBuiltSelect<SearchSelectDataFields>
              className={""}
              name={"programme"}
              // defaultOption={{name: "All Programmes", value: "*"}}
              values={programmes}
              valueState={selectedData.programme}
              setValueState={setSelectedData}
              disabled={false}
              is_mobile={false}
            />
            <Input
              value={selectedData.name}
              className="w-full rounded-2xl md:col-span-2"
              type="text"
              required
              minLength={5}
              placeholder="Enter student name"
              onChange={(e) =>
                setSelectedData((prevState) => {
                  if (e.target.value.match(/^[A-Za-z\s]*$/))
                    return { ...prevState, name: e.target.value };
                  else return prevState;
                })
              }
            />
            <Button
              className=" rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              variant={"outline"}
              // disabled={Object.values(selectedData).some(i => i === "")}
            >
              Search
            </Button>
          </div>
          <div className={"my-4"}>
            Don&apos;t snoop around, we are watching you! It&apos;s a joke,
            don&apos;t take it seriously. Or is it?
          </div>
          <div
            className={"grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6"}
          >
            <PreBuiltSelect<SearchSelectDataFields>
              name={"institute"}
              values={institutes}
              // defaultOption={{name: "All Institutes", value: "*"}}
              valueState={selectedData.institute}
              setValueState={setSelectedData}
              disabled={institutes.length === 0}
              is_mobile={false}
            />
            <PreBuiltSelect<SearchSelectDataFields>
              name={"batch"}
              values={batches}
              // defaultOption={{name: "All Batches", value: "*"}}
              valueState={selectedData.batch}
              setValueState={setSelectedData}
              disabled={batches.length === 0}
              is_mobile={false}
            />
          </div>
        </div>
      </form>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 mx-10 md:mx-20 ">
        {resultData.map((data, idx) => (
          <Link href={"/student/" + data.enrollment} key={idx + 1}>
            <StudentCard data={data} />
          </Link>
        ))}
      </div>
      <div>
        <Input
          value={searchName}
          className="w-full rounded-2xl md:col-span-2"
          type="text"
          required
          minLength={5}
          placeholder="Enter subject name"
          onChange={(e) => setSearchName(e.target.value)}
        />
        {/* indent the string json */}
        <pre>{JSON.stringify(searchData, null, 2)}</pre>
      </div>
    </>
  );
}
