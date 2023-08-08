import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export default function Completed ({taskArray, changeCompleted, deleteTask, deleteAll}) {

    const tasksResult = taskArray.filter((item) => item.isCompleted == true)

    return(
        <section>
            <ul>
                {tasksResult.length > 0 && tasksResult.map((task, index) => {
                    return(
                        <li key={task.id}>
                            <div>
                                <input type="checkbox" checked={task.isCompleted} onChange={() => changeCompleted(task)} />
                                <p> {task.value} </p>
                            </div>
                            <FontAwesomeIcon onClick={() => deleteTask(index)} icon={faTrash} />
                        </li>
                    )
                })}
            </ul>
            
            <button onClick={deleteAll}><FontAwesomeIcon icon={faTrash} /> delete all</button>
        </section>
    )
}