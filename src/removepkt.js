import logo from './logo.svg';

function addpkt() {
    let points = document.getElementById("Points");
    let pointsInt = parseInt(points.textContent);
    
    if(pointsInt>=5)points.textContent=pointsInt-=5;
    console.log(pointsInt);
}

export default addpkt;
