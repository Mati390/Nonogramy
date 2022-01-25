import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shop from './Shop';
import ShopPrzycisk from './ShopPrzycisk';
import Draw from './Draw';
import Count from './Count';
import Lvl1 from './Lvl1';
import Points from './Points';
import addpkt from './addpkt';
import Bulb from './Bulb';
import Serce from './Serce';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <div>
  <h1>Nonogram</h1>
  <button id="btnShop" onClick={ShopPrzycisk}>Shop</button>
  <Shop />
  <Points />
  <Serce/>
  <Bulb/>

<div id="mainContainer">

  <Lvl1/>
</div>
<footer>
  <h3>Created by: Otylia Łagoda, Mateusz Majewski, Patryk Bojko</h3>
</footer>
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);
//Count();
Draw();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
