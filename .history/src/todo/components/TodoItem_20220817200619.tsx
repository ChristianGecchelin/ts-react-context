import React from 'react'
import { Todo } from '../interfaces/interfaces'

interface props{
    todo:Todo
}

export const TodoItem = ({todo}:props) => {

    const handleDbClick =()=>{
        console.log('handleDb',todo.desc)
    }

  return (
    <li style={{cursor:'pointer',textDecoration:todo.completed?'line-through':''}}
    onDoubleClick={handleDbClick}>
        {todo.desc}
    </li>
  )
}
