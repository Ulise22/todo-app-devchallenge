import { useState } from "react"

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
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="write a task" value={taskValue} />
                <button>Add</button>
            </form>

            <ul>
                { tasksResult.length > 0 && tasksResult.map((task) => {
                    return(
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isCompleted} onChange={() => changeCompleted(task)} />
                            <p> {task.value} </p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}