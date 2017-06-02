import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Find from './Find.js';
import Upload from './Upload.js';
import deal from './Deal.js';
import * as firebase from 'firebase';
import Map from './Map.js';

//configures webpage to firebase database
var config = {
    apiKey: "AIzaSyD22XZBmWcs8-E7nnh3bhzU87QOs7tILME",
    authDomain: "mealdeal-62730.firebaseapp.com",
    databaseURL: "https://mealdeal-62730.firebaseio.com/",
    projectId: "mealdeal-62730",
    storageBucket: "mealdeal-62730.appspot.com",
    messagingSenderId: "1040391253525"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
