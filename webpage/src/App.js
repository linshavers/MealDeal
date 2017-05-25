import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
      super (props);
      this.state = ({
        name: null, 
        address: null, 
        distance: null, 
      });
    }


  render() {

    return (
      <div className="body">

        {/*App Logo Button */}
        <div className="App">
          <button className="App-logo-button" onClick= "linkToHomepage()"> 
            <img src={require('/Users/lindseyshavers/Documents/Launch/MealDeal/webpage/src/Ok.png')}
            />
          </button>
        </div>

        {/*Homepage Links to Find/Upload Pages*/}
        <div align="center" className="App-links">
          <table>
            <tr>
              <td><button className="App-find-button" onClick= "linkToFindPage()">Find Deals</button></td>
              <td><button className="App-upload-button" onClick= "linkToFindPage()">Upload Deals</button></td>
            </tr>
          </table>
        </div>

      </div> //end of body class

    );
  }
}

export default App;
