import {Button, Typography} from "@mui/material";
import React from "react";
import {ForecastDay} from "../API/API_Response";
import dayLabel from "../Functions/DayLabel";

function DayTab(day: ForecastDay, index: number, setSelectedDay: any){
    return(
        <Button variant={'contained'} key={index} sx={{flex: 1, width: 1}} onClick={() => setSelectedDay(index)}>
            <img src={day.day.condition.icon}/>
            <Typography>
                {dayLabel(day.date, index)}
            </Typography>
        </Button>
    )
}

export default DayTab