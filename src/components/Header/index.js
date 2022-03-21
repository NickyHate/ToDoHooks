import React from "react";

export default function Header() {
    return (
        <div className="header-container">
            <h1>To Do List On React Hooks</h1>
            <input type="text" className="header-container-input"/>
            <button className="header-container-addbtn">Добавить</button>
        </div>
    )
}