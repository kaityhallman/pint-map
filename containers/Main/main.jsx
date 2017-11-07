import React, { Component } from 'react';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
} from 'google-maps-react'

import { Article, Container } from './style/main';

import Form from '../Form/form.jsx';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const mapStyle = {
      position: 'relative',
      height: '500px',
    }

    if (this.props.loading) {
      return <article>Loading...</article>;
    }

    return (
      <article>
        <Container>
          <Map
            containerStyle={{ position: 'relative' }}
            style={mapStyle}
            google={this.props.google}
            zoom={14}
            initialCenter={{
              lat: 35.2271,
              lng: -80.8431,
            }}
          >
          </Map>
        </Container>
        <Container>
          <Form />
        </Container>
      </article>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(Main);
