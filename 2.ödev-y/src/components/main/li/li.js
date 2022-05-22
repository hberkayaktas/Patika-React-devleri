import { useState,useEffect } from "react";

function Li({ addTodos, todo, index, todos }) {
  const [todoC, setTodoC] = useState(todo);


  const onChangeInput = (e) => {
    if (todoC.checked === true) {
      setTodoC({ ...todoC, completed: "", checked: false });
    } else {
      setTodoC({ ...todoC, completed: "completed", checked: true });
    }
  };
  const onChangeDelete = (e) => {
    const newarray = [];
    todos.map((n) => {
      if (n.id !== todoC.id) {
        newarray.push(n);
      }
    });
    addTodos(newarray);
    console.log(todos, newarray);
  };
  useEffect (() =>{
      console.log("setTodoC state güncellendi!");
      console.log(todos)
     }, [setTodoC,addTodos,todos]);

  return (
    <li className={todo.completed} onClick={onChangeInput}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.checked}
          onChange={onChangeInput}
        />
        <label>{todo.content}</label>
        <button onClick={onChangeDelete} className="destroy"></button>
      </div>
    </li>
  );
}

export default Li;
