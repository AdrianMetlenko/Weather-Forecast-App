const root = 'http://api.weatherapi.com/v1/'

async function fetchGet(url: string){
    let response: any
    let responseData: any = {}
    try {
        response = await fetch(url)
        responseData = await response.json()
        if (!response?.ok) {
            console.error(responseData)
        }
    } catch (e) {
        console.error(e)
    }
    return {code: response?.status, text: response?.statusText, body: responseData}
}

export async function getForecast(apiKey: string, city: string){
    const url = root + `forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`
    return fetchGet(url)
}

export async function getAutocomplete(apiKey: string, city: string){
    const url = root + `search.json?key=${apiKey}&q=${city}`
    return fetchGet(url)
}