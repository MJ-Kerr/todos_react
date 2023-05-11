import React from 'react'

const Todo = (props) => {
    // console.log(props)




    return (
        <fieldset>
            <li style={{ textDecoration: props.todoObj.isCompleted ? 'line-through' : 'none' }}>
                {props.todoObj.task}
                <input type="checkbox" checked={props.todoObj.isCompleted} onChange={e => props.updateTask(props.index)} />
                <button onClick={() => props.deleteTask(props.index)} > Delete</button>
            </li>
        </fieldset>
    )
}

export default Todo;