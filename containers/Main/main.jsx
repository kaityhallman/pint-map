import React, { Component } from 'react';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
} from 'google-maps-react'

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }

    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 35.2271,
          lng: -80.8431,
        }}
      >
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(Main);
