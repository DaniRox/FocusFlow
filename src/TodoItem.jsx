import "./TodoItem.css";
import btnImage from "./assets/FaClose.svg";

function TodoItem(props){
    return (
        <div className="todoItem">
            <input
                type="checkbox"
                className={`todoItem__checkbox ${props.completed && "todoItem__checkbox--checked"}`}
                onClick={props.onComplete}/>
            <p className={`todoItem__text todoItem__text ${props.completed && "todoItem__text--checked"}`}>{props.text}</p>
            <button
                className="todoItem__btnDelete"
                onClick={props.onDelete}>
                    <img src={btnImage} alt="" className="todoItem__btnImage" /></button>
        </div>
    )
}

export { TodoItem };
