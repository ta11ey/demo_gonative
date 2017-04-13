import 'whatwg-fetch';

export const getWeatherHistory = (city) => {
  const daySeconds = 86400;
  const cityId = "Moab"
  const countryCode = "US"
  const today = new Date()

  let yesterday = today - 1000 * 60 * 60 * 24;
    yesterday = new Date(yesterday)
  const isoEnd = today.toISOString().toString();
  const isoStart = yesterday.toISOString().toString();

  const formattedEnd = isoEnd.slice(0, isoEnd.indexOf('T'));
  const formattedStart = isoStart.slice(0, isoStart.indexOf('T'));

  const url = `http://api.apixu.com/v1/history.json?key=48c8affa27e7481f86e192253171204&q=Moab&dt=${formattedStart}`

  return fetch(url, {
    method: 'get',
  }).then(res => {
    return res.json()
  })
}
