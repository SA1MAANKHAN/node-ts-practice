import axios from "axios";

export async function getWeatherInfo(city: string) {
  const data = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=94d1cfec0e1b48d0afb122227220903&q=${city}&aqi=no`
  );

  return data.data;
}
