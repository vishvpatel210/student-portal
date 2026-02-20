import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [value, setValue] = useState(0);

  const increment = () => setValue((v) => v + 1);
  const decrement = () => setValue((v) => (v > 0 ? v - 1 : 0));
  const reset = () => setValue(0);

  return (
    <div className="page counter-page">
      <h1 className="page-title">Counter</h1>
      <p className="page-subtitle">Click the buttons to change the counter value</p>

      <div className="counter-card">
        <div className={`counter-value ${value === 0 ? 'zero' : 'positive'}`}>
          {value}
        </div>
        <p className="counter-hint">
          {value === 0 ? 'Counter is at zero' : `Counted up to ${value}`}
        </p>
        <div className="counter-buttons">
          <button className="btn btn-increment" onClick={increment}>
            + Increment
          </button>
          <button className="btn btn-decrement" onClick={decrement} disabled={value === 0}>
            − Decrement
          </button>
          <button className="btn btn-reset" onClick={reset}>
            ↺ Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
