import {ButtonGroup, Paper} from "@mui/material";
import DayButton from "../../Components/DayButton";
import React from "react";
import {ForecastDay} from "../../API/API_Response";

function DaysButtonGroup({days, setSelectedDay}: { days: ForecastDay[] | undefined, setSelectedDay: any }) {
    return (
        <Paper elevation={5} sx={{m: 2}}>
            {/*Using buttons instead of tabs as hooks cannot be created conditionally*/}
            <ButtonGroup sx={{display: {xs: 'none', md:'flex', lg: 'none'}}} variant="outlined" aria-label="outlined button group" fullWidth orientation="vertical">
                {days?.map((day, index) =>
                    DayButton(day, index, setSelectedDay)
                )}
            </ButtonGroup>
            <ButtonGroup sx={{display: {xs: 'flex', md: 'none', lg: 'flex'}}} variant="outlined" aria-label="outlined button group" fullWidth>
                {days?.map((day, index) =>
                    DayButton(day, index, setSelectedDay)
                )}
            </ButtonGroup>
        </Paper>
    )
}

export default DaysButtonGroup