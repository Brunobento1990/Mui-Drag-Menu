import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    typography: {
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
    },
    palette: {
        text: {
            primary: '#E6EDF3'
        },
        mode: 'dark'
    }
})