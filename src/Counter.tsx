import React, { useState } from 'react';

const Counter: React.FunctionComponent = () => {
  // const Counter: React.FC = () => { FCはFunctionComponentと同じ機能
  const [value, setValue] = useState<number>(0);
  // useStateに与える型引数で全ての型が決まる

  const increment = () => {
    // setValue(value + 1);
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
