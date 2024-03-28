import React from "react";
import TodoListItem from "./TodoListItem";
import "./style.css";

const listItems = [
  "Create a non-functioning version of the to-do app",
  "Use the given array",
  "Create a Header component",
  "Create a Form component",
  "Create a TodoList component",
  "Create a TodoListItem component",
  "Copy the styling we used on the JS todo app"
];

function TodoList() {
  return (
    <div className="to-dos">
      <h2 className="to-dos__heading">To-Do List</h2>
      <ul className="to-dos__list">
        {listItems.map((listItem, index) => (
          <TodoListItem key={index} item={listItem} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
