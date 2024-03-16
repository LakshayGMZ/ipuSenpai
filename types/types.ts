import {Dispatch, SetStateAction} from "react";

export interface CustomSelectProps {
    name: string,
    values: RanklistQueryFields[],
    valueState: string,
    setValueState: Dispatch<SetStateAction<RanklistSelectDataFields>>,
    disabled?: boolean,
    is_mobile: boolean
}

export interface RanklistSelectDataFields {
    programme: string;
    institute: string;
    specialization: string;
    shift: string;
    batch: string;
    semester: string;
}

export interface RanklistQueryFields {
    name: string;
    value?: string;
}

export interface SemesterData {
    semester: number;
    marks: number;
    total: number;
    sgpa: string;
    percentage: string;
    creditmarks: number;
    totalcreditmarks: number;
    totalcredits: number;
    totalcreditmarksweighted: number;
}

export interface SubjectData {
    subcode: string;
    subname: string;
    credits: string;
    paperid: string;
    internal: string;
    external: string;
    total: string;
    exam: string;
    grade: string;
    ExamType: string;
}

interface BasicStudentData {
    enrollment: string;
    name: string;
    marks: number;
    creditMarks: number;
    totalCreditMarks: number;
    totalCreditMarksWeighted: number;
    totalCredits: number;
    total: number;
    percentage: number;
    creditsPercentage: number;
    rank: number;
}

interface StudentDataPerSem extends BasicStudentData {
    subject?: SubjectData[];
    sgpa?: number;
}


interface StudentDataOverallSem extends BasicStudentData {
    cgpa?: number;
    semesters?: number;
    marksPerSemester?: SemesterData[];
}

export interface StudentResults extends StudentDataOverallSem, StudentDataPerSem {}

export type LoadingState = {
    text: string;
};
export type LoaderContextType = {
    loading: boolean;
    steps: LoadingState[];
}
