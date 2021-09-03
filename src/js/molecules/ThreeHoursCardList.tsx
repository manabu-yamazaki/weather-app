import React from "react";
import ThreeHourCard from "../atoms/ThreeHourCard";
// import axios from "axios";

interface ThreeHoursCardListProps {
  cityName: string;
}

const ThreeHoursCardList: React.FunctionComponent<ThreeHoursCardListProps> = ({cityName}) => {
  // let data = {name:""};

  // if(cityName){
  //   console.log('cityName:', cityName);
  //   axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=8942dc64e539e7780d740871d99384f5')
  //   .then(res => {
  //     console.log(res.data);
  //     data = res.data;
  //   })
  // }

  const data = [
    { text: "1" },
    { text: "2" }
  ];

  const renderCard = () => {
    return (
      data.map((d,key) => <li key={key}><ThreeHourCard>{d.text}</ThreeHourCard></li>)
    )
  }

  return (
    <ul>
      {renderCard()}
    </ul>
  );
}

export default ThreeHoursCardList;