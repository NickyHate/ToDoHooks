import React, {useState} from "react";
import ToDoItem from "../ToDoItem";

export default function ToDoList() {
    let [todoList, setToDoList] = useState([{ title: "first"}])
    return (
        <div className="todo-list">
            {todoList.map((el) => {
                return (
                    <ToDoItem el={el}/>                )
            })}
        </div>
    )
}