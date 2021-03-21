import React, {useState} from 'react'


const Input = () => {

     const [todos, setTodos] = useState([
       {
         text: "go shop",
       },
     ]);

  const [value, setValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setValue('');
    addTodo(value)
  };

  const addTodo = (text) => {
    const addValue = [...todos, { text } ];
    setTodos(addValue);
  }

  const deleteTodo = (index) => {
    const update = [...todos]
    update.splice(index, 1);
    setTodos(update);
  }

  return (
    <div>
      <form>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
        />

        <button onClick={handleClick}>add</button>
      </form>
      <div>
        <div>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text} <button onClick={deleteTodo}>delete</button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Input
