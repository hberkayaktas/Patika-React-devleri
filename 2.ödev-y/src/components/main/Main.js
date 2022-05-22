import { useState,useEffect } from "react";
import Li from './li/li'
function Main({ addTodo, todos,filter }) {
  let filtered;
  if(filter == "Active"){
  filtered = todos.filter((item) => item.checked != true)
  }
  if(filter == "Completed"){
    filtered = todos.filter((item) => item.checked == true)

    }

    useEffect (() =>{
      console.log("todos state güncellendi!");
     }, [addTodo,todos]);
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {console.log(filter)}
        {console.log(filtered)}
        {filter == "All" &&
          (todos.map((todo, i) => (
            <Li key={i} addTodos={addTodo} todos={todos} todo={todos[i]} index={i}/>
          )))
        }
        {filter == "Active" && (
          //console.log(todos.filter((item)=> item.checked != true))
          
          (filtered.map((todo, i) => (
            <Li key={i} addTodos={addTodo} todos={todos} todo={todo} index={i}/>
          )))
        )}
        {filter == "Completed" && (
          //console.log(todos.filter((item)=> item.checked != true))
          
          (filtered.map((todo, i) => (
            <Li key={i} addTodos={addTodo} todos={todos} todo={todo} index={i}/>
          )))
        )}
      </ul>
    </section>
  );
}

export default Main;
