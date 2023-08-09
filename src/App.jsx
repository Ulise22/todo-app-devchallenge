import { useState } from "react"
import './App.css'
import All from "./components/All";
import Active from "./components/Active";
import Completed from "./components/Completed";

export default function App () {
  const [page, setPage] = useState(0);
  const [tasks, setTasks] = useState([]);

  const createTask = (value) => {
    let auxTask = {value: value, isCompleted: false, id: crypto.randomUUID()}
    setTasks(current => [...current, auxTask])
  }

  const changeCompleted = (task) => {
    let updatedTasks = [...tasks]
    const position = updatedTasks.indexOf(task)
    updatedTasks[position].isCompleted = !updatedTasks[position].isCompleted;
    setTasks(updatedTasks)
  }

  const deleteTask = (task) => {
    let updatedTask = tasks.filter(x => x !== task)
    
    setTasks(updatedTask)
  }

  const deleteAll = () => {
    let updatedTask = tasks.filter(x => x.isCompleted === false)
    setTasks(updatedTask)
  }

  return(
    <main>
      <h1>#todo</h1>

      <ul className="list-pages">
        <li onClick={() => setPage(0)}  className={page == 0 ? "list-pages__item page-active" : "list-pages__item"}>All</li>
        <li onClick={() => setPage(1)}  className={page == 1 ? "list-pages__item page-active" : "list-pages__item"}>Active</li>
        <li onClick={() => setPage(2)}  className={page == 2 ? "list-pages__item page-active" : "list-pages__item"}>Completed</li>
      </ul>

      { page == 0 ? <All changeCompleted={changeCompleted} taskArray={tasks} createTask={createTask} /> : page == 1 ? <Active changeCompleted={changeCompleted} taskArray={tasks} createTask={createTask}  /> : <Completed taskArray={tasks} deleteTask={deleteTask} deleteAll={deleteAll} changeCompleted={changeCompleted} />}
    </main>
  )
}