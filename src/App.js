import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App() {
  // set global state of tasks
  const [tasks, setTasks] = useState([
    {
      task: "Learn React",
      isCompleted: false
    },
    {
      task: "Learn Python",
      isCompleted: true
    },
    {
      task: "Learn JavaScript",
      isCompleted: false
    }
  ])
  const updateTask = (index) => {
    // need to change state, need to make copy since it cant be changed
    // ... operator
    const temp = [...tasks]
    temp[index].isCompleted = !temp[index].isCompleted
    // console.log(temp[index].isCompleted)
    setTasks(temp)// is returning the copy of the array
  }
  const deleteTask = (index) => {
    const temp = [...tasks]
    temp.splice(index, 1);
    console.log(temp)
    setTasks(temp)
  }

  const addTodos = (formInput) => {
    setTasks([...tasks, { task: formInput, isCompleted: false }])
    // console.log(addTodos)
  }

  return (
    <fieldset style={{ backgroundColor: "gray", maxWidth: "500px" }} className="App">
      <h1 style={{ backgroundColor: "cornflowerBlue" }}> To-Do List 📝 </h1>
      {/* <hr />{JSON.stringify(tasks)} */}
      <Form addTodos={addTodos} />
      {
        tasks.map((todoObj, index) => {
          return (
            <Todo key={index} todoObj={todoObj} index={index} updateTask={updateTask} deleteTask={deleteTask} />
          )
        })
      }

    </fieldset>
  );
}

export default App;
