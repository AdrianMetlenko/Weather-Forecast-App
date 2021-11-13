import {ForecastDay, ForecastHour} from "../API/API_Response";

function HourToSeries(hours: ForecastHour[]) {
    //defining all the series by extracting keys from first hour
    let series = Object.keys(hours[0])
    console.log(series)

    let data: any = {}

    series.forEach(attribute => {
        data[attribute] = {
            label: attribute,
            data: hours.map(hour => {
                return {
                    primary: hour.time_epoch,
                    secondary: hour[attribute]
                }
            })
        }
    })

    console.log(data)
}

export default HourToSeries