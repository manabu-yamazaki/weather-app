import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Empty from '../atoms/Empty';
import CurrentWeather from '../organisms/CurrentWeather';
import RouteContainer from '../molecules/RouteContainer';

interface RouterSwitchProps {
  titleText: string;
  buttonText: string;
}

const RouterSwitch: React.FunctionComponent<RouterSwitchProps> = ({titleText, buttonText}) => (
  <BrowserRouter>
    <RouteContainer>
      <Route exact path="/" component={Empty}></Route>
      <Route path="/CurrentWeather" render={() => <CurrentWeather titleText={titleText} buttonText={buttonText} />} />
      <Route path="/BBB" component={Empty}></Route>
    </RouteContainer>
  </BrowserRouter>
)

export default RouterSwitch;