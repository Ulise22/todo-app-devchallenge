import { useState } from "react"
import './App.css'
import All from "./components/All";
import Active from "./components/Active";
import Completed from "./components/Completed";

export default function App () {
  const [page, setPage] = useState(0);
  const [tasks, setTasks] = useState([]);

  const createTask = (value) => {
    let auxTask = {value: value, isCompleted: false, id: Math.random()}
    setTasks(current => [...current, auxTask])
  }

  const changeCompleted = (task) => {
    let updatedTasks = [...tasks]
    const position = updatedTasks.indexOf(task)
    updatedTasks[position].isCompleted = !updatedTasks[position].isCompleted;
    setTasks(updatedTasks)
  }

  const deleteTask = (position) => {
    let updatedTask = [...tasks]
    updatedTask.splice(position, position+1)
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
        <li onClick={() => setPage(0)}  className="list-pages__item">All</li>
        <li onClick={() => setPage(1)}  className="list-pages__item">Active</li>
        <li onClick={() => setPage(2)}  className="list-pages__item">Completed</li>
      </ul>

      { page == 0 ? <All changeCompleted={changeCompleted} taskArray={tasks} createTask={createTask} /> : page == 1 ? <Active changeCompleted={changeCompleted} taskArray={tasks} createTask={createTask}  /> : <Completed taskArray={tasks} deleteTask={deleteTask} deleteAll={deleteAll} changeCompleted={changeCompleted} />}
    </main>
  )
}