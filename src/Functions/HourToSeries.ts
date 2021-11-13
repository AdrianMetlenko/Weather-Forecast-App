import {ForecastHour} from "../API/API_Response";
import {series} from "../Containers/Additional/API_Series";

function HourToSeries(hours: ForecastHour[]) {
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

export default HourToSeries