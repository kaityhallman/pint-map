import React from 'react';
import { compose, withProps } from 'recompose';
import {
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
  withGoogleMap,
)((props) =>
  (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 35.2271, lng: -80.8431 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {props.breweries.map((plot) => {
        return (
          <Marker
            key={plot.breweryName}
            position={{ lat: plot.latitude, lng: plot.longitude }} />
        );
      })}
    </GoogleMap>
  ));

export default Map;
