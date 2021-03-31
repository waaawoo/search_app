// componentを作る際はcomponentを指定する
import React, { Component } from 'react';

// componentを継承
class SearchForm extends Component{
  // コンストラクタ設定
  constructor(props){
    super(props);
    // からのハッシュを定義する必要がある
    this.state = {place: "東京タワー"};
  }

  // 関数作成
  handlePlaceChange(place){
    this.setState({ place })
  }

  render(){
    return(
      <form>
        {/* 入力を受け取る */}
        <input type="text"
          // placeはplaceholderの略で使用しているだけ、なんでも良い
          value={this.state.place}
          onChange={e => this.handlePlaceChange(e.target.value)}
        />
      </form>
    );
  }
}

export default SearchForm;
