import './App.css';
import React, { useState, useEffect } from 'react';

// Importing Components
import Form from './components/Form.js'
import TodoList from './components/TodoList'

function App() {
    // States
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filterTodos, setFilterTodos] = useState([]);

    useEffect(() => {
        getLocalTodos();
    }, [])

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilterTodos(todos.filter((todo) => todo.completed === true));
                break;

            case "uncompleted":
                setFilterTodos(todos.filter((todo) => todo.completed === false));
                break;

            default:
                setFilterTodos(todos);
                break;

        }
    }

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"))
            setTodos(todoLocal);
        }
    }


    // Function
    return ( 
      <div className = "App" >

        <header >
        Sanket 's To Do List   
        </header >

        <Form inputText = { inputText }
        todos = { todos }
        setTodos = { setTodos }
        setStatus = { setStatus }
        filterTodos = { filterTodos }
        setInputText = { setInputText }
        />

        <TodoList filterTodos = { filterTodos }
        setTodos = { setTodos }
        todos = { todos }
        />

        </div>

    );
}

export default App;