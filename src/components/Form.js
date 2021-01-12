import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
        console.log(e.target.value);
    };
    
    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos ([
            ...todos,
            {text: inputText, completed:false, id: Math.random() * 1000}
        ]);
        setInputText=("");
    }; 

return(
    <form>  
        <input 
        value={inputText}
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input">
        </input>

        <button  onClick={submitToDoHandler} type="submit" className="todo=button">
            <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
            <select className="filter-todo" name="todos"> 
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Un-Completed</option>
            </select>

        </div>

    </form>


); 
}

export default Form;