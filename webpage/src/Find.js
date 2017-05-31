import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';

const API_KEY= 'AIzaSyCwQSyhr3MYLRYq35wCsEOqmqsUzcC39_s';
const QUERY= 'restaurants+in+Charlottesville'
const RADIUS= 500;
var parameters = "?radius=" + RADIUS + "&key=" + API_KEY;
const places = [];

class Find extends Component {

    constructor(props) {
      super (props);
      this.state = ({
        places: [],
      });
    }

    
    componentWillMount() {
        axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?' + "query=" + QUERY + "&key=" + API_KEY)
        .then(function (response) {
            console.log(response);
        })
    }




    render() {
        const places = this.state.places;
        return(
            <div className="Main">
                <h1>Find Page</h1>
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
        )
    }
}

// function componentDidMount() {
//     axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.0293,-78.4767&radius=5000&type=restaurant&key=AIzaSyB6DBSkA5b7W4chQJyluo0uPHfUrTYUAGM' )
//     .then(function (response){
//         this.setState({
//             response: response.data,
//         })
//         console.log(response);
//     })
//     .catch(function(error){
//         console.log(error);
//     });
// }



export default Find;