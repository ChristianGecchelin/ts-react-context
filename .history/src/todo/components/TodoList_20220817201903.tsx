import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoItem } from './TodoItem';
import {useTodos} from '../hooks/useTodos'
export const TodoList = () => {
    const {todoState} = useContext(TodoContext)
    console.log(todoState)

    const {todos}=useTodo()
  return (
    <ul>
        {todoState.todos.map(todo=> 
        <TodoItem key={todo.id} todo={todo}/>
        )}
    </ul>
  );
};
