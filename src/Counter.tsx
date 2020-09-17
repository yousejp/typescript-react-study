import React, { useEffect, useRef, useState } from 'react';

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

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    console.log('render was done');
    renderTimes.current++;
  });
  const ref = useRef<HTMLInputElement>(null!);
  // !をつけるとその型をつけるとその型ではないことを明示的にできる
  // Non-Null Assertion Operatorという
  const focusInput = () => {
    // const current = ref.current;
    // if (current != null) {
    //   current.focus();
    // }

    ref.current?.focus();
    // null出なければ実行される

    ref.current.focus();
  };

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click Me!</button>
    </div>
  );
};

export default Counter;
