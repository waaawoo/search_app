import React, { Component } from 'react';
// form部分のcomponentの呼び出し
import SearchForm from './SearchForm';
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
    console.log(place);
  }

  // viewに表示させる記述
  render(){
    return (
    <div>
      <h1>緯度経度検索</h1>

      {/* importしたcomponentを出力 onClickイベントを設置 */}
      <SearchForm onSubmit={place => this.handlePlaceSubmit(place) } />
    </div>
    );
  }
}

// classを読み込めるように
export default App;
