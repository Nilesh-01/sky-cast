import WeatherIcon from "../assets/WeatherIcon.png";
import Hum from "../assets/hum.png";
import WindDir from "../assets/wind-direction-icon.png";
import Cloud from "../assets/cloud.png";
import moment from "moment";

const WeatherDetails = ({ forecastData }) => {
  return (
    <div className="flex flex-col gap-[6px] flex-[2]">
      <img
        className="self-start w-[80px] h-[80px]"
        src={forecastData?.current?.condition?.icon}
      />
      <div className="font-bold text-md pb-4 ">
        {forecastData?.current?.condition?.text}
      </div>
      <div className="font-thin text-8xl pb-4 ">
        {forecastData?.current?.temp_c}{" "}
        <sup className="font-normal align-super text-3xl">°C</sup>
      </div>
      <div className="font-light text-3xl">
        {moment(forecastData?.location?.localtime).format("Do MMM YYYY")}
      </div>
      <div className="font-light text-xl pb-4">
        {moment(forecastData?.location?.localtime).format("dddd")} |{" "}
        {moment(forecastData?.location?.localtime).format("LT")}
      </div>
      <div className="flex gap-[16px]">
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
