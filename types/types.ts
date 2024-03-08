import {Dispatch, SetStateAction} from "react";

export interface CustomSelectProps {
    name: string,
    values: RanklistQueryFields[],
    valueState: string,
    setValueState: Dispatch<SetStateAction<RanklistSelectDataFields>>,
    disabled?: boolean
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

export interface StudentDataPerSem {
    sem: number;
    semName: string;
    marks: number;
    totalMarks: number;
    percentage: number;
    creditMarks: number;
    creditPercentage: number;
    SGPA: number;
    equivalentPercentage: number;
    creditsObtained: number;
    totalCredits: number;
}

export interface RanklistDataTableRow {
    enrollmentNum: string;
    name: string;
    rank: string;
    marksData: StudentDataPerSem[];
}