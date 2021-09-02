import React from "react";

interface FooterProps {
  titleText: string;
}

const Footer: React.FunctionComponent<FooterProps> = ({titleText}) => {
  return (
    <div className="footerContainer">{titleText}</div>
  );
}

export default Footer;