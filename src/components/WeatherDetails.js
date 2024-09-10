import Hum from "../assets/hum.png";
import WindDir from "../assets/wind-direction-icon.png";
import Cloud from "../assets/cloud.png";
import moment from "moment";

const WeatherDetails = ({ forecastData }) => {
  return (
    <div className="flex flex-col gap-[6px] justify-between flex-[2]">
      <img
        className="self-start w-[100px] h-[100px]"
        src={forecastData?.current?.condition?.icon}
      />
      <div className="font-bold text-md pb-4 ">
        {forecastData?.current?.condition?.text}
      </div>
      <div className="font-thin text-6xl pb-4 ">
        {forecastData?.current?.temp_c}{" "}
        <sup className="font-normal align-super text-xl">°C</sup>
      </div>
      <div className="flex items-end gap-[16px]">
        <div className="font-light text-mb lg:text-3xl">
          {moment(forecastData?.location?.localtime).format("Do MMM YYYY")}
        </div>
        <div className="font-light text-mb lg:text-xl">
          {moment(forecastData?.location?.localtime).format("dddd")} |{" "}
          {moment(forecastData?.location?.localtime).format("LT")}
        </div>
      </div>
      <div className="flex gap-[16px] pb-[16px]">
        <div className="flex pr-4 border-r-2 gap-[8px]">
          <img className="self-start" src={WindDir} />
          <div>Wind {forecastData?.current?.wind_kph}km/h</div>
        </div>
        <div className="flex pr-4 border-r-2 gap-[8px]">
          <img className="self-start" src={Hum} />
          <div>Humidity {forecastData?.current?.humidity}%</div>
        </div>
        <div className="flex gap-[8px]">
          <img className="self-start" src={Cloud} />
          <div>Precipitation {forecastData?.current?.precip_mm}mm</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
