import './App.css';
import React, {useState} from 'react'; 


function App() {

  const [isRed, changeColor] = useState(false);
  const [count, add] = useState(0);

  const happening = () => {

    changeColor(!isRed);
    add(count + 1);

  }

  return (
    <div>
      <h1 className={isRed ?'red' : ''}>Change me</h1>
      <h1>{count}</h1>
      <button onClick={happening}>Click</button>
    </div>
  );
}

export default App;