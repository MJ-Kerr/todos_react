import React, { useState } from 'react'

const Form = (props) => {
    // state to hold todo text
    const [task, newTodo] = useState("")
    // form submit add todo
    const todoAdd = (e) => {
        // no more refresh on submit
        e.preventDefault()
        // add todo to state
        props.addTodos(task)
        // clear todo text
        newTodo("")
    }

    return (
        <fieldset>
            {/* changes obj state */}
            <form onSubmit={todoAdd}>
                <label>To-Do:</label>
                <input onChange={(e) => newTodo(e.target.value)} value={task} />
                <button style={{ backgroundColor: "cornflowerblue" }} type="submit">📝</button>
            </form>
        </fieldset>
    )
}

export default Form