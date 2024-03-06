import {Dispatch, SetStateAction} from "react";

export interface CustomSelectProps<T> {
    name: string,
    values: T[],
    valueState: T,
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

