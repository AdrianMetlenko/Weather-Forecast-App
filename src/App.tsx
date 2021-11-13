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
import DataGraph from "./Containers/Additional/DataGraph";
import API_Example from "./API/API_Example.json"
import {ForecastResponse} from "./API/API_Response";
import DayButton from "./Components/DayButton";
import DetailCard from "./Containers/Main/DetailCard";
import DataTable from "./Containers/Additional/DataTable";
import DaysButtonGroup from "./Containers/Main/DaysButtonGroup";
import Main from "./Containers/Main";
import Additional from "./Containers/Additional";

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
                <Box sx={{width: 1, maxWidth: 'lg', display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                    <Main
                        forecastData={forecastData}
                        setSelectedDay={setSelectedDay}
                        selectedDay={selectedDay}/>
                    <Additional
                        day={forecastData?.forecast.forecastday[selectedDay]}
                    />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
