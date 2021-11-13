export interface ForecastResponse {
    location: Location
    current: {
        condition: Condition
        [key:string]: number | string | Condition
    }
    forecast: {
        forecastday: ForecastDay[]
    }
}

export interface ForecastDay {
    date: string
    date_epoch: number
    day: {
        condition: Condition
        [key:string]: number | Condition
    }
    astro: stringObject
    hour: ForecastHour[]
}

export interface ForecastHour {
    condition: Condition
    time: string
    [key:string]: number | string | Condition
}

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