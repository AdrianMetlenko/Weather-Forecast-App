import {ForecastDay, ForecastHour} from "../../API/API_Response";
import {AxisOptions, AxisTimeOptions, Chart} from "react-charts";
import {ReactChild, ReactFragment, ReactPortal, useMemo, useState} from "react";
import HourToSeries from "../../Functions/HourToSeries";
import {Box, Chip, Paper} from "@mui/material";
import {format} from "date-fns";
import {series} from "./API_Series";


type Series = {
    label: string,
    data: { [key: string]: number | string | Date }[]
}

function DataGraph({day}: { day: ForecastDay | undefined }) {

    //state value for which attributes to show in graph
    //2 included as defaults
    const [showAttribute, setShowAttribute] = useState(['temp_c', 'wind_kph'])

    const data = useMemo(
        (): Series[] | undefined => {
            if (day) {
                const allTransformedAttributes = HourToSeries(day?.hour)
                //filtering all attribute series to only the "showAttributes"
                return Object.entries(allTransformedAttributes).filter(([key,]) => showAttribute.includes(key)).map(([, value]) => value)
            } else {
                return undefined
            }
        },
        [day, showAttribute]
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
                        //unable to access datum unit -> added to label instead
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

    if (data && primaryAxis && secondaryAxes) {
        return (
            <Box sx={{m: 2, maxWidth: {xs: `calc(100vw - ${5 * 8 * 2}px)`, md: '600px', lg: '800px', xl: '1000px'}}}>
                <Box sx={{px: 3, py: 1}}>
                    {series.map(item =>
                        //disabling last chip, as graph must always contain at least one series
                        <Chip color={'primary'}
                              disabled={showAttribute.includes(item.api_key) && showAttribute.length === 1}
                              variant={showAttribute.includes(item.api_key) ? undefined : 'outlined'}
                              label={item.label} onClick={() => {
                            if (showAttribute.includes(item.api_key)) {
                                //remove
                                setShowAttribute(val => ([...val.filter(v => v !== item.api_key)]))
                            } else {
                                //add
                                setShowAttribute(val => ([...val, item.api_key]))
                            }
                        }
                        } sx={{m: 1 / 2, p: 1 / 2, fontSize: '0.9rem'}}/>)}
                </Box>
                <Paper elevation={5} sx={{p:3}}>
                    <Box sx={{height: '100%', minHeight: 250}}>
                        {/*<Box sx={{m:1}}>*/}
                        <Chart
                            options={{
                                data,
                                primaryAxis,
                                secondaryAxes,
                            }}
                        />
                        {/*</Box>*/}
                    </Box>
                </Paper>
            </Box>
        )
    } else {
        return (
            <Box sx={{m: 2}}>
                Loading...
            </Box>
        )
    }
}

export default DataGraph