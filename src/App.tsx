import React from 'react';
import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
  description?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <div>{message}</div>
      <div>
        <Counter />
      </div>
      <div>
        <CounterWithReducer />
      </div>
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
  description: 'This is App Conponent',
};

export default App;
