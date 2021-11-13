import React, {useEffect, useState} from 'react';
import {
    Box,
    createTheme,
    Paper,
    responsiveFontSizes,
    Tab, Tabs,
    ThemeProvider,
    Typography,
    ButtonGroup
} from "@mui/material";
import Graph from "./Containers/Day/Graph";
import API_Example from "./API/API_Example.json"
import {ForecastResponse} from "./API/API_Response";
import DayButton from "./Containers/Day/DayButton";

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
    }, [])

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
                    {/*Using buttons instead of tabs as hooks cannot be created conditionally*/}
                        <ButtonGroup variant="outlined" aria-label="outlined button group" fullWidth>
                            {forecastData?.forecast.forecastday.map((day, index) =>
                                DayButton(day, index, setSelectedDay)
                            )}
                        </ButtonGroup>
                    <Paper sx={{height: 400, p: 2}}>
                        <Box height={400-16} sx={{m:1}}>
                            {Graph(forecastData?.forecast.forecastday[selectedDay])}
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
