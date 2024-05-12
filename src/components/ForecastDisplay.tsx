import { HourlyForecastResponse } from "@/lib/type";
import ForecastItem from "./ForecastItem";
import ForecastHours from "./ForecastHours";

interface props {
  data: HourlyForecastResponse;
}

const ForecastDisplay = ({ data }: props) => {
  return (
    <div className="grow h-fit w-full flex flex-col xl:flex-row gap-10">
  
      <div className="min-h-fit flex-1 flex flex-col justify-between gap-3">
        <div className="flex  border-b py-1 mb-5 lg:mb-0">
          <h5 className="text-2xl text-muted-foreground font-light italic uppercase">5 days forecast</h5>
        </div>
        <div className="h-fit w-full flex flex-col lg:grid grid-cols-5 gap-3">
          <ForecastItem data={data.list[7]} />
          <ForecastItem data={data.list[15]} />
          <ForecastItem data={data.list[23]} />
          <ForecastItem data={data.list[31]} />
          <ForecastItem data={data.list[39]} />
        </div>
      </div>
      {/*--- END 5 DAYS FORECAST ---*/}
      
      <div className="min-h-fit flex flex-col justify-between gap-3">
        <div className="flex border-b py-1 mb-5 lg:mb-0">
          <h5 className="text-2xl text-muted-foreground font-light italic uppercase">3 hours forecast</h5>
        </div>
        <div className="h-fit w-full flex flex-col lg:grid grid-cols-3 gap-3">
          <ForecastHours data={data.list[0]} />
          <ForecastHours data={data.list[1]} />
          <ForecastHours data={data.list[2]} />
        </div>
        {/*--- END 3 DAYS FORECAST ---*/}
      </div>
    </div>
  );
};

export default ForecastDisplay;
