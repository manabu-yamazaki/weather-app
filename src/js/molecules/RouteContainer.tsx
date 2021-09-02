import React from 'react';
import { Link } from 'react-router-dom';

const RouteContainer: React.FunctionComponent =({children}) => (
  <div>
    <h1>Weather App</h1>
    <Link to="/CurrentWeather">CurrentWeather</Link>
    <Link to="/BBB">BBB</Link>
    {children}
  </div>
)

export default RouteContainer;