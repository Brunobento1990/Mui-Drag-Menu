import { styled, Theme, CSSObject, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { ReactNode, useState } from 'react';
import Sidebar from './sidebar';
import IconifyIcon from '../components/icon';
import { Header } from './header';
import { Footer } from './footer';
import { ContainerAtalhos } from './atalhos';

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

interface propsLayout {
  children: ReactNode;
  titulo: string;
}

export function Layout(props: propsLayout) {
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} >
        <DrawerHeader sx={{ height: '75px' }}>
          <Box sx={{ border: `1px solid ${theme.palette.primary.dark}`, borderRadius: '7px' }}>
            <IconButton onClick={handleDrawer} >
              <IconifyIcon icon='mdi:menu' color={theme.palette.primary.dark} />
            </IconButton>
          </Box>
        </DrawerHeader>
        <Divider />
        <Sidebar />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header titulo={props.titulo} />
        <Box
          sx={{
            minHeight: 'calc(100vh - 170px)',
            overflowY: 'auto',
            display: 'flex'
          }}
        >
          {props.children}
          <ContainerAtalhos />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
