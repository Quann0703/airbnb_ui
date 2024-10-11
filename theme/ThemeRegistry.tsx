'use client';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';
const themeOptions: ThemeOptions = {
    // Tùy chỉnh các thuộc tính theme ở đây
    palette: {
        primary: {
            main: '#1976d2', // Màu chính
        },
        secondary: {
            main: '#dc004e', // Màu phụ
        },
    },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
