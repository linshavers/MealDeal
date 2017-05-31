import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


class Upload extends Component {
    constructor(props) {
      super (props);
      this.state = {
        restaurantName: [], 
        dealItem: [], 
        dealPrice: [],
        dealDescription: [],
        dealList: [],
      };
    }

    handleChange(field, e) {
        this.setState({
            ...this.state,
            [field]: e.target.value,
        })
    }

    handleSubmit() {
        
    }



    render() {
        return(
            <MuiThemeProvider>
                <div className = 'uploadForm'>
                    <TextField hintText = "Name of Restaurant" onChange = { (e) => this.handleChange('newRestaurantName', e)}/><br/>
                    <TextField hintText = "Deal Item" onChange = { (e) => this.handleChange('newRestaurantName', e)}/><br/>
                    <TextField hintText = "Price" onChange = { (e) => this.handleChange('newRestaurantName', e)}/><br/>
                    <TextField hintText = "Deal Description" onChange = { (e) => this.handleChange('newRestaurantName', e)}/><br/>
                    <FlatButton label = "Submit" onClick={() => this.handleSubmit()}/><br/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Upload;