"use client";
import { useEffect, useState } from "react";
import {
  Droplets,
  ThermometerSnowflake,
  ThermometerSun,
  Wind,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { HourlyForecastData } from "@/lib/type";
import { Fullday } from "@/lib/constant";

interface props {
  data: HourlyForecastData;
}

const ForecastItem = ({ data }: props) => {
  const [icon, setIcon] = useState("/static/clouds.png");

  const date = new Date(data.dt_txt);
  const day = Fullday[date.getDay()];

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
    <Card className="w-full h-[200px] md:h-[220px] lg:h-[250px]  relative flex flex-col justify-center gap-4">
      <Badge className="absolute top-2 left-2 lg:-top-3 lg:left-1/2 lg:-translate-x-1/2 text-center text-nowrap">
        {data.weather[0].description}
      </Badge>
      <div className="flex lg:flex-col items-center justify-center gap-5">
        <div className="w-16 h-16 lg:w-[70px] lg:h-[70px] rounded-full ">
          <img
            className="w-full h-full object-cover"
            src={icon}
            alt="weather-icon"
          />
        </div>
        <div className="text-4xl lg:text-2xl font-light italic">
          {data.main.temp.toFixed(1) + "°C"}
        </div>
        <div className="text-xl font-bold">{day}</div>
      </div>

      <div className=" grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:flex lg:flex-col gap-3 place-items-center w-full">
        <div className="lg:hidden flex gap-x-2">
          <ThermometerSun />
          <div className="text-xl text-muted-foreground">
            : {data.main.temp_max.toFixed(1) + "°C"}
          </div>
        </div>
        <div className="lg:hidden flex gap-x-2">
          <ThermometerSnowflake />
          <div className="text-xl text-muted-foreground">
            : {data.main.temp_min.toFixed(1) + "°C"}
          </div>
        </div>
        <div className="lg:hidden flex gap-x-2">
          <Wind />
          <div className="text-xl text-muted-foreground">: {data.wind.speed + " Km/h"}</div>
        </div>
        <div className="lg:hidden flex gap-x-2">
          <Droplets />
          <div className="text-xl text-muted-foreground">: {data.main.humidity + "%"}</div>
        </div>
      </div>
    </Card>
  );
};

export default ForecastItem;
