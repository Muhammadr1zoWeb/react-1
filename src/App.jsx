
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>{count}</h1>
      <button className='btn btn-success' onClick={()=>setCount(count + 1)} >+</button>
      <button className='btn btn-danger' onClick={()=>count > 0 ? setCount(count - 1) : setCount(0)} >-</button>
    </div>
  );
}

export default App;
