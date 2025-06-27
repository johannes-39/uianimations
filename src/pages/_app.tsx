import {CssBaseline, ThemeProvider} from '@mui/material';
import {AppProps} from "next/app";
import theme from "@/styles/theme";
// dein Theme-Import

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
