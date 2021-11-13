export interface ForecastResponse {
    location: Location
    current: {[key:string]: number | string | Condition}
    forecast: {
        forecastday: ForecastDay[]
    }
}

interface ForecastDay {
    date: string
    date_epoch: number
    day: {[key:string]: number | Condition}
    astro: stringObject
    hour: ForecastHour
}

interface ForecastHour {[key:string]: number | string | Condition}

interface Condition {
    text: string,
    icon: string,
    code: number
}

type stringObject = {[key:string]: string}

interface Location {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
}