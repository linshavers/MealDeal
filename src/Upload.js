import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import * as firebase from 'firebase';
import  App from './App.js';

var index = 0;
class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantName: "",
            dealItem: "",
            dealPrice: "",
            dealDescription: "",
            dealList: [],
            thanks: "Submit",
        };
    }


    handleChange(field, e) {
        this.setState({
            [field]: e.target.value,
        })
    }

    handleSubmit(e) {
        const updatedContracts = this.state.dealList.concat([{
            restaurantName: this.state.restaurantName,
            dealItem: this.state.dealItem,
            dealPrice: this.state.dealPrice,
            dealDescription: this.state.dealDescription,
            index: index,
        }])
        index++;
        console.log(updatedContracts)
        this.writeUserData(updatedContracts, index, e);

        this.setState({
            ...this.state,
            thanks: "Thank you for your submission"
        })


    }

    writeUserData(updatedDeals, index, e) {
        firebase.database().ref('users/'+index).set({
            updatedDeals
        });
        e.preventDefault();
    }

   


    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div className='Upload-main'>
                        <h2>Upload Your Deals Here!</h2>
                        <div className="Upload-text">

                        <TextField classname="Upload-name" hintText="Name of Restaurant" onChange={(e) => this.handleChange('restaurantName', e)} /><br />
                        <TextField hintText="Deal Item" onChange={(e) => this.handleChange('dealItem', e)} /><br />
                        <TextField hintText="Price" onChange={(e) => this.handleChange('dealPrice', e)} /><br />
                        <TextField hintText="Deal Description" onChange={(e) => this.handleChange('dealDescription', e)} /><br />
                        <FlatButton onClick={(e) => this.handleSubmit(e)}>{this.state.thanks}</FlatButton>  <br />
                        </div>
                    </div>

                 </Router>
            </MuiThemeProvider>


        )
    }
}

export default Upload;