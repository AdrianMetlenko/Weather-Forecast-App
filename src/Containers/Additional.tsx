import {Box, Paper, Typography} from "@mui/material";
import React from "react";
import {ForecastDay} from "../API/API_Response";
import DataGraph from "./Additional/DataGraph";
import DataTable from "./Additional/DataTable";

function Additional({day}:{day: ForecastDay | undefined}) {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', width: 1, flex: 2}}>
            <Box height={400 - 16} sx={{m: 1}}>
                <DataTable day={day}/>
            </Box>
            <Paper sx={{height: 400, p: 2}}>
                <Box height={400 - 16} sx={{m: 1}}>
                    <DataGraph day={day}/>
                </Box>
            </Paper>
        </Box>
    )
}

export default Additional