import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface ThreeHourCardProps {
  data: {
    dt: string,
    main:{
      temp: string
    },
    weather:
      {
        description: string,
        icon: string
      }[],
    wind: {
      speed: string
    }
  };
}

const ThreeHourCard: React.FunctionComponent<ThreeHourCardProps> = ({data}) => {
  return (
    <TableRow >
      <TableCell>{data.dt}</TableCell>
      <TableCell align="right">{data.weather[0].description}</TableCell>
      <TableCell align="right">{data.main.temp}</TableCell>
    </TableRow>
  );
}

export default ThreeHourCard;