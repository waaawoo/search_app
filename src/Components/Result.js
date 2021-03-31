import React from 'react';

// FunctionalComponentで作成
// const Result = (props) => (
// 予め取得するデータを指定する
const Result = ({ address, lat, lng }) => (
  <ul class="result">
    <li>住所:{address}</li>
    <li>経度:{lat}</li>
    <li>緯度:{lng}</li>
  </ul>
);


export default Result;
