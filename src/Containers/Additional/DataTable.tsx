import {Paper, Typography} from "@mui/material";
import React from "react";
import {ForecastDay} from "../../API/API_Response";

function DataTable({day}:{day: ForecastDay | undefined}){
    return(
        <Paper sx={{my: 2, width: 1, minHeight: 240}}>
            <Typography variant={'h4'}>Todays forcast data</Typography>
        </Paper>
    )
}

export default DataTable