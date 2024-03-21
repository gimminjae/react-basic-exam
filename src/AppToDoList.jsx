import React, { useState, useEffect } from 'react';
import './App.css';
import ToDoList from './components/tobo/ToDoList'
import ToDoInput from './components/tobo/ToDoInput'

export default function AppToDoList() {
    // state
  const [toDoList, setToDoList] = useState([])
  const [recentId, setRecentId] = useState(0)

  // function
  function checkToDo(id) {
    setToDoList(prev => {
        return prev.map(todo => {
            if (todo.id === id) {
                return { ...todo, done: !todo.done }
            }
            return todo
        })
    })
  }
  function removeToDo(id) {
    setToDoList(prev => {
        return prev.filter(todo => todo.id !== id)
    })
  }
  function addToDo(name) {
    if (!name.trim()) {
        return
    }
    const todo = {
        id: recentId,
        name: name,
        done: false
    }
    setRecentId(prev => prev+1)
    setToDoList(prev => {
        return [...prev, todo]
    })
  }

  // effect
  useEffect(() => {
    console.log(toDoList)
  }, [toDoList])

  // rendering
  return (
    <>
    <h1>todoList</h1>
    <ToDoList 
        list={toDoList} 
        checkToDo={checkToDo} 
        removeToDo={removeToDo}
    />
    <ToDoInput addToDo={addToDo} />
    </>
  );
}
