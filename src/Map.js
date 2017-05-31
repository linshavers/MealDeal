import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import google from  'google-maps';
//import GoogleMap from './google_map';


var map; 
var infoWindow;

class Find extends Component {

    // initMap() {
    //     var charlottesville = { lat: 38.0400823, lng: -78.5199934};

    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: charlottesville,
    //         zoom: 15
    //     });

    //     infoWindow = new google.maps.InfoWindow();
    // }

    //     var service = new google.maps.places.PlacesService(map);
    //     service,nearbySearch({
    //         location: charlottesville, 
    //         radius: 500, 
    //         types: ['restaurant'], 
    //         opennow: true,
    //     }, this.callback());
    // }

    // callback(results, status) {
    //     if (status === google.maps.places.PlacesServiceStatus.OK) {
    //         for (var i = 0; i < results.length; i++) {
    //             createMarker(results[i]);
    //         }
    //     }
    // }

    // createMarker(place) {
    //     var placeLoc= place.geometry.location;
    //     var marker = new google.maps.Marker({
    //         map: map, 
    //         position: place.geometry.location
    //     });

    //     google.maps.event.addListener(marker, 'click', function() {
    //         infoWindow.setContent(place.name);
    //         infoWindow.open(map, this);
    //     });
    // }


   render() {
       return (
           <div id="map" ref="map"/>)
   
        
    }
}

export default Find;