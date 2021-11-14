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
import {ForecastResponse} from "./API/API_Response";
import DayButton from "./Components/DayButton";
import DetailCard from "./Containers/Main/DetailCard";
import DataTable from "./Containers/Additional/DataTable";
import DaysButtonGroup from "./Containers/Main/DaysButtonGroup";
import Main from "./Containers/Main";
import Additional from "./Containers/Additional";
import {blue} from "@mui/material/colors";

function App() {

    let theme = createTheme({
        typography: {
            fontSize: 12,
        },
        palette: {
            primary: {
                main: blue['500'],
                light: blue['100'],
                contrastText: '#FFFFFF'
            },
            background: {
                default: blue['100']
            }
        },
        shape: {
            borderRadius: 20
        }
    })
    theme = responsiveFontSizes(theme);

    const [selectedDay, setSelectedDay] = useState(0)

    const [forecastData, setForecastData] = useState<ForecastResponse | undefined>(undefined)

    useEffect(() => {
        setForecastData(API_Example)
    }, [])

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
                            selectedDay={selectedDay}/>
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
