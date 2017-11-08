import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import mapStyles from './styles.json';

const Map = compose(
  withProps({
    googleMapURL: API_URL,
    loadingElement: <div style={{ height: '100%' }}></div>,
    containerElement: <div style={{ height: '500px' }}></div>,
    mapElement: <div style={{ height: '100%' }}></div>,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{lat: 35.2271, lng: -80.8431}}
    defaultOptions={{ styles: mapStyles }}
  />
);

export default Map;
