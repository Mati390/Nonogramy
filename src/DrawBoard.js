import React from 'react';

class DrawBoard extends React.Component{
  constructor(props)
  {
    super(props);
    this.state ={
        fields: this.props.fields
    };
  }
  fields(){
    {
      let g = [];
      for(let a = this.state.fields-1;a<=0;a--  )
      {
          g[a] = <div></div>;
      }
      return g[1];
    }
  }

  render(){
    return(
      <div>
     {this.fields()}
      </div>
    )
  }
}

export default DrawBoard;
