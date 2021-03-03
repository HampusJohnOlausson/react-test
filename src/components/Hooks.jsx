import React, { useState } from 'react'


function Todo({ todo, index}){
    return <div className="todo">{todo.text}</div>
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
             value={value} 
             onChange={e => setValue(e.target.value) }
             placeholder="Add todo..." />
        </form>
    )
}

const Hooks = () => {

    const [todos, setTodos] = useState([
      {
        text: "Learn about hooks",
        isCompleted: false
      },
      {
        text: "Go buy stuff",
        isCompleted: false
      },
      {
        text: "Order cards",
        isCompleted: false
      }
    ]);
    
    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    }
    return (
        <div>
            <div className="todoList">
                {todos.map((todo, index) => (
                    <Todo key={index} index={index} todo={todo}/>
                ))}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    )
}

export default Hooks


