import './App.css'
import TodoList from './components/TodoList'
import InputTodo from './components/InputTodo'

function App() {
 

  return (
    <>
      <h1>Todo List</h1>
      <InputTodo />
      <TodoList />
    </>
  )
}

export default App