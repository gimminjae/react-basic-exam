import React, { useState } from 'react'

function ToDoInput({ addToDo }) {
    const [name, setName] = useState('')
    return (
        <>
        <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            onKeyUp={(e) => {
                if (e.key === 'Enter') {
                    addToDo(name)
                    setName('')
                }
            }}
        />
        <button onClick={() => {
                addToDo(name)
                setName('')
            }
        }>+</button>
        </>
    )
}

export default ToDoInput