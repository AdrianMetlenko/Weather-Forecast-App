import {Box, Chip, Paper, Typography} from "@mui/material";
import React from "react";
import {ForecastDay} from "../../API/API_Response";
import {Cloud, Opacity, Thermostat, Visibility} from "@mui/icons-material";
import DetailChip from "../../Components/DetailChip";

function DetailCard({day}: { day: ForecastDay | undefined }) {
    return (
        <Paper sx={{m: 2, p: 2}} elevation={5}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', m: 1, mb: 2}}>
                <img src={day?.day.condition.icon} style={{height: '80px'}}/>
                <Typography sx={{ml: 2,}} variant={'h5'}>{day?.day.condition.text}</Typography>
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', m:1}}>
                {DetailChip(<Thermostat/>, 'error', day?.day.maxtemp_c + ' \u00B0C', 'Max. Temp.')}
                {DetailChip(<Thermostat/>, 'success', day?.day.avgtemp_c + ' \u00B0C', 'Avg. Temp.')}
                {DetailChip(<Thermostat/>, 'info', day?.day.mintemp_c + ' \u00B0C', 'Min. Temp.')}
                {DetailChip(<Cloud/>, 'error', day?.day.maxwind_kph + ' km/h', 'Max. Wind Speed')}
                {DetailChip(<Opacity/>, 'info', day?.day.totalprecip_mm + ' mm', 'Total Precipitation')}
                {DetailChip(<Visibility/>, 'success', day?.day.avgvis_km + ' km', 'Avg. Visibility')}
                {DetailChip(<Cloud/>, 'info', day?.day.avghumidity + ' %', 'Avg. Humidity')}
                {DetailChip(<Opacity/>, 'info', day?.day.daily_chance_of_rain + ' %', 'Chance of Rain')}
                {DetailChip(<Opacity/>, 'warning', day?.day.uv + '', 'UV')}
            </Box>
        </Paper>
    )
}

export default DetailCard