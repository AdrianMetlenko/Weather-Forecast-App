import {Box, Paper, Typography} from "@mui/material";
import React from "react";
import DetailCard from "./Main/DetailCard";
import DaysButtonGroup from "./Main/DaysButtonGroup";
import {ForecastResponse} from "../API/API_Response";

function Main({forecastData, setSelectedDay, selectedDay}: {forecastData: ForecastResponse | undefined, setSelectedDay: any, selectedDay: number}) {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', flex: 1}}>
            <DetailCard day={forecastData?.forecast.forecastday[selectedDay]}/>
            <DaysButtonGroup days={forecastData?.forecast.forecastday} setSelectedDay={setSelectedDay}/>
        </Box>

    )
}

export default Main