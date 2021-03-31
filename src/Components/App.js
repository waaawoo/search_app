import React, { Component } from 'react';

import axios from 'axios';

// form部分のcomponentの呼び出し
import SearchForm from './SearchForm';
import Result from './Result';

// マップAPIURL
const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json'
const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY

class App extends Component{
  // 呼び出された時に作られる
  constructor(props){
    // 親要素の読み込み
    super(props);
    this.state = {
    };
  }

  // 関数作成
  handlePlaceSubmit(place){
    // 第一引数にAPIURL変数、第二引数にaddress
    axios
    // keyにAPIkeyを指定
    .get(GEOCODE_ENDPOINT, { params: {address: place, key: MAP_API_KEY } })
    // thenの引数に結果が返ってくる
    .then((results) => {
      console.log(results.data);
      // resultsに入ってきているdataのresultsの0番目を格納
      const data = results.data.results[0];
      // 上記のdataのgeometry>locationを格納
      const location = data.geometry.location;
      this.setState({
        // dataのなかのアドレス部分を格納
        address: data.formatted_address,
        lat: location.lat,
        lng: location.lng,
      });
    });

  }

  // viewに表示させる記述
  render(){
    return (
    <div>
      <h1>緯度経度検索</h1>

      {/* importしたcomponentを出力 onClickイベントを設置 */}
      <SearchForm onSubmit={place => this.handlePlaceSubmit(place) } />

      {/*  */}
      <Result
        address={this.state.address}
        lat={this.state.lat}
        lng={this.state.lng}
      />

    </div>
    );
  }
}

// classを読み込めるように
export default App;
