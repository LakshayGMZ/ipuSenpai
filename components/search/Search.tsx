"use client";

import { useState } from "react";
import { StudentSubjectDropDown } from "./dropdown";
import SearchStudent from "./SearchStudent";
import SearchSubject from "./SearchSubject";

export default function Search() {
  const [searchType, setSearchType] = useState("Student by Name");

  return (
    <>
      <div className="rounded-lg mx-4 md:mx-10">
        <h1 className="text-4xl font-semibold mb-6">
          <span className="align-middle">Search</span>{" "}
          {
            <StudentSubjectDropDown
              position={searchType}
              setPosition={setSearchType}
            />
          }
        </h1>
        {searchType === "Student by Name" ? (
          <SearchStudent />
        ) : (
          <SearchSubject />
        )}
      </div>
    </>
  );
}
