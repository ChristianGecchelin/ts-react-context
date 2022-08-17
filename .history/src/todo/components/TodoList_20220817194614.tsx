import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoList = () => {
    const {todoState} = useContext(TodoContext)
  return (
    <ul>
        {todoState.todos.map(todo=> 
        <li>
            <h2>{todo.desc}</h2>
            <p>{todo.completed}</p>
        </li>
        )}
    </ul>
  );
};
