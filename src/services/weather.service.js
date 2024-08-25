import axios from "axios";

export const getWeatherCondition = async (lat, lon, API_key) => {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
  );
  console.log(data);
};
