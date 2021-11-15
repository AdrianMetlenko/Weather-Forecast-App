import hourToSeries from "./HourToSeries";
import {series} from "../Containers/Additional/API_Series";

test('all attributes mapped to series', () => {
    console.log(Object.keys(hourToSeries(testHours)))
    expect(Object.keys(hourToSeries(testHours)).length).toEqual(series.length)
    expect(Object.keys(hourToSeries(testHours))).toMatchObject(series.map(item => item.api_key))
});

test('single series contains correct quantity of points', () => {
    expect(Object.values(hourToSeries(testHours))[0].data.length).toEqual(testHours.length)
});

test('selected series contains correctly mapped data', () => {
    const testData = hourToSeries(testHours)['temp_c'].data
    expect(testData[0].secondary.value).toEqual(10.6)
    expect(testData[1].secondary.value).toEqual(8.7)
});

const testHours = [
    {
        "time_epoch": 1636934400,
        "time": "2021-11-15 00:00",
        "temp_c": 10.6,
        "temp_f": 51.1,
        "is_day": 0,
        "condition": {
            "text": "Patchy rain possible",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
            "code": 1063
        },
        "wind_mph": 3.4,
        "wind_kph": 5.4,
        "wind_degree": 18,
        "wind_dir": "NNE",
        "pressure_mb": 1026.0,
        "pressure_in": 30.3,
        "precip_mm": 0.1,
        "precip_in": 0.0,
        "humidity": 82,
        "cloud": 78,
        "feelslike_c": 10.3,
        "feelslike_f": 50.5,
        "windchill_c": 10.3,
        "windchill_f": 50.5,
        "heatindex_c": 10.6,
        "heatindex_f": 51.1,
        "dewpoint_c": 7.6,
        "dewpoint_f": 45.7,
        "will_it_rain": 0,
        "chance_of_rain": 63,
        "will_it_snow": 0,
        "chance_of_snow": 0,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "gust_mph": 5.4,
        "gust_kph": 8.6,
        "uv": 1.0
    },
    {
        "time_epoch": 1637017200,
        "time": "2021-11-15 23:00",
        "temp_c": 8.7,
        "temp_f": 47.7,
        "is_day": 0,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
            "code": 1003
        },
        "wind_mph": 2.9,
        "wind_kph": 4.7,
        "wind_degree": 353,
        "wind_dir": "N",
        "pressure_mb": 1027.0,
        "pressure_in": 30.32,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 89,
        "cloud": 33,
        "feelslike_c": 8.4,
        "feelslike_f": 47.1,
        "windchill_c": 8.4,
        "windchill_f": 47.1,
        "heatindex_c": 8.7,
        "heatindex_f": 47.7,
        "dewpoint_c": 7.0,
        "dewpoint_f": 44.6,
        "will_it_rain": 0,
        "chance_of_rain": 0,
        "will_it_snow": 0,
        "chance_of_snow": 0,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "gust_mph": 4.3,
        "gust_kph": 6.8,
        "uv": 1.0
    }
]