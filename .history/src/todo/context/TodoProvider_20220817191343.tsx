import {TodoContext} from './TodoContext'

interface props{
    children:JSX.Element|JSX.Element[]
}

export const TodoProvider = ({children}) => {
  return (
    <TodoContext.Provider value={{}}>
        {children}
    </TodoContext.Provider>
  )
}
