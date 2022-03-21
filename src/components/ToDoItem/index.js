import React from "react";

export default function ToDoItem(props) {
    return (
        <div className="todo-item">{props.el.title}</div>
    )
}