import WeatherIcon from "../assets/WeatherIcon.png";
import Hum from "../assets/hum.png";
import WindDir from "../assets/wind-direction-icon.png";
import Cloud from "../assets/cloud.png";

const WeatherDetails = () => {
  return (
    <div className="flex flex-col gap-[6px] flex-[2]">
      <img className="self-start" src={WeatherIcon} />
      <div className="font-thin text-8xl pb-4 ">
        27 <sup className="font-normal align-super text-3xl">°C</sup>
      </div>
      <div className="font-light text-3xl">
        28 <sup className="align-super text-sm">th</sup> June '24
      </div>
      <div className="font-light text-xl pb-4">Thursday | 2:45 am</div>
      <div className="flex gap-[16px]">
        <div className="flex pr-4 border-r-2 gap-[8px]">
          <img className="self-start" src={WindDir} />
          <div>Wind 10 km/h </div>
        </div>
        <div className="flex pr-4 border-r-2 gap-[8px]">
          <img className="self-start" src={Hum} />
          <div>Humidity 54%</div>
        </div>
        <div className="flex gap-[8px]">
          <img className="self-start" src={Cloud} />
          <div>Rain 0.2%</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
