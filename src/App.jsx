import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incomplteTodos, setIncomplteTodos] = useState(["タスク1", "タスク2"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="ToDoを入力" />
        <button>追加する</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {incomplteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
        <ul>
          <div className="list-row">
            <li>タスク2</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のToDo</p>
        <ul>
          <li>タスク3</li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  );
};
