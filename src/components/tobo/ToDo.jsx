import React from 'react';

function ToDo({ todo, checkToDo, removeToDo }) {
    return (
        <>
        <li>
            <p>
                {todo.name}
                {todo.done}
                <input type="checkbox" checked={todo.done} onChange={() => checkToDo(todo.id)} />
                <button onClick={() => removeToDo(todo.id)}>X</button>
            </p>
        </li>
        </>
    )
}

export default ToDo