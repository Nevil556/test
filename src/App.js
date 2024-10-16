import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [count, setCount] = useState(0)
    function handleIncrement() {
      setCount(prev => prev + 1)
    }
    function handleDecrement() {
        setCount(prev => prev - 1)
    }

  return (
    <div className='wrapper'>
      <h1 className='heading'>
          {count}
      </h1>
        <div className="buttons">

            <button className='button' onClick={handleDecrement}>
                -
            </button>
            <button className='button' onClick={handleIncrement}>
                +
            </button>
        </div>
        <h2 className="heading2">
            Это каунтер
        </h2>

    </div>
  );
}

export default App;
