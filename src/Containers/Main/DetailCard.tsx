import {Paper, Typography} from "@mui/material";
import React from "react";
import {ForecastDay} from "../../API/API_Response";

function DetailCard({day}: {day: ForecastDay | undefined}){
    return(
        <Paper sx={{my: 2, width: 1, minHeight: 240}}>
            <Typography variant={'h4'}>Todays forcast detail</Typography>
            <Typography variant={'h4'}>{day?.date}</Typography>
        </Paper>
    )
}

export default DetailCard