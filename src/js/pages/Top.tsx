import React from "react";
import RouterSwitch from "../templates/RouterSwitch";

interface TopProps {
  titleText: string;
  buttonText: string;
}

const Top: React.FunctionComponent<TopProps> = ({titleText, buttonText}) => {
  return (
    <RouterSwitch titleText={titleText} buttonText={buttonText} />
  )
}

export default Top;