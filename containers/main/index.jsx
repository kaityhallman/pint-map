import React, { Component } from 'react';

import { Article, Container } from './style/main';
import Form from '../form/index.jsx';
import Map from '../map/index.jsx';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweryPlot: {
        name: '',
        city: '',
        state: '',
      },
    };
  }

  addBrewery = (event) => {
    event.preventDefault();
    console.log('added brewery', event.target.value);
  }

  handleBreweryName = (event) => {
    const breweryPlot = Object.assign({}, this.state.breweryPlot);

    breweryPlot.name = event.target.value;

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
    return (
      <Article>
        <Container>
          <Map />
        </Container>
        <Container>
          <Form
            addBrewery={this.addBrewery}
            handleBreweryName={this.handleBreweryName}
            handleCityName={this.handleCityName}
            handleStateSelection={this.handleStateSelection}
          />
        </Container>
      </Article>
    );
  }
}

export default Main;
