import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoList = () => {
    const {todoState} = useContext(TodoContext)
    console.log(todoState)
  return (
    <ul>
        {todoState.todos.map(todo=> 
        <li>
            <h2>{todo.desc}</h2>
            <p>{todo.completed.toString()}</p>
        </li>
        )}
    </ul>
  );
};
