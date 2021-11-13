import React, {useEffect, useState} from 'react';
import {
    Box,
    createTheme,
    Paper,
    responsiveFontSizes,
    Tab, Tabs,
    ThemeProvider,
    Typography
} from "@mui/material";
import TabContent from "./Containers/Day/TabContent";
import {Phone} from "@mui/icons-material";
import API_Example from "./API/API_Example.json"
import {ForecastResponse} from "./API/API_Response";
import DayTab from "./Containers/Day/Tab";

function App() {

    let theme = createTheme({
        typography: {
            fontSize: 12,
        },
    })
    theme = responsiveFontSizes(theme);

    const [selectedDay, setSelectedDay] = useState(0)

    const [forecastData, setForecastData] = useState<ForecastResponse | undefined>(undefined)

    useEffect(() => {
        setForecastData(API_Example)
    },[])

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                bgcolor: "primary.light",
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                alignItems: 'center',
                p: 4
            }}>
                <Box sx={{width: 1, maxWidth: 'sm'}}>
                    <Typography variant={'h2'}>Weather Forecast</Typography>
                    <Paper sx={{my: 2, width: 1, minHeight: 240}}>
                        <Typography variant={'h4'}>Todays forcast detail</Typography>
                    </Paper>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={selectedDay} variant="fullWidth" onChange={(event, newValue) => setSelectedDay(newValue)} aria-label="daily forecast tabs">
                            {forecastData?.forecast.forecastday.map((day, index) =>
                                DayTab(day, index)
                            )}
                        </Tabs>
                    </Box>
                    {forecastData?.forecast.forecastday.map((day, index) =>
                        TabContent (day, index, selectedDay)
                    )}
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
