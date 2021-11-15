import React, {useEffect, useState} from 'react';
import {
    Box,
    createTheme,
    Paper,
    responsiveFontSizes,
    Tab, Tabs,
    ThemeProvider,
    Typography,
    ButtonGroup, alpha
} from "@mui/material";
import DataGraph from "./Containers/Additional/DataGraph";
import API_Example from "./API/API_Example.json"
import {ForecastResponse} from "./API/TS_API_Response";
import DayButton from "./Components/DayButton";
import DetailCard from "./Containers/Main/DetailCard";
import DataTable from "./Containers/Additional/DataTable";
import DaysButtonGroup from "./Containers/Main/DaysButtonGroup";
import Main from "./Containers/Main";
import Additional from "./Containers/Additional";
import {blue} from "@mui/material/colors";
import themeConfig from "./Theme";
import {getForecast} from "./API/API_Get";

function App() {

    let theme = themeConfig
    theme = responsiveFontSizes(theme);

    const [selectedDay, setSelectedDay] = useState(0)
    const [forecastData, setForecastData] = useState<ForecastResponse | undefined>(undefined)
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY

    useEffect(() => {
        //initially loading as 'Sydney' location
        if(apiKey){
            getForecast(apiKey, 'Sydney')
                .then(({body}) => {
                    setForecastData(body)
                })
        }
    }, [apiKey])

    const windowPadding = 3
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                bgcolor: "background.default",
                display: 'flex',
                minHeight: `calc(100vh - ${windowPadding * 2 * 8}px)`, //3 padding, 8 theme size multiplier, 2 top + bottom
                flexDirection: 'column',
                alignItems: 'center',
                p: windowPadding,
            }}>
                <Typography variant={'h2'} color={'primary.dark'} sx={{mb: 3}}>Weather Forecast</Typography>
                <Box sx={{width: 1, maxWidth: 'xl', display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', flex: 1, width: 1}}>
                        <Main
                            forecastData={forecastData}
                            setSelectedDay={setSelectedDay}
                            selectedDay={selectedDay}
                            setForecastData={setForecastData}
                        />
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Additional
                            day={forecastData?.forecast.forecastday[selectedDay]}
                        />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
