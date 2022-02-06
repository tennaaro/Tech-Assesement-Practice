import React, { useEffect, useState } from "react";

const Home = (props) => {
  const API_KEY = `${process.env.REACT_APP_API_KEY}`;
  var axios = require("axios").default;

  var options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
    params: {
      q: 'san francisco,us',
      lat: '35',
      lon: '139',
      cnt: '10',
      units: 'metric or imperial'
    },
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': API_KEY
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <section id="home" className="page">
      <h1 className="home-title">
        Top 10 on <span>Wealthify</span>
      </h1>
    </section>
  );
};

export default Home;
