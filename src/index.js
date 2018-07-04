import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//StyleSheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import './css/stylesheet.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
