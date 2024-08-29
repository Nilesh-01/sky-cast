import { useEffect, useState } from "react";
import DailyForecast from "../components/DailyForecast";
import MoreDetails from "../components/MoreDetails";
import SearchInput from "../components/SearchInput";
import WeatherDetails from "../components/WeatherDetails";
import {
  getAstronomyCondition,
  getForecastCondition,
} from "../services/weather.service";

const Home = () => {
  const [forecastData, setForecastData] = useState();
  const [astronomyData, setAstronomyData] = useState();

  const handleForecastData = async () => {
    const response = await getForecastCondition();
    setForecastData(response);
  };

  const handleAstronomyData = async () => {
    const response = await getAstronomyCondition();
    setAstronomyData(response);
  };
  useEffect(() => {
    handleForecastData();
    handleAstronomyData();
  }, []);

  return (
    <div className="flex h-full">
      {/* <SearchInput /> */}
      {/* <button onClick={fetchWeatherData}>Get Data</button> */}
      <div className="p-[32px] flex flex-col flex-[2]">
        <WeatherDetails forecastData={forecastData} />
        <DailyForecast />
      </div>
      <MoreDetails astronomyData={astronomyData} />
    </div>
  );
};

export default Home;
