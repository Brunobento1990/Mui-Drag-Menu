import { ThemeProvider } from "@mui/material";
import { ReactNode, createContext, useState } from "react";
import { LigthTheme } from "../theme/ligth-theme";
import { DarkTheme } from '../theme/dark-theme'

interface IAppThemeContext {
    mode: boolean;
    handleMode: () => void;
}

interface IAppThemeProvider {
    children: ReactNode
}

export const AppThemeContext = createContext({
    mode: false,
    handleMode: () => { },
} as IAppThemeContext);

export function AppThemeProvider(props: IAppThemeProvider) {
    const [mode, setMode] = useState<boolean>(localStorage.getItem('theme') === 'false');
    function handleMode(){
        setMode(!mode);
        localStorage.setItem('theme', mode.toString());
    }   
    return (
        <AppThemeContext.Provider
            value={{
                    mode,
                    handleMode,
                }}
        >
            <ThemeProvider theme={mode ? DarkTheme : LigthTheme}>
                {props.children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}