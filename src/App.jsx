import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="ToDoを入力" />
        <button>追加する</button>
      </div>
      <div>
        <p>未完了のToDo</p>
        <ul>
          <li>タスク１</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
        <ul>
          <li>タスク2</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div>
        <p>完了のToDo</p>
        <ul>
          <li>タスク3</li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  );
};
