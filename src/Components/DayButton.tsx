import {Button, Typography} from "@mui/material";
import React from "react";
import {ForecastDay} from "../API/TS_API_Response";
import dayLabel from "../Functions/DayLabel";

function DayButton(day: ForecastDay, index: number, setSelectedDay: any, selectedDay: number){
    return(
        <Button disabled={index === selectedDay} variant={'contained'} key={index} sx={{flex: 1, width: 1, flexDirection: "column", display: 'flex'}} onClick={() => setSelectedDay(index)}>
            <img alt='weather condition icon' src={day.day.condition.icon}/>
            <Typography>
                {dayLabel(day.date, index)}
            </Typography>
        </Button>
    )
}

export default DayButton