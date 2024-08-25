import DailyForecast from "../components/DailyForecast";
import MoreDetails from "../components/MoreDetails";
import SearchInput from "../components/SearchInput";
import WeatherDetails from "../components/WeatherDetails";
import { getWeatherCondition } from "../services/weather.service";

const Home = () => {
  console.log(process.env.REACT_APP_API_KEY);
  const fetchWeatherData = async () => {
    await getWeatherCondition(71, 49, process.env.REACT_APP_API_KEY);
  };
  return (
    <div className="flex h-full">
      {/* <SearchInput /> */}
      {/* <button onClick={fetchWeatherData}>Get Data</button> */}
      <div className="p-[32px] flex flex-col flex-[2]">
        <WeatherDetails />
        <DailyForecast />
      </div>
      <div className="flex-[1]">
        <MoreDetails />
      </div>
    </div>
  );
};

export default Home;
