import { TodoContext } from "./TodoContext";
import { TodoState } from "../interfaces/interfaces";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [{
    id:'1',
    desc:'Recolectar cosas',
    completed:false,
  },{
    id:'2',
    desc:'Vender cosas',
    completed:true,
  }],
  completed: 0,
  pending: 2,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};
