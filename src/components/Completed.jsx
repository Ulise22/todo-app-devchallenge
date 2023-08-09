import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import '../App.css'

export default function Completed ({taskArray, changeCompleted, deleteTask, deleteAll}) {

    const tasksResult = taskArray.filter((item) => item.isCompleted == true)

    return(
        <section className="container">
            <ul className="task__container">
                {tasksResult.length > 0 && tasksResult.map((task) => {
                    return(
                        <li className="task__completed" key={task.id}>
                            <div className="task__completed__item">
                                <input className="task__checkbox" type="checkbox" checked={task.isCompleted} onChange={() => changeCompleted(task)} />
                                 {task.value} 
                            </div>
                            <FontAwesomeIcon className="trash-icon" onClick={() => deleteTask(task)} icon={faTrash} />
                        </li>
                    )
                })}
            </ul>
            
            <button className="delete__btn" onClick={deleteAll}><FontAwesomeIcon className="trash-icon-btn" icon={faTrash} /> delete all</button>
        </section>
    )
}