import React, {useState} from 'react';
import './App.css';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';


function App() {

  const [todos, setTodos] = useState([
    {
      text: '',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos)
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  const removeAllTodos = (e) => {
    e.preventDefault();
    setTodos([{text:'', isComplete: false}]);
  }
  return (
    <div className="App">
      <div className="App-Todo">
        <main>
         <TodoForm addTodo={addTodo}/>
          {todos.map((todo,index) => (
            <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
          ))}
        </main>
        <br/>
      <button onClick={removeAllTodos}>Delete All</button>
      </div>
    </div>
  );
}

export default App;
