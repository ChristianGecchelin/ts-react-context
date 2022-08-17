import React from 'react'
import { Todo } from '../interfaces/interfaces'

interface props{
    todo:Todo
}

export const TodoItem = ({todo}:props) => {
  return (
    <div>TodoItem</div>
  )
}
