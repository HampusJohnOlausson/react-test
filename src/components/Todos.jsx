import React,{useState} from 'react'

const Todos = () => {

    const [todos, setTodos] = useState( [
        { text: 'by groceries'},
        { text: 'shop food'},
        { text: 'hit the gym'}
    ])
    return (
        <div>
            {todos.map(item => (
                <li>{item.text}</li>
            ))}
        </div>
    )
}

export default Todos
