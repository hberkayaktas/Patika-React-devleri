import { useState,useEffect } from "react";

function Footer({ todos,setTodos, setFilter, filter }) {
     
  const changeFilter = async (filter_push) => {
      await setFilter(filter_push);
      //console.log(filter_push);

  };
  const clearCompleted =async () => {
      let completed = todos.filter((item) => item.checked != true)
      await setTodos(completed);
  }
  useEffect (() =>{
     // console.log("setCFilter state güncellendi!");
     }, [filter,todos]);

  return (
    <footer className="footer">
      <span className="todo-count">
         <strong>{todos.length} </strong> 
        items left
      </span>

      <ul className="filters">
        <li key="1">
          <a onClick={()=>changeFilter('All')} className="selected">
            All
          </a>
        </li>
        <li key="2">
          <a onClick={()=>changeFilter('Active')}>Active</a>
        </li>
        <li key="3">
          <a onClick={()=>changeFilter('Completed')}>Completed</a>
        </li>
      </ul>
      <button onClick={clearCompleted} className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
