import React, { Component } from 'react';

class App extends Component{
  // 呼び出された時に作られる
  constructor(props){
    // 親要素の読み込み
    super(props);
    this.state = {
    };
  }

  // viewに表示させる記述
  render(){
    return (
    <div>
      <h1>緯度経度検索</h1>
    </div>
    );
  }
}

// classを読み込めるように
export default App;
