import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import mapStyles from './styles.json';

const Map = compose(
  withProps({
    googleMapURL: API_URL,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '500px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(() =>
  (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 35.2271, lng: -80.8431 }}
      defaultOptions={{ styles: mapStyles }}
    />
  ));

export default Map;
