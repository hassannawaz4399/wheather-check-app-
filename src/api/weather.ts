const baseUrl = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherData = async (
  city: string | { lat: number; lng: number }
) => {
  let url = `${baseUrl}/weather?q=${city}&appid=20571ab45c74dc2a1897b60c5b8047a1`;

  if (typeof city === "object") {
    url = `${baseUrl}/weather?lat=${city.lat}&lon=${city.lng}&appid=20571ab45c74dc2a1897b60c5b8047a1`;
  }
  return await (await fetch(url)).json();
};

export const fetchExtendedForecastData = async (
  city: string | { lat: number; lng: number }
) => {
  let url = `${baseUrl}/forecast/daily?q=${city}&appid=20571ab45c74dc2a1897b60c5b8047a1`;

  if (typeof city === "object") {
    url = `${baseUrl}/forecast/daily?lat=${city.lat}&lon=${city.lng}&appid=20571ab45c74dc2a1897b60c5b8047a1`;
  }

  return await (await fetch(url)).json();
};
