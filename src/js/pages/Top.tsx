import React, { useEffect } from 'react';

import TopTemplate from '../templates/TopTemplate';

const Top: React.FunctionComponent = () => {
  useEffect(() => {
    console.log("１画面目")
  }, [])
  
  return (
    <TopTemplate appText="Weather App" />
  )
}

export default Top;