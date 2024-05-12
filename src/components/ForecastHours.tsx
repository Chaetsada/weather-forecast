"use client";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { HourlyForecastData } from "@/lib/type";
import { handleTimeFormat } from "@/lib/utils";

interface props {
  data: HourlyForecastData;
}

const Forecast = ({ data }: props) => {
  const [icon, setIcon] = useState("/static/clouds.png");

  const dt = new Date(data.dt_txt);
  const new_dt = handleTimeFormat(dt)

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
    <Card className="w-full h-[80px] lg:h-[250px] lg:min-w-[120px]  relative flex lg:flex-col items-center justify-around lg:justify-center gap-5 ">
      <Badge className="absolute top-2 left-2 lg:-top-3 lg:left-1/2 lg:-translate-x-1/2 text-center text-nowrap">
        {data.weather[0].description}
      </Badge>
      <div className="flex lg:flex-col items-center justify-center gap-x-10 ">
        <div className="w-16 h-16 lg:w-[70px] lg:h-[70px] rounded-full ">
          <img
            className="w-full h-full object-cover"
            src={icon}
            alt="weather-icon"
          />
        </div>
        <div className="text-xl lg:text-2xl  font-light italic">
          {data.main.temp.toFixed(1) + "°C"}
        </div>
      </div>

      <div className="text-xl flex justify-center font-bold">
        {new_dt}
      </div>
    </Card>
  );
};

export default Forecast;
