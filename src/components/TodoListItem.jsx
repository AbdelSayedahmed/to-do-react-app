import React from "react";
import "./style.css";

function TodoListItem(props) {
  return (
    <li className="to-dos__list-item">
      <span>{props.item}</span>
      <button className="to-dos__delete-button">Delete</button>
    </li>
  );
}

export default TodoListItem;
