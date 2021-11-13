import {ForecastHour} from "../API/API_Response";

function HourToSeries(hours: ForecastHour[]) {
    //defining all the series by extracting keys from first hour
    let series = ["temp_c", "wind_kph"]

    let data: any = {}
    series.forEach(attribute => {
        data[attribute] = {
            label: attribute,
            data: hours.map(hour => {
                return {
                    //primary axis is always the time
                    primary: hour.time_epoch,
                    secondary: hour[attribute]
                }
            })
        }
    })
    return data
}

export default HourToSeries