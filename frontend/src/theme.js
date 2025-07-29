import { createTheme } from '@mui/material/styles';

const gold = '#C9A13B';
const black = '#000000';
const white = '#FFFFFF';

const theme = createTheme({
  palette: {
    primary: {
      main: gold,
      contrastText: black,
    },
    secondary: {
      main: black,
      contrastText: gold,
    },
    background: {
      default: black,
      paper: white,
    },
    text: {
      primary: black,
      secondary: gold,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: black,
          color: gold,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: gold,
          color: black,
          '&:hover': {
            backgroundColor: '#b38e2e',
          },
        },
        outlinedPrimary: {
          borderColor: gold,
          color: gold,
          '&:hover': {
            backgroundColor: 'rgba(201,161,59,0.08)',
            borderColor: gold,
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h2: {
      fontWeight: 700,
      color: gold,
    },
    h5: {
      color: black,
    },
    body1: {
      color: black,
    },
  },
});

export default theme; 