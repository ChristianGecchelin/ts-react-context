import { TodoContext } from "./TodoContext";
import { TodoState } from '../interfaces/interfaces';

const INITIAL_STATE:TodoState={
    todoCount:2,
    todos:{
    },
    completed:0,
    pending:2,
}

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};
