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
