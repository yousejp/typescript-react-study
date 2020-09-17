import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Appに様々な属性（messageなど）を持たせることができ、それをprppsという
ReactDOM.render(
  // <App message="Hello, React!" />,
  <App />,
  document.getElementById('root')
);
