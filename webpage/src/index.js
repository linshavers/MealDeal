import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Find from './Find.js';
import Upload from './Upload.js';
import Map from './Map.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
