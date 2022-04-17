import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    h6: {
      fontSize: "1rem"
    }
  }
});

export default lightTheme;