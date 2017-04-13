export const wasThereRain = (weather) =>{
  return weather.day.totalprecip_mm > .2;
}
