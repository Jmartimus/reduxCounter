import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'

const App = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  
  return (
    <div className="background">
      <h1 id="counter">Counter: {counter}</h1>
      <div>
        <button id="decrementButton" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button id="incrementButton" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
