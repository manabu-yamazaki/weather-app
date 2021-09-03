import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Empty from '../atoms/Empty';
import CurrentWeather from '../organisms/CurrentWeather';
import ForeCastEachThreeHours from '../organisms/ForeCastEachThreeHours';
import RouteContainer from '../molecules/RouteContainer';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';

interface RouterSwitchProps {
  appText: string;
  titleText: string;
  buttonText: string;
}

const RouterSwitch: React.FunctionComponent<RouterSwitchProps> = ({appText, titleText, buttonText}) => (
  <BrowserRouter>
    <Header titleText={appText} />
    <RouteContainer>
      <Route exact path="/" component={Empty}></Route>
      <Route path="/currentweather" render={() => <CurrentWeather titleText={titleText} buttonText={buttonText} />} />
      <Route path="/forecasteachthreehours" render={() => <ForeCastEachThreeHours titleText={titleText} buttonText={buttonText} />} />
    </RouteContainer>
    <Footer titleText={appText} />
  </BrowserRouter>
)

export default RouterSwitch;