import React from 'react';
import { Link } from 'react-router-dom';

const RouteContainer: React.FunctionComponent =({children}) => (
  <div>
    <h1>Weather App</h1>
    <Link to="/">Top</Link>
    <Link className="routeContainer__linkCurrentWeather" to="/currentweather">CurrentWeather</Link>
    <Link className="routeContainer__linkForeCastEachThreeHours" to="/forecasteachthreehours">ForeCastEachThreeHours</Link>
    {children}
  </div>
)

export default RouteContainer;