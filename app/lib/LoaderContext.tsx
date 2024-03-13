"use client"
import {createContext, ReactNode, useContext, useState} from "react";
import {LoaderContextType, LoadingState} from "@/types/types";

const initState: LoaderContextType = {
    loading: false,
    steps: [
        {
            text: "He makes soap",
        },
        {
            text: "We goto a bar",
        },
        {
            text: "Start a fight",
        }]
}

const LoaderContext = createContext({
    ...initState,
    setSteps: (steps: LoadingState[]) => {
    },
    activeLoader: () => {
    },
    inactiveLoader: () => {
    }
});

export function LoaderProvider(
    {
        children
    }: {
        children: ReactNode
    }) {
    const [loader, setLoader] = useState(initState);

    const setSteps = (steps: LoadingState[]) => {
        setLoader(prevState => ({...prevState, steps: steps}));
    }

    const activeLoader = () => {
        setLoader(prevState => ({...prevState, loading: true}));
    }

    const inactiveLoader = () => {
        setLoader(prevState => ({...prevState, loading: false}));
    }

    return (
        <LoaderContext.Provider value={{
            loading: loader.loading,
            steps: loader.steps,
            setSteps,
            activeLoader,
            inactiveLoader
        }}>
            {children}
        </LoaderContext.Provider>
    )
}

export function useLoader() {
    return useContext(LoaderContext);
}