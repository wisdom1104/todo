import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "react를 배워봅시다." },
    { id: 2, content: "useState를 배워봅시다." },
  ]);
  const [content, setContent] = useState("");
  const contentChangHandler = (event) => {
    setContent(event.target.value);
  };
  const clickAddBoxHandler = () => {
    const newTodos = {
      id: todos.length + 1,
      content,
    };
    setTodos([...todos, newTodos]);

    setContent("");
  };

  return (
    <div className="layout">
      <div className="form">
        <input type="text" value={content} onChange={contentChangHandler} />
        <button onClick={clickAddBoxHandler}>추가하기</button>
      </div>
      <div className="screen-header">
        <h1>Todo List</h1>
      </div>
      <div className="main">
        {todos.map(function (item) {
          return (
            <div key={item.id} className="todo-box">
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
