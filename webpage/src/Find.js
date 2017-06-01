import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Map from './Map';

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
    }

    savedDate = response => {
        const newState = {
            places: response.data.results,
        };

        this.setState(newState);
    };


    componentWillMount() {
        axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?' + "query=" + QUERY + "&key=" + API_KEY)
            .then(this.savedDate)
    }




    render() {
        const places = this.state.places;
        return (
            <div className="Find-main">
                <div className="Find-header">
                    <h1>Find Page</h1>
                </div>

                <section className="container">
                    <div classname="left-half">
                        <article>


                            <div className="Find-restaurant-list">
                                <h2>List of Restaurants:</h2>

                                <div>{this.state.places.map(place => {
                                    return (
                                        <li key={place.id} className="place_list_item">
                                            <div>
                                                <div className="place-list__item-name">
                                                    {place.name}
                                                </div>
                                                <div className="place-list_item-address">
                                                    {place.formatted_address}
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}</div>
                            </div>


                        </article>
                    </div>

                    <div classname="right-half">
                        <article>

                                <h2>Map</h2>
                                {/*<Map />*/}
                          

                        </article>
                    </div>
                </section>

            </div>
        )
    }
}




export default Find;