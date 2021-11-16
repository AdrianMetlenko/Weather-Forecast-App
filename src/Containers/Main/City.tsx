import {Autocomplete, Box, Paper, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {CityLocation, ForecastResponse} from "../../API/TS_API_Response";
import {getAutocomplete, getForecast} from "../../API/API_Get";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY

function City(
    {
        setForecastData,
        forecastData
    }: {
        setForecastData: any,
        forecastData: ForecastResponse | undefined
    }) {

    const [options, setOptions] = useState([]);

    return (
        <Paper sx={{m: 2, p: 2}} elevation={5}>
            {forecastData &&
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                m: 1,
                mb: 2,
                flexDirection: 'column'
            }}>
                <Typography sx={{ml: 2,}} variant={'h4'} id={'CityName'}>
                    {forecastData?.location.name}
                </Typography>
                <Typography sx={{ml: 2,}} variant={'h6'} id={'CityRegionCountry'}>
                    {forecastData?.location.region + ', ' + forecastData?.location.country}
                </Typography>
            </Box>
            }
            <Autocomplete
                id="city"
                freeSolo
                disabled={!apiKey}
                onChange={(event: any, newValue: any) => {
                    // typed: newValue
                    // selected from options: newValue.value
                    const value = newValue?.value ? newValue.value : newValue

                    if (apiKey && value) {
                        getForecast(apiKey, value)
                            .then(({body}) => {
                                setForecastData(body)
                            })
                    }
                }}
                options={options}
                filterOptions={(x) => x}
                onInputChange={(event, newInputValue) => {
                    if (newInputValue) {
                        if (apiKey) {
                            //TODO: Recommended to add debounce/throttle calls
                            getAutocomplete(apiKey, newInputValue)
                                .then(({body}) => {
                                    const apiOptions = body.map((location: CityLocation) => {
                                        return {value: location.name, label: location.name}
                                    })
                                    setOptions(apiOptions);
                                })
                        }
                    } else {
                        //clear options
                        //no need to make API call
                        setOptions([])
                    }
                }}
                renderInput={(params) => <TextField {...params} label="Select a new city..."/>}
            />
        </Paper>
    )
}

export default City