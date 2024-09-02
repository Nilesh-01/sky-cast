import { useEffect, useState } from "react";
import DailyForecast from "../components/DailyForecast";
import MoreDetails from "../components/MoreDetails";
import WeatherDetails from "../components/WeatherDetails";
import {
  getAstronomyCondition,
  getForecastCondition,
} from "../services/weather.service";

const Home = () => {
  const [forecastData, setForecastData] = useState();
  const [astronomyData, setAstronomyData] = useState();

  const [city, setCity] = useState("Goa, India");
  const onSearch = (searchText) => {
    setCity(searchText);
    console.log(searchText);
  };

  const handleForecastData = async () => {
    const response = await getForecastCondition(city);
    setForecastData(response);
  };

  const handleAstronomyData = async () => {
    const response = await getAstronomyCondition(city);
    setAstronomyData(response);
  };

  console.log(forecastData);

  useEffect(() => {
    if (city) {
      handleForecastData();
      handleAstronomyData();
    }
  }, [city]);

  return (
    <div className="flex h-full">
      <div className="p-[32px] flex flex-col flex-[2]">
        <WeatherDetails forecastData={forecastData} />
        <DailyForecast />
      </div>
      <MoreDetails astronomyData={astronomyData} onSearch={onSearch} />
    </div>
  );
};

export default Home;
