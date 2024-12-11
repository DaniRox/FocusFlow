import "./CreateTodoButton.css";
import btnImage from "./assets/FaPlus.svg";

function CreateTodoButton(){
    return (
        <button
            className="createTodoButton__btn"
            onClick={(event) => event.target}>
                <img src={btnImage} alt="" className="createTodoButton__btnImage" />
        </button>
    )
}

export { CreateTodoButton };
