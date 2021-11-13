import {Tab} from "@mui/material";
import React from "react";
import {ForecastDay} from "../../API/API_Response";
import dayLabel from "../../Functions/DayLabel";

function addProps(index: number) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

function DayTab(day: ForecastDay, index: number){
    return(
        <Tab label={dayLabel(day.date, index)} icon={<img src={day.day.condition.icon}/>} {...addProps(index)} />
    )
}

export default DayTab