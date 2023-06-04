import { createTheme } from '@mui/material/styles';
import { fonts } from 'styles/fonts';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E1E1E'
    },
    secondary: {
      main: '#FFFFFF'
    },
    info: {
      main: '#E56B51',
    },

  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600,
          color: "secondary",
          margin:"3% 0"
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: '1.6rem',
          fontWeight: 300,
        },
        body2:{
          fontSize:"1.6rem",
          color: "black",
        },
        root: {
          fontSize: "1.6rem",
          color: "#FFFFFF",
          fontFamily: fonts.primary
        }
      }
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
        disableElevation: true,
        color: 'info'
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
          fontSize: '1.4rem',
          backgroundColor: "info",
          ":hover": {
            transition: 'all 0.3s ease-in-out',
            opacity: "0.5"
          }
        }
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    },
    MuiCircularProgress: {
      defaultProps: {
        color: "info"
      }
    }

  }
});