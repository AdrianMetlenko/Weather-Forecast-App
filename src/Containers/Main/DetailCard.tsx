import {Box, Paper, Typography} from "@mui/material";
import React from "react";
import {ForecastDay} from "../../API/API_Response";

function DetailCard({day}: {day: ForecastDay | undefined}){
    return(
        <Paper sx={{m: 2, minHeight: 240}} elevation={5}>
            <Typography variant={'h4'}>Todays forcast detail</Typography>
            <Typography variant={'h4'}>{day?.date}</Typography>
        </Paper>
    )
}

export default DetailCard