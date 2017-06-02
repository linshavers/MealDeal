import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Map from './Map';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Deal from "./Deal.js";
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


    //    componentWillMount() {
    //         axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?' + "query=" + QUERY + "&key=" + API_KEY)
    //             .then(this.savedDate)
    //     }

    componentWillMount(props) {
        var rootRef = firebase.database().ref("users");

        rootRef.on('value', snap => {

            var snapped = snap.val();

            // console.log(snapped);
            this.setState({
                ...this.state,
                readData: snapped,
                index: snap.val().length
            });

            console.log(this.state.readData);
            // console.log(this.props.dealItem);
            // console.log(this.state.places);


            // console.log(snap.val()); 
            // console.log(snap.val().length);
        });
    }



    render() {
        const places = this.state.places;

        const dealList = this.state.readData.map (
            (object) => {
                return(
                    // var updatedDeals = object[0];
                    // var info = updatedDeals[0];
                    <li>
                        {info[0]}
                        {info[1]}
                        {info[2]}
                        {info[5]}
                    </li>
                )
        })
    }

    return (
        <div className="Find-main">
                <div className="Find-header">
                    <h1>Find Page</h1>
                
                <div className="Find-restaurant-container">
                    <h2>List of Restaurants</h2>

                        <ul className="Find-restaurant-list">
                            {this.state.places.map(place => {
                                return (
                                    <li key={place.id} className="Find-restaurant_item">
                                    <div>
                                    
                                        <div className="Find-restaurant_name">
                                            {place.name}
                                        </div>
                                        <div className="Find-restaurant_address">
                                            {place.formatted_address}
                                        </div>
                                    </div>
                                </li>
                        );
                })}</ul>
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