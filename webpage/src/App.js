import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

let imgUrl = 'images/berlin.jpg'
let styles = {
  root: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: 'cover',
    overflow: 'hidden'
  }
}


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
        <section style= { styles}> </section>

        {/*Logo Button*/}
        <button className="App-logo-button" onClick= "linkToHomepage()"> 
            <img src={require('/Users/lindseyshavers/Documents/Launch/MealDeal/webpage/src/Ok.png')}
            />
          </button>


        {/*Homepage Links to Find/Upload Pages*/}
        <div className="App">
          <div className="App-links">
            <div><button className="App-find-button" onClick= "linkToFindPage()">Find Deals</button></div>
            <div><button className="App-upload-button" onClick= "linkToFindPage()">Upload Deals</button></div>
          </div>

        </div> 
      </div> //end of body class

    );
  }
}

export default App;
