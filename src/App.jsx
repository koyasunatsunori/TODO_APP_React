import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //動的に変化する項目に対いて、stateを割り当てる
  const [todoText, setTodoText] = useState("");
  const [incomplteTodos, setIncomplteTodos] = useState(["タスク1", "タスク2"]);

  const [completeTodos, setCompleteTodos] = useState(["タスク3"]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //buttonを押したとき、実行される関数
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomplteTodos, todoText];
    setIncomplteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incomplteTodos];
    newTodos.splice(index, 1);
    setIncomplteTodos(newTodos);
  };

  //レンダリングされる内容
  return (
    <>
      <div className="input-area">
        <input
          placeholder="ToDoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加する</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {incomplteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のToDo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
