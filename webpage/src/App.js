import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Find from './Find.js';
import Upload from './Upload.js';
import Map from './Map.js';


class App extends Component {


  render() {

    return (
      <div className="body">
        <Router> 
          <div className="App">

            {/*Logo Button*/}
            <ul>
              <li><Link to="/">
                <button className="App-logo-button">
                  <img src={require('./Ok.png')}/>
                </button>
              </Link></li>
            <ul>
              {/*Homepage Links to Find/Upload Pages*/}
              <div className="App-links">
                <ul>
                  <div><li><Link to="/Find"><button className="App-find-button">Find Deals</button></Link></li></div>
                  <div><li><Link to="/Upload"><button className="App-upload-button">Upload Deals</button></Link></li></div>
                </ul>
              </div>
            </ul>
            </ul>
            {/*Routing Paths*/}
            <Route exact path="/Find" component={Find} />
            <Route exact path="/Upload" component={Upload} />
          </div>
        </Router>
      </div> 

    );
  }
}

export default App;
