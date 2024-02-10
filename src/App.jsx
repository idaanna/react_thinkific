import { useState } from "react"
import TodoItem from "./components/TodoItem"
import TodoForm from "./components/TodoForm"
import "./App.css"


function App () {
  const [todoItems, setTodoItems] = useState([
    'Buy myself a beer',
    'Buy myself a beer again',
  ]);

  const addTodo = (text) => {
    // item 1 added
    const newTodos = [...todoItems, text];
    // item 1 + whatever the user typed
    setTodoItems(newTodos);
    // update the todoItems state with the new array 
  };

  // function generateTodoComponent(todo, index) {
  //   return <TodoItem key={index} text={todo} />;
  // }

  // the brackets in return shows where the return statement ends
  return (
      <div className='app'>
      <h1 className='todo-list'> My todo list</h1>
      {todoItems.map((item, index) => (
        <TodoItem key={index} text={item} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;

