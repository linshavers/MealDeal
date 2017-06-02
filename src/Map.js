import React, { Component } from 'react';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

const API_KEY = 'AIzaSyCwQSyhr3MYLRYq35wCsEOqmqsUzcC39_s';

const coords = {
  lat: 38.0300531,
  lng: -78.4863596
};

const params = { key: API_KEY };

class Map extends Component {

 onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

 onDragEnd(e) {
    console.log('onDragEnd', e);
  }

 onCloseClick() {
    console.log('onCloseClick');
  }

 onClick(e) {
    console.log('onClick', e);
  }

 render() {
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={10}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>

       <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />

       <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Map of Charlottesville! Move the map around to find your restaurants!'}
          onCloseClick={this.onCloseClick} />

       <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />

     </Gmaps>
    );
  }

};

export default Map;