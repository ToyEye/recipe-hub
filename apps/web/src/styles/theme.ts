import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#BDD9F9',
    },
    secondary: {
      main: '#E0DEDE',
    },
    info: { main: '#FDFBD8' },
    error: { main: '#f44336' },
    background: {
      default: '#FFFFFF',
      paper: '#EBF2F9',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: { textTransform: 'none' },
  },
  shape: {
    borderRadius: 8,
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    duration: {
      short: 300,
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1240,
    },
  },
  spacing: 4,
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1240px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width: 768px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          '@media (min-width: 1240px)': {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#666666',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            color: '#A6A6A6',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
          '&.MuiButton-containedPrimary:hover': {
            backgroundColor: '#A5C4F0',
          },
          '&.MuiButton-containedSecondary:hover': {
            backgroundColor: '#D1D1D1',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer',
          },
          '&.MuiLink-containedPrimary:hover': {
            cursor: 'pointer',
          },
          '&.MuiLink-containedSecondary:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: { root: { padding: 0, width: 'auto' } },
    },
    MuiListItem: {
      styleOverrides: {
        root: { padding: 0, display: 'block', maxWidth: '100%', width: 'auto' },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer',
          },
          '&.MuiLink-containedPrimary:hover': {
            cursor: 'pointer',
          },
          '&.MuiLink-containedSecondary:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'inherit',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'inherit',
            },
          },
          '& input[type="password"]::-ms-reveal, & input[type="password"]::-ms-clear':
            {
              display: 'none',
            },
          '& input[type="password"]::-webkit-clear-button, & input[type="password"]::-webkit-reveal-button':
            {
              display: 'none',
            },
        },
      },
    },
  },
});
