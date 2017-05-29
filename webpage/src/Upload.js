import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';



class Upload extends Component {

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
            <h1>Upload Page</h1>
        )
    }
}

export default Upload;