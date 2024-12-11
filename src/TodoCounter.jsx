import "./TodoCounter.css";

function TodoCounter({ total, completed }){

    return (
        <h1 className="todoCounter__title">
            {completed === total && total > 0
                ? "¡Completaste todas tus tareas!"
                : `Fluyendo hacia tus metas: ${completed} de ${total} tareas realizadas.`}
        </h1>
    )
}

export { TodoCounter };
