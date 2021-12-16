import React from "react";

//関数名はファイル名と同じにする
//propsを用いて、親と子のコンポーネント間で値を渡していく
export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="ToDoを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加する</button>
    </div>
  );
};
