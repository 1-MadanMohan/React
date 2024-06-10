import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [Todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  }

  function Toggletodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          // todo.completed = completed
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-item form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">ToDo List</h1>
      <ul className="list">
        {Todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => Toggletodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
