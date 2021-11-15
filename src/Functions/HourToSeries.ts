import {ForecastHour} from "../API/TS_API_Response";
import {series} from "../Containers/Additional/API_Series";

function hourToSeries(hours: ForecastHour[]): {[key:string]: {data: any[], label: string}}  {
    let data: any = {}
    series.forEach(attribute => {
        data[attribute.api_key] = {
            label: attribute.label + `  ${attribute.unit}`,
            data: hours.map(hour => {
                const {unit, ...attributes} = attribute
                return {
                    //primary axis is always the time
                    primary: new Date(hour.time),
                    secondary: {
                        value: hour[attribute.api_key],
                        unit: unit
                    },
                    ...attributes

                }
            })
        }
    })
    return data
}

export default hourToSeries