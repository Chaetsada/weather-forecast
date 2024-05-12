"use server"
interface props {
    lat: string,
    lon: string
}

export const getAirPollution = async ({ lat, lon }: props) => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_APP_API_KEY}`);
    if(!res.ok){
        throw new Error("Failed to fetching air pollution data !!")
    }

    return res.json();
}