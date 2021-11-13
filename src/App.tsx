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
import DayHourly from "./Containers/DayHourly";
import {Phone} from "@mui/icons-material";
import API_Example from "./API/API_Example.json"
import {ForecastResponse} from "./API/API_Response";

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
    },[API_Example])

    function addProps(index: number) {
        return {
            id: `tab-${index}`,
            'aria-controls': `tabpanel-${index}`,
        };
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                bgcolor: "primary.light",
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Box sx={{m: 5}}>
                    <Typography variant={'h2'}>3 Day Weather Forecast</Typography>
                    <Paper sx={{p: 1, my: 2, width: 1, minHeight: 200}}>
                        <Typography variant={'h4'}>Todays forcast detail</Typography>
                    </Paper>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={selectedDay} onChange={(event, newValue) => setSelectedDay(newValue)} aria-label="daily forecast tabs">
                            <Tab label="Item Two" icon={<Phone />} {...addProps(0)} />
                            <Tab label="Item Two" {...addProps(1)} />
                            <Tab label="Item Three" {...addProps(2)} />
                        </Tabs>
                    </Box>
                    <DayHourly value={'Today'} index={0}>
                        Today
                    </DayHourly>
                    <DayHourly value={'Tomorrow'} index={1}>
                        Tomorrow
                    </DayHourly>
                    <DayHourly value={'X Day'} index={2}>
                        X Day
                    </DayHourly>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
