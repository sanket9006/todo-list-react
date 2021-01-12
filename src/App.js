import './App.css';
import React, {useState} from 'react';

// Importing Components
import Form from './components/Form.js'
import TodoList from './components/TodoList'

function App() {
  const [ inputText, setInputText] = useState("");
  const [ todos, setTodos] = useState([]);

  return (
    <div className="App">
    
    <header>
      Sanket's To Do List {inputText}
    </header>

    <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}/>
      
    <TodoList setTodos={setTodos} todos={todos}/>
    
    </div>
    
  );
}

export default App;
