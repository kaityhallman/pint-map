import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Article, Container } from './style/main';
import Form from '../form/index.jsx';
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

  render() {
    const { breweryPlot } = this.state;
    return (
      <Article>
        <Container>
          <Map
            breweries={this.props.plots.data}
          />
        </Container>
        <Container>
          <Form
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
        </Container>
      </Article>
    );
  }
}

function mapStateToProps(state) {
  return {
    plots: state.plots,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveMapPlots: (plots) => dispatch(savePlots(plots)),
    getPlots: () => dispatch(fetchMapPlots()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
