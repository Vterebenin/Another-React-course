import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { hot } from 'react-hot-loader'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
export default hot(module)(App)