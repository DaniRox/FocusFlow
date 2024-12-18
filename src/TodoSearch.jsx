import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}){

    return (
        <input
            className="todoSearch todoSearch__input"
            placeholder="Cortar cebolla"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    )
}

export { TodoSearch };
