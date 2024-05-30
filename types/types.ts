import {Dispatch, SetStateAction} from "react";

export interface CustomSelectProps<T> {
    className?: string;
    name: string;
    values: RanklistQueryFields[];
    valueState: string;
    setValueState: Dispatch<SetStateAction<T>>;
    disabled?: boolean;
    is_mobile: boolean;
    defaultOption?: RanklistQueryFields;
}

export interface RanklistSelectDataFields {
    programme: string;
    institute: string;
    specialization: string;
    shift: string;
    batch: string;
    semester: string;
    page?: number;
    pageSize?: number;
}

export interface SearchSelectDataFields {
    programme: string;
    institute: string;
    batch: string;
    name: string;
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
    creditspercentage: number;
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

export interface SubjectDataWithSemester{
    semester: string;
    subjects: SubjectData[];
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

interface GpaList {
    gpa: number;
    enrollment: string;
    name: string;
    percentage: number;
}

export interface StudentDataJoined extends StudentDataOverallSem, StudentDataPerSem {}
export interface StudentResults {
    ranklist: StudentDataJoined[];
    avgGpa: number;
    avgPercentage: number;
    totalPages?: number;
    gpaList: GpaList[];
}

export type LoadingState = {
    text: string;
};
export type LoaderContextType = {
    loading: boolean;
    steps: LoadingState[];
}

export interface StudentSearchCard {
    enrollment: string;
    name: string;
    institute: string;
    programme: string;
    batch: string;
}

// Student profile.

export interface MarksPerSemester {
    semester: string;
    marks: string;
    total: string;
    creditmarks: string;
    totalcreditmarks: string;
    totalcredits: string;
    totalcreditmarksweighted: string;
    sgpa: string;
    percentage: string;
    creditspercentage: string;
    subjects: SubjectData[];
}

export interface CumulativeResult {
    semester: string;
    cgpa: string;
    percentage: string;
    creditspercentage: string;
    marks: string;
    totalmarks: string;
    creditmarks: string;
    totalcreditmarks: string;
}

export interface GradeFrequency {
    grade: string;
    frequency: number;
}

export interface StudentProfileData {
    enrollment: string;
    name: string;
    programme: string;
    specialization: string;
    institute: string;
    transfer: boolean;
    batch: string;
    sid: string;
    instCode: string;
    progCode: string;
    marks: number;
    creditMarks: number;
    totalCreditMarks: number;
    totalCreditMarksWeighted: number;
    totalCredits: number;
    total: number;
    cgpa: number;
    percentage: number;
    creditsPercentage: number;
    semesters: number;
    marksPerSemester: MarksPerSemester[];
    subject: SubjectDataWithSemester[];
    cumulativeResult: CumulativeResult[];
}

// ================

export interface CounterType {
    student: number,
    result: number,
    programme: number,
    institute: number,
    actualResult: number
}


interface StudentCountSingle {
    name: string,
    count: number
}

interface StudentCountByProgramme {
    name: string,
    studentCounts: StudentCountSingle[]
}

interface StudentCountByInstitute {
    name: string,
    studentCounts: StudentCountSingle[]
}

interface StudentCountByBatch {
    name: string,
    studentCounts: StudentCountSingle[]
}

export interface StudentCountBy {
    byProgramme: StudentCountByProgramme,
    byInstitute: StudentCountByInstitute,
    byBatch: StudentCountByBatch
}

// SITEMAP======
type Changefreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export interface SiteMapIFace {
    loc: string;
    lastmod: Date;
    changefreq: Changefreq;
    priority: number;
}