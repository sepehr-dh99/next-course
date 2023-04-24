import { useEffect, useState } from "react";

import axios from "axios";

import MainButton from "@/components/mainButton/mainButton";

import sunImage from "@/public/images/sun.png";
import WeatherStatus from "@/components/weatherStatus/weatherStatus";

const CityWeather = () => {
  const [cityName, setCityName] = useState("");
  const [cityWeather, setCityWeather] = useState();

  const getWeatherByCityName = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      );
      setCityWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="container">
      <h1>cod is: {cityWeather && cityWeather.cod}</h1>
      <input
        type="text"
        placeholder="city name"
        onChange={(e) => setCityName(e.target.value)}
      />
      <MainButton label="click me!" click={getWeatherByCityName} />
      {cityWeather ? (
        <WeatherStatus
          image={sunImage}
          title="آفتابی"
          value="22c"
          imageHeight="12px"
          imageWidth="12px"
        />
      ) : (
        <p>لطفا شهر مورد نظر را وارد کرده و ثبت کنید</p>
      )}
    </div>
  );
};

export default CityWeather;
