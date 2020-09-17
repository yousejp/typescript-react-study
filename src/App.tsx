import React from 'react';

interface AppProps {
  message?: string;
  description?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return <div>{message}</div>;
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
  description: 'This is App Conponent',
};

export default App;
