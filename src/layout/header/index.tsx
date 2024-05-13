import { Box, IconButton, Typography } from "@mui/material";
import { MenuUser } from "./menu-user";
import { useContext } from "react";
import { AppThemeContext } from "../../context/app-theme-context";
import IconifyIcon from "../../components/icon";

interface propsHeader {
    titulo: string;
}

export function Header(props: propsHeader) {
    const contextTheme = useContext(AppThemeContext);
    return (
        <header style={{ width: '100%', height: '60px', top: '-5px' }}>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                boxShadow='0 0 0 0.5px #a1a1a1'
                marginTop='-10px'
                height='100%'
                padding='10px'
                borderRadius='5px'
            >
                <Box>
                    <Typography variant="h6" sx={{
                        marginLeft: '55px',
                        fontWeight: 600,
                        fontSize: '1.625rem',
                        color: '#1976d2'
                    }}>
                        {props.titulo}
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center' >
                    <IconButton onClick={contextTheme.handleMode}>
                        <IconifyIcon icon={contextTheme.mode ? 'tdesign:mode-dark' : 'iconoir:sun-light'} />
                    </IconButton>
                    <MenuUser />
                </Box>
            </Box>
        </header>
    )
}