import { useEffect, useState } from "react";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import DailyForecast from "../components/DailyForecast";
import MoreDetails from "../components/MoreDetails";
import WeatherDetails from "../components/WeatherDetails";
import SearchInput from "../components/SearchInput";
import {
  getAstronomyCondition,
  getForecastCondition,
} from "../services/weather.service";
import ForecastCard from "../components/ForecastCard";

const Home = () => {
  const [showInputBox, setShowInputBox] = useState(false);
  const [forecastData, setForecastData] = useState();
  const [astronomyData, setAstronomyData] = useState();
  const [error, setError] = useState(false);

  const [city, setCity] = useState("Goa, India");
  const onSearch = (searchText) => {
    setCity(searchText);
    setError(false);
  };

  const handleForecastData = async () => {
    const response = await getForecastCondition(city);
    if (!response) {
      setError(true);
      return;
    }
    setForecastData(response);
    setShowInputBox(false);
  };

  const handleAstronomyData = async () => {
    const response = await getAstronomyCondition(city);
    if (!response) {
      setError(true);
      return;
    }
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
      <MoreDetails astronomyData={astronomyData} forecastData={forecastData}>
        <div className="h-[40px] mb-[60px]">
          {!showInputBox ? (
            <div className="flex gap-[6px]">
              <Location />
              <div className="font-light flex-1 text-3xl pl-4">{`${astronomyData?.location?.name}, ${astronomyData?.location?.country}`}</div>
              <Search onClick={() => setShowInputBox(true)} />
            </div>
          ) : (
            <SearchInput onSearch={onSearch} />
          )}
          {error && (
            <div className="text-sm text-red-500 pt-[4px]">
              City does not exist
            </div>
          )}
        </div>
      </MoreDetails>
    </div>
  );
};

export default Home;
