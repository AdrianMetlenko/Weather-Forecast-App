import {Box, Paper, Typography} from "@mui/material";
import React from "react";
import DetailCard from "./Main/DetailCard";
import DaysButtonGroup from "./Main/DaysButtonGroup";
import {ForecastResponse} from "../API/API_Response";
import City from "./Main/City";

function Main({forecastData, setSelectedDay, selectedDay}: {forecastData: ForecastResponse | undefined, setSelectedDay: any, selectedDay: number}) {
    return (
        <>
            <City day={forecastData?.forecast.forecastday[selectedDay]}/>
            <DaysButtonGroup days={forecastData?.forecast.forecastday} setSelectedDay={setSelectedDay}/>
            <DetailCard day={forecastData?.forecast.forecastday[selectedDay]}/>
            </>

    )
}

export default Main