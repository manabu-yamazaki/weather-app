import React from 'react';

import Empty from '../atoms/Empty';
import Footer from '../atoms/Footer';
import Header from '../atoms/Header';

interface TopTemplateProps {
  appText: string;
}

const TopTemplate: React.FunctionComponent<TopTemplateProps> = ({appText}) => (
  <div>
    <Header titleText={appText} />
    <Empty />
    <Footer titleText={appText} />
  </div>
)

export default TopTemplate;