import { useState } from "react"
import './App.css'
import All from "./components/All";
import Active from "./components/Active";
import Completed from "./components/Completed";

export default function App () {
  const [page, setPage] = useState(0);
  return(
    <main>
      <h1>#todo</h1>

      <ul className="list-pages">
        <li onClick={() => setPage(0)}  className="list-pages__item">All</li>
        <li onClick={() => setPage(1)}  className="list-pages__item">Active</li>
        <li onClick={() => setPage(2)}  className="list-pages__item">Completed</li>
      </ul>

      { page == 0 ? <All /> : page == 1 ? <Active /> : <Completed />}
    </main>
  )
}