import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import firebase from 'firebase';

import {
  Article,
  MapContainer,
  FormContainer,
  Wrapper,
} from './style/main';
import MapForm from '../forms/map-form/index.jsx';
import Map from '../map/index.jsx';

import { fetchMapPlots, savePlots } from '../../actions/plotActions';

class Main extends Component {
  constructor(props) {
    super(props);

    this.geocoder = new window.google.maps.Geocoder();

    this.state = {
      breweryPlot: {
        beerName: '',
        breweryName: '',
        city: '',
        state: 'Some cool state',
      },
      breweries: [],
    };
  }

  componentDidMount() {
    this.props.getPlots();
  }

  savePlots = (plot) => {
    const breweries = [];
    breweries.push(plot);
    this.setState({ breweries: [...this.state.breweries, ...breweries] });

    this.props.saveMapPlots(breweries);
  }

  geocodeAddress = (plot) => {
    const plotToSave = Object.assign({}, plot);
    const address = `${plotToSave.city} ${plotToSave.state}`;
    this.geocoder.geocode({
      address,
    }, (results, status) => {
      if (status === 'OK') {
        plotToSave.latitude = results[0].geometry.location.lat();
        plotToSave.longitude = results[0].geometry.location.lng();

        this.savePlots(plotToSave);
      } else {
        console.error(`Geocode was not successful for the following reason: ${status}`); // eslint-disable-line no-console
      }
    });
  }

  addBrewery = (event) => {
    event.preventDefault();

    this.geocodeAddress(this.state.breweryPlot);

    this.setState({
      breweryPlot: {
        beerName: '',
        breweryName: '',
        city: '',
        state: 'Some cool state',
      },
    });
  }

  handleBeerName = (event) => {
    const breweryPlot = Object.assign({}, this.state.breweryPlot);

    breweryPlot.beerName = event.target.value;

    this.setState({ breweryPlot });
  }

  handleBreweryName = (event) => {
    const breweryPlot = Object.assign({}, this.state.breweryPlot);

    breweryPlot.breweryName = event.target.value;

    this.setState({ breweryPlot });
  }

  handleCityName = (event) => {
    const breweryPlot = Object.assign({}, this.state.breweryPlot);

    breweryPlot.city = event.target.value;

    this.setState({ breweryPlot });
  }

  handleStateSelection = (event) => {
    const breweryPlot = Object.assign({}, this.state.breweryPlot);

    breweryPlot.state = event.target.value;

    this.setState({ breweryPlot });
  }

  logOut = (event) => {
    firebase.auth().signOut().then(() => {
      this.props.toggleLogIn();
      window.localStorage.removeItem('accessToken');
    }).catch((error) => {
      console.error(`An error prevented you from logging out: ${error}`); // eslint-disable-line
    });
  }

  render() {
    const { breweryPlot } = this.state;
    return (
      <Article>
        <button
          onClick={event => this.logOut(event)}
        >
          Log Out
        </button>
        <Wrapper>
          <MapContainer>
            <Map
              breweries={this.props.plots.data}
            />
          </MapContainer>
          <FormContainer>
            <MapForm
              addBrewery={this.addBrewery}
              handleBeerName={this.handleBeerName}
              handleBreweryName={this.handleBreweryName}
              handleCityName={this.handleCityName}
              handleStateSelection={this.handleStateSelection}
              beerName={breweryPlot.beerName}
              breweryName={breweryPlot.breweryName}
              city={breweryPlot.city}
              state={breweryPlot.state}
            />
          </FormContainer>
        </Wrapper>
      </Article>
    );
  }
}

Main.propTypes = {
  getPlots: PropTypes.func.isRequired,
  saveMapPlots: PropTypes.func.isRequired,
  plots: PropTypes.object.isRequired,
  toggleLogIn: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    plots: state.plots,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveMapPlots: plots => dispatch(savePlots(plots)),
    getPlots: () => dispatch(fetchMapPlots()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
