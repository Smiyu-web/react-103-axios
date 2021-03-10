import React from 'react'

export const Header = ({cityName, temp}) => {
  return (
    <div className="row">
      <h2>{cityName}</h2>
      <h5>Today's Temperature: {temp} </h5>
    </div>
  )
}

