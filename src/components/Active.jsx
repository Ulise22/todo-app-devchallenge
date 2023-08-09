import { useState } from "react"
import '../App.css'

export default function Active ({createTask, taskArray, changeCompleted}) {
    const [taskValue, setTaskValue] = useState('');
    const tasksResult = taskArray.filter((item) => item.isCompleted == false)

    const handleChange = (e) => {
        e.preventDefault()
        setTaskValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(taskValue);
        setTaskValue('');
    }

    return(
        <section className="container">
            <form className="form" onSubmit={handleSubmit}>
                <input className="form__input" onChange={handleChange} type="text" placeholder="write a task" value={taskValue} />
                <button className="form__btn">Add</button>
            </form>

            <ul className="task__container">
                { tasksResult.length > 0 && tasksResult.map((task) => {
                    return(
                        <li className={task.isCompleted ? "task__item completed-task" : "task__item"} key={task.id}>
                            <input className="task__checkbox" type="checkbox" checked={task.isCompleted} onChange={() => changeCompleted(task)} />
                            <p> {task.value} </p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}