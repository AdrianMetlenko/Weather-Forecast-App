import {ButtonGroup} from "@mui/material";
import DayButton from "../../Components/DayButton";
import React from "react";
import {ForecastDay} from "../../API/API_Response";

function DaysButtonGroup({days, setSelectedDay}: {days: ForecastDay[] | undefined, setSelectedDay: any}) {
    return (
        //Using buttons instead of tabs as hooks cannot be created conditionally
        <ButtonGroup variant="outlined" aria-label="outlined button group" fullWidth orientation="vertical">
            {days?.map((day, index) =>
                DayButton(day, index, setSelectedDay)
            )}
        </ButtonGroup>
    )
}

export default DaysButtonGroup