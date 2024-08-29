import axios from "axios";

export const getAstronomyCondition = async (searchText = "Goa, India") => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/astronomy.json",
    params: { q: searchText },
    headers: {
      "x-rapidapi-key": "24d94b6d2amshe5e88f27e41ae07p18ffd1jsnd050f7182422",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getForecastCondition = async (searchText = "Goa, India") => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: searchText,
      days: "7",
    },
    headers: {
      "x-rapidapi-key": "24d94b6d2amshe5e88f27e41ae07p18ffd1jsnd050f7182422",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
