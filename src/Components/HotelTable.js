import React from 'react';
import HotelRow from './HotelRow';

//
const HotelTable = ({ hoteles }) => (
  <table>
    <tr><th>ホテル名</th></tr>
    {hotels.map(hotel => (<HotelRow hotel={hotel} />))}
  </table>
);


export default HotelTable;
