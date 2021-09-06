import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RouteContainer from './molecules/RouteContainer';
import CurrentWeather from './pages/CurrentWeather';
import ForeCastEachThreeHours from './pages/ForeCastEachThreeHours';
import Top from './pages/Top';

const RouterSwitch: React.FunctionComponent = () => (
  <BrowserRouter>
    <RouteContainer>
      <Route exact path="/" component={Top}/>
      <Route path="/currentweather" component={CurrentWeather}/>
      <Route path="/forecasteachthreehours" component={ForeCastEachThreeHours}/>
    </RouteContainer>
  </BrowserRouter>
)

export default RouterSwitch;