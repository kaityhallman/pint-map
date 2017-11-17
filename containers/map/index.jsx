import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

import mapStyles from './styles.json';

const Map = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
  }),
  withProps({
    googleMapURL: API_URL,
    loadingElement: <div style={{ height: '100%' }} />,
  containerElement: <div style={{ height: '100vh' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withGoogleMap,
)(props =>
  (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 35.2271, lng: -80.8431 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {props.breweries.map((plot) => {
        return (
          <Marker
            onClick={props.onToggleOpen}
            key={plot.breweryName}
            position={{ lat: plot.latitude, lng: plot.longitude }}
          >
            {props.isOpen &&
            <InfoWindow onCloseClick={props.onToggleOpen}>
              <div>
                <h1>{plot.breweryName}</h1>
                <h2>{plot.city}, {plot.state}</h2>
              </div>
            </InfoWindow>}
          </Marker>
        );
      })}
    </GoogleMap>
  ));

export default Map;
