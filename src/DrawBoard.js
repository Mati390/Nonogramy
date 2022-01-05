import React from 'react';
import './DrawBoard.css';
function DrawBoard(props) {
  let Fields = []
  for (let i = 0; i < props.Fields+2; i++) {
    Fields[i] = [];
}
  for(let i=1; i<props.Fields+1; i++)
  {
    for(let j=1; j<props.Fields+1; j++)
    {
  //numerowanie wierszy(później bedzie wyświetlać ile jest pól do zamalowania)
  // if(j==1)  Fields[i][j-1] = <span className="right">{i}</span>

    console.log(props.Fields);
    Fields[i][j] = <div id={i+"x"+j} />

    if(j==props.Fields) Fields[i][j+1] = <br/>
    
    }
  }
  //numerowanie kolumn(później bedzie wyświetlać ile jest pól do zamalowania)
  for(let i=1; i<props.Fields+1; i++)
  {
    if(i==props.Fields) Fields[0][i+1] = <br/>
    Fields[0][i] = <span className="top">{i}</span>
  }
  return (
    <div id="DrawBoard">
        {Fields}
    </div>
  );
}

export default DrawBoard;
