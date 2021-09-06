import React from 'react';
import { Link } from 'react-router-dom';

const RouteContainer: React.FunctionComponent =({children}) => (
  <div>
    <h1>Weather App</h1>
    <Link to="/">Top</Link>
    <Link to="/currentweather">CurrentWeather</Link>
    <Link to="/forecasteachthreehours">ForeCastEachThreeHours</Link>
    {children}
  </div>
)

export default RouteContainer;