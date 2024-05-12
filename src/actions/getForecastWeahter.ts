"use server"

interface props {
    lat: string,
    lon: string
}

export const getForecastWeather = async({ lat, lon }: props) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=40&units=metric&appid=${process.env.NEXT_APP_API_KEY}`);
    if(!res.ok){
        throw new Error("Error Fetching WeatherForecast data !!")
    }

    return res.json();
}