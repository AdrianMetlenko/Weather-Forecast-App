import {ForecastDay, ForecastHour} from "../../API/API_Response";
import { AxisOptions, Chart } from "react-charts";
import {useMemo, useState} from "react";
import HourToSeries from "../../Functions/HourToSeries";
import {Box} from "@mui/material";


function TabContent(day: ForecastDay, index: number, selectedDay: number) {

    // const primaryAxis = useMemo<AxisOptions<typeof data[number]["data"][number]>>(
    //     () => ({
    //         getValue: (datum) => datum.time,
    //     }),
    //     []
    // );
    //
    // const secondaryAxes = useMemo<
    //     AxisOptions<typeof data[number]["data"][number]>[]>(
    //     () => [
    //         {
    //             getValue: (datum) => datum.primary
    //         },
    //         {
    //             getValue: (datum) => datum.secondary
    //         }
    //     ],
    //     []
    // );

    type Series = {
        label: string,
        data: ForecastHour[]
    }

    const data: Series[] = []

    const testData = HourToSeries(day.hour)

    return (
        // <Chart
        //     options={{
        //         data,
        //         primaryAxis,
        //         secondaryAxes,
        //     }}
        // />
        <Box></Box>
    );
}

export default TabContent