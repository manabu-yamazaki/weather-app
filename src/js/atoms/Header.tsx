import React from "react";

interface HeaderProps {
  titleText: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({titleText}) => {
  return (
    <div className="headerContainer">{titleText}</div>
  );
}

export default Header;