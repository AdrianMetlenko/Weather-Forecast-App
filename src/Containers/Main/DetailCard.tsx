import {Box, Paper, Typography} from "@mui/material";
import React from "react";
import {ForecastDay} from "../../API/TS_API_Response";
import {Cloud, Opacity, Visibility, Warning} from "@mui/icons-material";
import DetailChip from "../../Components/DetailChip";
import Loading from "../../Components/Loading";

function DetailCard({day}: { day: ForecastDay | undefined }) {
    return (
        <Paper sx={{m: 2, p: 2}} elevation={5}>
            {day ?
                <Box>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', m: 1, mb: 2}}>
                        <Box sx={{flex: 1, justifyContent: 'flex-end', display: 'flex'}}>
                            <img alt='weather condition icon' src={day?.day.condition.icon} style={{height: '80px'}}/>
                        </Box>
                        <Typography sx={{ml: 2, flex: 2, textAlign: 'center'}} variant={'h4'}>
                            {day?.day.condition.text}
                        </Typography>
                        <Box sx={{flex: 1, justifyContent: 'flex-end', display: 'flex', flexDirection: 'column'}}>
                            <Typography sx={{ml: 2, flex: 2, textAlign: 'center'}} variant={'h5'}>
                                {day?.day.maxtemp_c + ' \u00B0C'}
                            </Typography>
                            <Typography sx={{ml: 2, flex: 2, textAlign: 'center'}} variant={'h6'}>
                                {day?.day.mintemp_c + ' \u00B0C'}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', m: 1}}>
                        {DetailChip(<Cloud/>, 'error', day?.day.maxwind_kph + ' km/h', 'Max. Wind Speed')}
                        {DetailChip(<Opacity/>, 'info', day?.day.totalprecip_mm + ' mm', 'Total Precipitation')}
                        {DetailChip(<Visibility/>, 'success', day?.day.avgvis_km + ' km', 'Avg. Visibility')}
                        {DetailChip(<Cloud/>, 'info', day?.day.avghumidity + ' %', 'Avg. Humidity')}
                        {DetailChip(<Opacity/>, 'info', day?.day.daily_chance_of_rain + ' %', 'Chance of Rain')}
                        {DetailChip(<Warning/>, 'warning', day?.day.uv + '', 'UV')}
                    </Box>
                </Box> : <Loading/>
            }
        </Paper>
    )
}

export default DetailCard