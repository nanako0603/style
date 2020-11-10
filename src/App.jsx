import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectMenu: 0};
    this.onClickMenu1 = this.onClickMenu1.bind(this);
    this.onClickMenu2 = this.onClickMenu2.bind(this);
    this.onClickMenu3 = this.onClickMenu3.bind(this);
    this.onClickMenu4 = this.onClickMenu4.bind(this);
}

renderToolbar() {
  return (
    <Toolbar>
      <div className='center'>CSSで見た目を変える</div>
    </Toolbar>
  );
}

onClickMenu1() {
  this.setState({selectMenu: 1});
}

onClickMenu2() {
  this.setState({selectMenu: 2});
}

onClickMenu3() {
  this.setState({selectMenu: 3});
}

onClickMenu4() {
  this.setState({selectMenu: 4});
}

render() {

  var styleHello = {
  "color": "red",
  };

  var styleHello = "styleHello";

  var menuItemClass1 = "item";
  if(this.state.selectMenu == 1) {
    menuItemClass1 = "item-selected";
    styleHello = "Hello1"
  }

  var menuItemClass2 = "item";
  if(this.state.selectMenu == 2) {
    menuItemClass2 = "item-selected";
    styleHello = "Hello2"
  }

  var menuItemClass3 = "item";
  if(this.state.selectMenu == 3) {
    menuItemClass3 = "item-selected";
    styleHello = "Hello3"
  }

  var menuItemClass4 = "item";
  if(this.state.selectMenu == 4) {
    menuItemClass4 = "item-selected";
    styleHello = "Hello4"
  }

  return (
    <Page renderToolbar={this.renderToolbar}>
      <div className="midashi">見出しタイトル</div>
      <p className={styleHello}>はろー！</p>
        <ul className="menu">
        <li className={menuItemClass1} onClick={this.onClickMenu1}>メニュー１</li>
        <li className={menuItemClass2} onClick={this.onClickMenu2}>メニュー2</li>
        <li className={menuItemClass3} onClick={this.onClickMenu3}>メニュー3</li>
        <li className={menuItemClass4} onClick={this.onClickMenu4}>メニュー4</li>
        
    </ul>
  </Page>
  );
}
}