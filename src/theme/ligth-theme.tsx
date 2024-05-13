import { createTheme } from "@mui/material";

export const LigthTheme = createTheme({
    typography: {
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
    },
    palette: {
        text: {
            primary: '#525252'
        },
        mode: 'light'
    }
})