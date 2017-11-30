import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Routes from './router';
import ClickCount from './clickCount'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ClickCount />, document.getElementById('root'));
// ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
