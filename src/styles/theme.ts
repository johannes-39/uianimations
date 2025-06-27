import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: `'Roboto Mono', 'Courier New', monospace`,
    },
    palette: {
        primary: {
            main: '#000000',
            light: "#ffffff"
        },
        secondary: {
            main: "#ffffff"
        }
    },
    // Weitere Theme-Konfiguration (Farben, etc.)
});

export default theme;