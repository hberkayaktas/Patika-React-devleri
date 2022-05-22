import { useState, useEffect } from "react";
import Header from "./headers/Header";
import Main from "./main/Main";
import Footer from "./footer/footer";
import Creator from "./creator/creator";

function Index() {
  const [toDos, setTodos] = useState([
    {
      id: 0,
      content: "Learn JavaScript",
      completed: "completed",
      checked: true,
    },
    { id: 1, content: "Learn React", completed: "", checked: false },
    { id: 2, content: "Have a life!", completed: "", checked: false },
  ]);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    console.log(toDos);
    console.log(filter);
  }, [toDos,filter]);
 

  return (
    <div>
      <section className="todoapp">
        <Header addTodo={setTodos} todos={toDos} />
        <Main addTodo={setTodos} todos={toDos} filter={filter} />
        <Footer todos={toDos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
      </section>
      <Creator />
    </div>
  );
}

export default Index;
