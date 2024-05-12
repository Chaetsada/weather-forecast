"use client";
import { useEffect, useState } from "react";
import { AirPollution, currentWeatherData } from "@/lib/type";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import {
  Droplet,
  Eye,
  HeartPulse,
  Sunrise,
  Sunset,
  ThermometerSun,
  Waves,
  Wind,
  ThermometerSnowflake,
} from "lucide-react";
import { convertUnixTimeStamp } from "@/lib/utils";

interface props {
  data: currentWeatherData;
  pollution: AirPollution;
}

const MainDisplay = ({ data, pollution }: props) => {
  const [icon, setIcon] = useState("/static/clouds.png");
  const sunRiseTime = convertUnixTimeStamp(data.sys.sunrise);
  const sunSetTime = convertUnixTimeStamp(data.sys.sunset);

  useEffect(() => {
    if (data.weather[0].main == "Clouds") {
      setIcon("/static/clouds.png");
    }
    if (data.weather[0].main == "Clear") {
      setIcon("/static/clear.png");
    }
    if (data.weather[0].main == "Drizzle") {
      setIcon("/static/drizzle.png");
    }
    if (data.weather[0].main == "Mist") {
      setIcon("/static/mist.png");
    }
    if (data.weather[0].main == "Snow") {
      setIcon("/static/snow.png");
    }
    if (data.weather[0].main == "Rain") {
      setIcon("/static/rain.png");
    }
  }, [data]);

  return (
    <div className="h-fit lg:h-[400px] w-full grid grid-cols-12 grid-rows-18 lg:grid-row-12 gap-3">
      <div className="col-span-12 row-span-8 lg:row-span-12 lg:col-span-6 grid grid-cols-3 grid-rows-3 md:grid-rows-4 gap-3 ">
        <div className="col-span-3 row-span-1 md:row-span-2 flex flex-col items-center justify-center lg:items-start lg:justify-end py-5">
          <p className="text-xl text-muted-foreground italic">FORECAST IN</p>
          <div className="text-3xl lg:text-5xl font-semibold">
            {data.name},{data.sys.country}
          </div>
        </div>
        <div className="col-span-3 row-span-2 flex flex-col md:flex-row gap-3">
          <Card className="h-[240px] md:h-[200px] lg:h-full md:flex-1 relative flex items-center justify-around">
            <Badge className="absolute top-3 left-3">
              {data.weather[0].description}
            </Badge>
            <div className="relative">
              <img
                className="w-[140px] h-[140px] animate-pulse"
                src={icon}
                alt="weather-icon"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-5xl font-bold italic ">
                {data.main.temp.toFixed(1) + "°C"}
              </div>
              <div className="flex gap-3">
                <div className="flex gap-x-2">
                  <ThermometerSun />
                  <div className="font-semibold ">
                    : {data.main.temp_max.toFixed(1) + "°C"}
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <ThermometerSnowflake />
                  <div className="font-semibold ">
                    : {data.main.temp_min.toFixed(1) + "°C"}
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="h-[70px] md:h-[200px] lg:h-auto w-full lg:w-[200px] md:flex-1 lg:flex-none relative flex justify-center items-center">
            <Badge className="absolute top-3 left-3">Feel's like</Badge>
            <div className="flex lg:flex-col items-center gap-3">
              <Waves className="w-8 h-8 lg:w-12 lg:h-12 animate-pulse" />
              <div className="text-2xl lg:text-3xl font-semibold">
                {data.main.feels_like.toFixed(1) + "°C"}
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/*--- LOCATION, MAIN TEMPERATUREM & FEEL'S LIKE ---*/}

      <div className="col-span-12 row-span-8 lg:row-span-12 lg:col-span-4 flex flex-col md:grid md:grid-cols-2 gap-3">
        <Card className="h-[70px] md:h-[200px] lg:h-auto relative flex justify-center items-center">
          <Badge className="absolute top-3 left-3">Wind speed</Badge>
          <div className="flex lg:flex-col items-center gap-3">
            <Wind className="w-8 h-8 lg:w-12 lg:h-12 animate-pulse" />
            <div className="text-2xl lg:text-3xl font-semibold">
              {data.wind.speed + " Km/h"}
            </div>
          </div>
        </Card>
        <Card className="h-[70px] md:h-[200px] lg:h-auto relative flex justify-center items-center">
          <Badge className="absolute top-3 left-3">Humidity</Badge>
          <div className="flex lg:flex-col items-center gap-3">
            <Droplet className="w-8 h-8 lg:w-12 lg:h-12 animate-pulse" />
            <div className="text-2xl lg:text-3xl font-semibold">
              {data.main.humidity + "%"}
            </div>
          </div>
        </Card>
        <Card className="h-[70px] md:h-[200px] lg:h-auto relative flex justify-center items-center">
          <Badge className="absolute top-3 left-3">Air qulity index</Badge>
          <div className="flex lg:flex-col items-center gap-3">
            <HeartPulse className="w-8 h-8 lg:w-12 lg:h-12 animate-pulse" />
            <div className="text-2xl lg:text-3xl font-semibold">
              {pollution.list[0].main.aqi + " AQI"}
            </div>
          </div>
        </Card>
        <Card className="h-[70px] md:h-[200px] lg:h-auto relative flex justify-center items-center">
          <Badge className="absolute top-3 left-3">Visibility</Badge>
          <div className="flex lg:flex-col items-center gap-3">
            <Eye className="w-8 h-8 lg:w-12 lg:h-12 animate-pulse" />
            <div className="text-2xl lg:text-3xl font-semibold">
              {data.visibility / 1000 + " Km"}
            </div>
          </div>
        </Card>
      </div>
      {/*--- WINSPEED, HUMIDITY, AIR QUALITY & VISIBILITY ---*/}

      <div className="col-span-12 row-span-2 lg:row-span-12 lg:col-span-2">
        <Card className="h-[180px] lg:h-full w-full relative flex lg:flex-col items-center justify-evenly ">
          <Badge className="absolute top-3 left-3">Sunrise & sunset</Badge>
          <div className="flex flex-col items-center">
            <Sunrise className="w-8 h-8 lg:w-12 lg:h-12" />
            <div className="text-xl font-semibold">{sunRiseTime}</div>
          </div>
          <div className="w-[2px] h-[80px] bg-muted" />
          <div className="flex flex-col items-center">
            <Sunset className="w-8 h-8 lg:w-12 lg:h-12" />
            <div className="text-xl font-semibold">{sunSetTime}</div>
          </div>
        </Card>
      </div>
      {/*--- SUNRISE & SUNSET ---*/}
    </div>
  );
};

export default MainDisplay;
