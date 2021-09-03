import axios from 'axios';
import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ThreeHourCard from '../atoms/ThreeHourCard';

interface ThreeHoursCardListProps {
  cityName: string;
}

const ThreeHoursCardList: React.FunctionComponent<ThreeHoursCardListProps> = ({cityName}) => {
  const [weatherData, setWeatherData] = useState(
    {
      city: {name:""}, 
      list: [
        {
          dt: "", 
          main: {
            temp:"",
            temp_min: "",
            temp_max:""
          },
          weather: [
            {
              description: "", 
              icon: ""
            }
          ]
        }
      ]
    }
  );

  if(cityName && cityName !== weatherData.city.name){
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + process.env.REACT_APP_API_KEY)
    .then(res => {
      setWeatherData(res.data);
    }).catch(() => {
      console.log("エラーが発生しました。")
    })
  }

  const renderCard = () => {
    return (
      weatherData.list.map((data,key) => <ThreeHourCard key={key} data={data} />)
    )
  }

  return (
    <div>
      <div>{weatherData.city.name}</div>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Weather</TableCell>
              <TableCell align="right">Temp</TableCell>
              <TableCell align="right">Temp Max</TableCell>
              <TableCell align="right">Temp Min</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderCard()}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ThreeHoursCardList;