"use client";
import { useState, useEffect } from "react";
import { StudentSubjectDropDown } from "./dropdown";
import SearchStudent from "./SearchStudent";
import SearchSubject from "./SearchSubject";
import RemoveEnrollmentButton from "./RemoveEnrollmentButton";

export default function Search() {
  const [searchType, setSearchType] = useState("Student by Name");
  const [savedEnrollment, setSavedEnrollment] = useState<string | null>(null);

  // Check for saved enrollment data on component mount
  useEffect(() => {
    const checkSavedData = () => {
      const enrollment = localStorage.getItem("enrollmentNumber");
      const userEnrollment = localStorage.getItem("userEnrollment");
      const studentProfile = localStorage.getItem("studentProfile");
      
      // Check if any enrollment data exists
      const hasSavedData = enrollment || userEnrollment || studentProfile;
      setSavedEnrollment(hasSavedData ? (enrollment || userEnrollment) : null);
    };

    checkSavedData();
  }, []);

  const handleEnrollmentRemoved = () => {
    setSavedEnrollment(null);
    //setting default value to null value 
  };

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

        {/* Show saved enrollment notice and remove button - only for Student search */}
        {searchType === "Student by Name" && savedEnrollment && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
                  Saved Enrollment Data
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-300">
                  Enrollment: <span className="font-semibold">{savedEnrollment}</span>
                </p>
              </div>
              <RemoveEnrollmentButton onEnrollmentRemoved={handleEnrollmentRemoved} />
            </div>
          </div>
        )}

        {searchType === "Student by Name" ? (
          <SearchStudent key={savedEnrollment ? "with-data" : "no-data"} />
        ) : (
          <SearchSubject />
        )}
      </div>
    </>
  );
}
