import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Empty from '../atoms/Empty';
import RouteContainer from './RouteContainer';

const RouterSwitch: React.FunctionComponent = () => (
  <BrowserRouter>
    <RouteContainer>
      <Route exact path="/" component={Empty}></Route>
      <Route path="/AAA" component={Empty}></Route>
      <Route path="/BBB" component={Empty}></Route>
    </RouteContainer>
  </BrowserRouter>
)

export default RouterSwitch;