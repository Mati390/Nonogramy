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
    Fields[i][j] = <div id={i+"x"+j} className='empty' />

    if(j==props.Fields) Fields[i][j+1] = <span id='fixed'/>
    
    }
  }

  return (
    <div id="Board">
        {Fields}
    </div>
  );
}

export default DrawBoard;
