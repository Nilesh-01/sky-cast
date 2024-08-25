import SearchInput from "../components/SearchInput";
import { getWeatherCondition } from "../services/weather.service";

const Home = () => {
  console.log(process.env.REACT_APP_API_KEY);
  const fetchWeatherData = async () => {
    await getWeatherCondition(71, 49, process.env.REACT_APP_API_KEY);
  };
  return (
    <div>
      <SearchInput />
      <button onClick={fetchWeatherData}>Get Data</button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
