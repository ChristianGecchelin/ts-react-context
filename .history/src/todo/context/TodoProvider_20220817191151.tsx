import {TodoContext} from './TodoContext'

export const TodoProvider = () => {
  return (
    <TodoContext.Provider>
        {children}
    </TodoContext.Provider>
  )
}
