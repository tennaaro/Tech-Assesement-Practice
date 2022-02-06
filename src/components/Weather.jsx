import React from 'react';

const Weather = (props) => {
  const {day, icon, max, min} = props
  let dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let dayWord = dates[new Date(Number(day) * 1000).getDay()]
  let iconurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
  let maxC = Math.round(max - 273.15)
  let minC = Math.round(min - 273.15)
  return (
    <>
      <p>{dayWord}</p>
      <img src={iconurl}/>
      <p>{maxC} {minC}</p>
    </>
  )
}

export default Weather;