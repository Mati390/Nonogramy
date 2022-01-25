
import './DrawBoard.css';
function Draw(props) {
const Fields = [...document.getElementsByClassName("empty")];
Fields.forEach(field => {
    field.addEventListener("click",()=>{
        field.classList.add("answ");
        if(!field.classList.contains("Correct"))
        {
            field.classList.remove("answ");
            field.classList.add("Wrong");
        }
    })
});
}

export default Draw;
