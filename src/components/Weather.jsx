import React from 'react';

const Weather = (props) => {
  const {day, icon, max, min} = props

  return (
    <p>{day} {icon} {max} {min}</p>

  )
}

export default Weather;