import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.container';

export const init = () => ReactDOM.render(<App />, document.getElementById('root'));

init();