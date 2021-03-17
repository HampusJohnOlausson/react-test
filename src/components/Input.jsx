import React, {useState} from 'react'

const Input = ({ addTodo }) => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(...value event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }

    return (
      <form>
        <input type="text" value={value} handleChange={handleChange} />
        <button onSubmit={handleSubmit}>Add</button>
      </form>
    );
}

export default Input
