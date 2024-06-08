import StudentDummy from "@/app/(endpoints)/student/StudentDummy";
import { StudentProfileData } from "@/types/types";
import { Metadata } from "next";

export const runtime = "edge";

const studentData: StudentProfileData = {
  enrollment: "69696969696",
  name: "Miyuki Shirogane",
  programme: "PRESIDENT'S COURSE",
  specialization: "STRATEGIC LEADERSHIP",
  institute: "SHUCHIIN ACADEMY",
  batch: "Unknown",
  sid: "1234567890",
  transfer: false,
  instCode: "SA",
  progCode: "PC",
  marks: 4250,
  creditMarks: 8925,
  totalCreditMarks: 9500,
  totalCreditMarksWeighted: 780,
  totalCredits: 95,
  total: 4900,
  cgpa: 9.736842,
  percentage: 98,
  creditsPercentage: 94,
  semesters: 3,
  marksPerSemester: [],
  subject: [
    {
      semester: "3",
      subjects: [],
    },
    {
      semester: "2",
      subjects: [],
    },
    {
      semester: "1",
      subjects: [],
    },
  ],
  cumulativeResult: [],
};

export const metadata: Metadata = {
  title: "Student Profile | IPU Senpai",
  description:
    "Student Profile Dashboard. View your marks, grades, percentage, cgpa in a single beautiful dashboard.",
  keywords:
    "ipu, search, name, ranklist, ggsipu, ipuranklist, open source, btech, bba, cse, it, gpa, sgpa, percentage, marks, results, ipu results",

  openGraph: {
    title: "Student Profile | IPU Senpai",
    description:
      "Student Profile Dashboard. View your marks, grades, percentage, cgpa in a single beautiful dashboard.",
    url: "https://www.ipusenpai.in/student",
  },
};

export default function Page() {
  return <StudentDummy studentData={studentData} />;
}
