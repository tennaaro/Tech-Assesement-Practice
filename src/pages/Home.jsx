import React, { useEffect, useState } from "react";
import Weather from "../components/Weather";

const Home = (props) => {
  const API_KEY = `${process.env.REACT_APP_API_KEY}`;
  const [response, setResponse] = useState([]);
  var axios = require("axios").default;

  // var options = {
  //   method: "GET",
  //   url: "https://community-open-weather-map.p.rapidapi.com/forecast/daily",
  //   params: {
  //     q: "san francisco,us",
  //     lat: "35",
  //     lon: "139",
  //     cnt: "10",
  //     units: "metric or imperial",
  //   },
  //   headers: {
  //     "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
  //     "x-rapidapi-key": API_KEY,
  //   },
  // };

  // useEffect(() => {
  //   axios
  //     .request(options)
  //     .then((response) => {
  //       console.log(response.data.list);
  //       setResponse(response.data.list);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  // let days = response.slice(0, 4)
  // console.log(days)
  let days = [
    {
      dt: 1644177600,
      sunrise: 1644160144,
      sunset: 1644197911,
      temp: {
        day: 290.02,
        min: 282.77,
        max: 290.76,
        night: 285.26,
        eve: 287.39,
        morn: 283.12,
      },
      feels_like: {
        day: 289.12,
        night: 284.09,
        eve: 286.2,
        morn: 281.59,
      },
      pressure: 1023,
      humidity: 52,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "sky is clear",
          icon: "01d",
        },
      ],
      speed: 3.74,
      deg: 24,
      gust: 5.71,
      clouds: 0,
      pop: 0,
    }
  ];

  let dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let date = new Date(Number(days[0].dt) * 1000).getDay()
  console.log(dates[date])

  const mappedDays = days.map((day, index) => {
    return (
      <Weather
        key = {index}
        day = {dates[new Date(Number(day.dt) * 1000).getDay()]}
        icon = {day.weather[0].icon}
        max = {day.temp.max}
        min = {day.temp.min}
      />
    )
  })


  // const topStocksResults = days.map((item, index) => {
  //   return (
  //     <p
  //       key={index}
  //       time = {new Date(Number(item.dt) * 1000).toLocaleDateString()}

  //     />
  //   );
  // });

  return (
    <section id="home" className="page">
      <h1 className="home-title">
        Top 10 on <span>Wealthify</span>
      </h1>
      <div id='weather'>{mappedDays}</div>
    </section>
  );
};

export default Home;

// [
//   {
//       "dt": 1644177600,
//       "sunrise": 1644160144,
//       "sunset": 1644197911,
//       "temp": {
//           "day": 290.02,
//           "min": 282.77,
//           "max": 290.76,
//           "night": 285.26,
//           "eve": 287.39,
//           "morn": 283.12
//       },
//       "feels_like": {
//           "day": 289.12,
//           "night": 284.09,
//           "eve": 286.2,
//           "morn": 281.59
//       },
//       "pressure": 1023,
//       "humidity": 52,
//       "weather": [
//           {
//               "id": 800,
//               "main": "Clear",
//               "description": "sky is clear",
//               "icon": "01d"
//           }
//       ],
//       "speed": 3.74,
//       "deg": 24,
//       "gust": 5.71,
//       "clouds": 0,
//       "pop": 0
//   },
//   {
//       "dt": 1644264000,
//       "sunrise": 1644246485,
//       "sunset": 1644284378,
//       "temp": {
//           "day": 288.16,
//           "min": 283.14,
//           "max": 290.06,
//           "night": 285.66,
//           "eve": 287.91,
//           "morn": 283.36
//       },
//       "feels_like": {
//           "day": 287.07,
//           "night": 284.74,
//           "eve": 286.98,
//           "morn": 282.19
//       },
//       "pressure": 1028,
//       "humidity": 52,
//       "weather": [
//           {
//               "id": 800,
//               "main": "Clear",
//               "description": "sky is clear",
//               "icon": "01d"
//           }
//       ],
//       "speed": 3.37,
//       "deg": 36,
//       "gust": 4.52,
//       "clouds": 0,
//       "pop": 0
//   },
//   {
//       "dt": 1644350400,
//       "sunrise": 1644332824,
//       "sunset": 1644370845,
//       "temp": {
//           "day": 289.46,
//           "min": 284.09,
//           "max": 290.64,
//           "night": 286.86,
//           "eve": 287.24,
//           "morn": 284.09
//       },
//       "feels_like": {
//           "day": 288.27,
//           "night": 285.8,
//           "eve": 286.32,
//           "morn": 282.91
//       },
//       "pressure": 1024,
//       "humidity": 43,
//       "weather": [
//           {
//               "id": 800,
//               "main": "Clear",
//               "description": "sky is clear",
//               "icon": "01d"
//           }
//       ],
//       "speed": 3.27,
//       "deg": 23,
//       "gust": 5,
//       "clouds": 0,
//       "pop": 0
//   },
//   {
//       "dt": 1644436800,
//       "sunrise": 1644419162,
//       "sunset": 1644457312,
//       "temp": {
//           "day": 290.72,
//           "min": 284.45,
//           "max": 291.92,
//           "night": 287.77,
//           "eve": 288.72,
//           "morn": 284.45
//       },
//       "feels_like": {
//           "day": 289.6,
//           "night": 286.67,
//           "eve": 287.66,
//           "morn": 283.31
//       },
//       "pressure": 1021,
//       "humidity": 41,
//       "weather": [
//           {
//               "id": 800,
//               "main": "Clear",
//               "description": "sky is clear",
//               "icon": "01d"
//           }
//       ],
//       "speed": 3.7,
//       "deg": 34,
//       "gust": 5.64,
//       "clouds": 0,
//       "pop": 0
//   }
// ]
