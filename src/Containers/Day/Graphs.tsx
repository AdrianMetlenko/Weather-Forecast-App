import {ForecastDay, ForecastHour} from "../../API/API_Response";
import {AxisOptions, Chart} from "react-charts";
import {useMemo, useState} from "react";
import HourToSeries from "../../Functions/HourToSeries";
import {Box} from "@mui/material";

type Series = {
    label: string,
    data: {[key: string]: number | string | Date}[]
}

function Graphs(day: ForecastDay | undefined) {

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
        (): AxisOptions<any> | undefined =>
        {
            if (day) {
                return ({
                    getValue: datum => datum.primary,
                })
            } else {
                return undefined
            }
        },
        [day]
    )

    const secondaryAxes = useMemo(
        (): AxisOptions<any>[] | undefined =>
        {
            if (day) {
                return [
                    {
                        getValue: datum => datum.secondary,
                    },
                ]
            } else {
                return undefined
            }
        },
        [day]
    )

    if (data && primaryAxis && secondaryAxes) {
        return (
            <Chart
                options={{
                    data,
                    primaryAxis,
                    secondaryAxes,
                }}
            />
        )
    } else {
        return (
            <Box>
                Loading...
            </Box>
        )
    }
}

export default Graphs