import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './scenes/dashboard/navbar/Navbar';

function App() {
    const theme = useMemo(() => createTheme(themeSettings), []);

    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box
                        width="100%"
                        height="100%"
                        padding="1rem 2rem 4rem 2rem"
                    >
                        <Routes>
                            <Navbar />
                            <Route path="/" element={<div>dashboard</div>} />
                            <Route
                                path="/predictions"
                                element={<div>predictions</div>}
                            />
                        </Routes>
                    </Box>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
