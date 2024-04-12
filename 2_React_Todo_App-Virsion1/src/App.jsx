import './App.css'
import AppTodo from './components/AppTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'

function App() {
  

  return (
     <center className='todo-container'>
      <AppName/>
      <AppTodo/>
      <TodoItems todoName={"Buy Milk"} todoDate={"05/04/2024"}/>
      <TodoItems todoName={"Study"} todoDate={"05/04/2024"}/>
      <TodoItems todoName={"Buy Bbay"} todoDate={"05/04/2024"}/>
     </center>
  )
}

export default App
