import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const {todoState} = useContext(TodoContext)
    console.log(todoState)
  return (
    <ul>
        {todoState.todos.map(todo=> 
        <TodoItem todo={todo}/>
        )}
    </ul>
  );
};
