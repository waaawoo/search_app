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
  // データを受け取っている
  handlePlaceChange(place){
    this.setState({ place })
  }

  // submit時のinputの情報を取得
  handleSubmit(e){
    // リロードの動きを止める
    e.preventDefault();
    this.props.onSubmit(this.state.place);
  }


  render(){
    return(
      // 送信ボタンを押した時に発火するイベントonSubmitを設定する
      <form onSubmit={e => this.handleSubmit(e)}>
        {/* 入力を受け取る */}
        <input type="text"
          // placeはplaceholderの略で使用しているだけ、なんでも良い
          value={this.state.place}
          onChange={e => this.handlePlaceChange(e.target.value)}
        />
        {/* 送信ボタン */}
        <input type="submit" value="検索"/>
      </form>
    );
  }
}

export default SearchForm;
