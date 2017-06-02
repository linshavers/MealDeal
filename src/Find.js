import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Map from './Map';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import Upload from "./Upload.js";
import * as firebase from 'firebase';



const API_KEY = 'AIzaSyCwQSyhr3MYLRYq35wCsEOqmqsUzcC39_s';
const QUERY = 'restaurants+in+Charlottesville'
const RADIUS = 500;
var parameters = "?radius=" + RADIUS + "&key=" + API_KEY;
const places = [];


class Find extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            places: [],
            readData: []
        });
        this.componentWillMount = this.componentWillMount.bind(this);
        console.log(this.props);

    }

    savedDate = response => {
        const newState = {
            places: response.data.results,
        };

        this.setState(newState);
    };

    componentWillMount(props) {
        var rootRef = firebase.database().ref("users");

        rootRef.on('value', snapshot => {

            var snapped = snapshot.val();

            this.setState({
                ...this.state,
                readData: snapped,
                index: snapped.length,
                snapshot: [],

            });
        });
    }



    render() {
        const places = this.state.places;
        console.log(this.state.readData);
        const dealList = this.state.readData.map(
            (object) => {

                { console.log(object) }
                var updatedDeals = object.updatedDeals[0];
                console.log(updatedDeals);
                return (
                    <li>
                        Restaurant Name: {updatedDeals.restaurantName} <br />
                        Deal Item: {updatedDeals.dealItem} <br />
                        Deal Description: {updatedDeals.dealDescription} <br />
                        Deal Price: {updatedDeals.dealPrice} <br />
                    </li>
                )
            }
        );

        return (
            <div className="Find-main">
                <div className="Find-header">
                    <h1>Find Page</h1>

                    <div className="Find-restaurant-container">
                        <h2>List of Restaurants</h2>

                        <ul className="Find-restaurant-list">
                            {dealList}}
                        </ul>
                    </div>

                    <div className="Find-map-container">
                        <Map />
                    </div>

                </div>
            </div>


        )
    }
}



export default Find;