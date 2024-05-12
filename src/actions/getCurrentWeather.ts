"use server"

interface props {
    lat: string,
    lon: string,
}

export const getCurrentWeather = async({ lat, lon }: props) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${process.env.NEXT_APP_API_KEY}`);
    if(!res.ok){
        throw new Error("Error Fetching current weather data!!")
    }

    return res.json();
}