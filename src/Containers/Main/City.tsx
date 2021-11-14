import {Autocomplete, Box, Paper, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {ForecastDay} from "../../API/API_Response";

function DetailCard({day}: {day: ForecastDay | undefined}){
    const [city, setCity] = useState(undefined)

    return(
        <Paper sx={{m: 2, p: 2}} elevation={5}>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={[].map((option) => option)}
                renderInput={(params) => <TextField {...params} label="freeSolo" />}
            />
        </Paper>
    )
}

export default DetailCard