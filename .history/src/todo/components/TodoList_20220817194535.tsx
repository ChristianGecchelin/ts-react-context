import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoList = () => {
    const {todoState} = useContext(TodoContext)
  return (
    <ul>
        {todoState.todos.map(todo=> 
        <li>
            <h2>{todo.id}</h2>
            <p>{todo.desc}</p>
            <span>{todo.completed}</span>
        </li>
        )}
    </ul>
  );
};
