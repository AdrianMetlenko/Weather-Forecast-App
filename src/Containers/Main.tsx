import React from "react";
import DetailCard from "./Main/DetailCard";
import DaysButtonGroup from "./Main/DaysButtonGroup";
import {ForecastResponse} from "../API/TS_API_Response";
import CitySelect from "./Main/City";

function Main({forecastData, setSelectedDay, selectedDay, setForecastData}: {forecastData: ForecastResponse | undefined, setSelectedDay: any, selectedDay: number, setForecastData: any}) {
    return (
        <>
            <CitySelect setForecastData={setForecastData} forecastData={forecastData}/>
            <DaysButtonGroup selectedDay={selectedDay} days={forecastData?.forecast.forecastday} setSelectedDay={setSelectedDay}/>
            <DetailCard day={forecastData?.forecast.forecastday[selectedDay]}/>
            </>

    )
}

export default Main