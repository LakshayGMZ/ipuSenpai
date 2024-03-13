"use client"

import React, {useContext} from "react";
import {createTheme, ThemeProvider} from "@mui/material";

const CustomThemeContext = React.createContext((theme: string) => {});

export function MUIThemeProvider(
    {
        children
    }: {
        children: React.ReactNode;
    }
) {
    const [dark, setDark] = React.useState(false);

    function setMuiTheme(theme: string) {
        setDark(theme === "dark");
    }

    return (
        <CustomThemeContext.Provider value={setMuiTheme}>
            <ThemeProvider theme={createTheme({
                    palette: {
                        mode: dark ? "dark" : "light",
                    }
                }
            )}>
                {children}
            </ThemeProvider>
        </CustomThemeContext.Provider>
    );
}

export function useMuiTheme() {
    const context = useContext(CustomThemeContext);
    if (context === undefined) {
        throw new Error("useCustomThemeContext must be used within an CustomThemeProvider");
    }
    return context;
}