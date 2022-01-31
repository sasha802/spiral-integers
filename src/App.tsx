import React, { ChangeEvent, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SpiralIntegers from './Components/SpiralIntegers';

function App() {
  const [inputValue, setInputValue] = useState<number>(0)
  const [showResults, SetShowResults] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value
    if (input.length === 0) {
      return
    }
    const value: number = parseInt(input)
    setInputValue(value)
    SetShowResults(false) 
  }

  const heandleClick = () => {
    SetShowResults(true) 
  }
  
  return (
    <div className="App">
      <div className='container'>
        <h1>Exercise 2</h1>

        <div className="input-group md-3">
          <input className='form-control' type='text' placeholder='Enter an integer' onChange={handleChange}/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={heandleClick}>Show Spiral Integers</button>
          </div>
        </div>
        <div>
            {showResults &&
              <SpiralIntegers key={inputValue} userNumber={inputValue}/>
            }
          </div>   
        </div>  
    </div>
  );
}

export default App;
