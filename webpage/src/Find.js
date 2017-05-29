import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';



class Find extends Component {

    constructor(props) {
      super (props);
      this.state = ({
        name: null, 
        address: null, 
        distance: null, 
      });
    }


    render() {
        return(
            <div className="Main">
                <h1>Find Page</h1>
            </div>
        )
    }
}

export default Find;