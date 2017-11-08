import React, { Component } from 'react';

import { Article, Container } from './style/main';

import Form from '../form/index.jsx';
import Map from '../map/index.jsx';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <article>
        <Container>
          <Map />
        </Container>
        <Container>
          <Form />
        </Container>
      </article>
    )
  }
}

export default Main;
