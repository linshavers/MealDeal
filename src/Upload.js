import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import * as firebase from 'firebase';

//var index = 0;
class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantName: "",
            dealItem: "",
            dealPrice: "",
            dealDescription: "",
            dealList: [],
            readData: "",
            index:11
        };
    }

    handleChange(field, e) {
        this.setState({
            [field]: e.target.value,
        })
    }

    handleSubmit(e) {
        const updatedDeals = this.state.dealList.concat([{
            ...this.state,
            restaurantName: this.state.restaurantName,
            dealItem: this.state.dealItem,
            dealPrice: this.state.dealPrice,
            dealDescription: this.state.dealDescription,
        }])
       
        console.log(updatedDeals)
        this.writeUserData(updatedDeals, this.state.index, e);

    }

    writeUserData(updatedDeals, index, e) {
        firebase.database().ref('users/'+ this.state.index).set({
            updatedDeals
        });
        e.preventDefault();
    }






    render() {
        return (
            <MuiThemeProvider>
                <div className='uploadForm'>
                    <TextField hintText="Name of Restaurant" onChange={(e) => this.handleChange('restaurantName', e)} /><br />
                    <TextField hintText="Deal Item" onChange={(e) => this.handleChange('dealItem', e)} /><br />
                    <TextField hintText="Price" onChange={(e) => this.handleChange('dealPrice', e)} /><br />
                    <TextField hintText="Deal Description" onChange={(e) => this.handleChange('dealDescription', e)} /><br />
                    <FlatButton label="Submit" onClick={(e) => this.handleSubmit(e)} /><br />


                    {this.state.readData}


                </div>
            </MuiThemeProvider>


        )
    }
}

export default Upload;