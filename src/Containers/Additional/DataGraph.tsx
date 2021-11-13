import {ForecastDay, ForecastHour} from "../../API/API_Response";
import {AxisOptions, AxisTimeOptions, Chart} from "react-charts";
import {ReactChild, ReactFragment, ReactPortal, useMemo, useState} from "react";
import HourToSeries from "../../Functions/HourToSeries";
import {Box, Chip} from "@mui/material";
import {format} from "date-fns";
import {series} from "./API_Series";


type Series = {
    label: string,
    data: { [key: string]: number | string | Date }[]
}

function DataGraph({day}:{day: ForecastDay | undefined}) {

    const data = useMemo(
        (): Series[] | undefined => {
            if (day) {
                return Object.values(HourToSeries(day?.hour))
            } else {
                return undefined
            }
        },
        [day]
    )

    const primaryAxis = useMemo(
        (): AxisOptions<any> | undefined => {
            if (day) {
                return ({
                    getValue: datum => datum.primary,
                    scaleType: "localTime",
                    formatters: {
                        scale: (value) => format(new Date(value), "h aa")
                    },
                })
            } else {
                return undefined
            }
        },
        [day]
    )

    const secondaryAxes = useMemo(
        (): AxisOptions<any>[] | undefined => {
            if (day) {
                return [
                    {
                        getValue: datum => datum.secondary.value,
                        elementType: 'line',
                        //TODO: unable to access datum unit -> added to label instead
                        // formatters: {
                        //     tooltip: (value: any, test:any) => {
                        //         return `${value?.value} ${value?.unit} `
                        //     }
                        // },
                    },
                ]
            } else {
                return undefined
            }
        },
        [day]
    )

    console.log(primaryAxis, secondaryAxes, data)

    if (data && primaryAxis && secondaryAxes) {
        return (
            <Box sx={{width: 1, height: '100%'}}>
                <Box sx={{width: 1, height: '50px'}}>{series.map(item =>
                    <Chip label={item.label} variant="outlined" onClick={() => console.log(item.label)} sx={{m:1/3}}/>)}
                </Box>
                {/*<Box sx={{height: 'calc(100%-50px)'}}>*/}
                    <Chart
                        options={{
                            data,
                            primaryAxis,
                            secondaryAxes,
                        }}
                    />
                {/*</Box>*/}
            </Box>
        )
    } else {
        return (
            <Box>
                Loading...
            </Box>
        )
    }
}

export default DataGraph