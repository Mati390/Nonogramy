import React from 'react';
import './DrawBoard.css';
function Count(props) {
    
    const Fields = [...document.getElementsByClassName("empty")];
    console.log(Math.sqrt(Fields.length)-1)
    let a =0;
   let b =0;
    for(let i = 0; i<=Math.sqrt(Fields.length)-1; i++)
   {
       
       for(let j = 0; j<=Math.sqrt(Fields.length); j++)
       {
        let txt = (i+1)+"x"+(j+1)
           if(j == Math.sqrt(Fields.length )&& (a==1) )
           {
               console.log(a);
           }
           else
           {

       
         if(Fields[b].classList.contains("Correct")&& (Fields[b].id == txt)  ) 
         {
             a++;
    
            //  console.log((i+1) + "x" + (j+1)+" "+ a);
         }
              else {
                console.log(a);
               a=0;
        
                   }
                   b++
                   console.log(b);
             
        }
    }
    console.log("Koniec lini");
   }
   
}

export default Count;
