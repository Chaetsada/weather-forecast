import { getAirPollution } from "@/actions/getAirPollution";
import { getCurrentWeather } from "@/actions/getCurrentWeather";
import { getForecastWeather } from "@/actions/getForecastWeahter";
import ForecastDisplay from "@/components/ForecastDisplay";
import Header from "@/components/Header";
import MainDisplay from "@/components/MainDisplay";
import { Card } from "@/components/ui/card";
import { DEFAULT_LOCATION } from "@/config";

export default async function Home() {
  const { lat, lon } = DEFAULT_LOCATION.coord;

  let CurrentWeatherReq = await getCurrentWeather({ lat, lon });
  let ForecastWeatherReq = await getForecastWeather({ lat, lon });
  let AirPollutionReq = await getAirPollution({ lat, lon });

  return (
    <main className="min-h-screen w-screen ">
      <div className="min-h-fit lg:h-screen max-w-[1280px] m-auto  flex items-center">
        <Card className="h-fit  lg:h-[850px] w-full p-5 flex flex-col gap-3 ">
          <Header />
          <MainDisplay data={CurrentWeatherReq} pollution={AirPollutionReq} />
          <ForecastDisplay data={ForecastWeatherReq} />
        </Card>
      </div>
    </main>
  );
}
