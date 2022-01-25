import React from 'react';
import './index.css';
import ShopPrzyciskZamknij from './ShopPrzyciskZamknij';
function Shop() {
  return (
    <div id="Shop">
        <button id="buttonX" onClick={ShopPrzyciskZamknij}>X</button>
        <div id="SercaSklep"> serce serce </div>
        <div id="WskazowkaSklep">8</div>
    </div>
  );
}

export default Shop;
