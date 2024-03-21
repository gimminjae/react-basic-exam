import React from 'react';
import ToDo from './ToDo';

function ToDoList({ list, checkToDo, removeToDo }) {
    return (
        <>
        <ul style={{ listStyle: 'none' }}>
            {
                list.map(todo => {
                    return (
                        <ToDo todo={todo} checkToDo={checkToDo} removeToDo={removeToDo} />
                    )
                })
            }
        </ul>
        </>
    )
}

export default ToDoList