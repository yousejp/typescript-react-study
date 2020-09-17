import React from 'react';
import Counter from './Counter';

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
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
  description: 'This is App Conponent',
};

export default App;
