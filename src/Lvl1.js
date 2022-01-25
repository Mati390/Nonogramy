import React from 'react';
import './DrawBoard.css';
import DrawBoard from './DrawBoard';
class Lvl1 extends React.Component {


    render() {
      return (
        <DrawBoard Fields={5}/>
      );
    }

    componentDidMount() {
        const all = [...document.getElementsByClassName("empty")];
        for(let i=0; i<all.length;i++)
        {
           if(i%2==0) all[i].classList.add("Correct") 
        
        }
      }
  }

export default Lvl1;
