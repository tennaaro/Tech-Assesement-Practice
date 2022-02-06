import React from 'react';

const Weather = (props) => {
  const {day, icon, max, min} = props
  let iconurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
  return (
    <>
      <p>{day} {iconurl} {max} {min}</p>
      <img src={iconurl} />
    </>
  )
}

export default Weather;