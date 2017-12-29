import React from 'react';
import PropTypes from 'prop-types';

import stateData from './data/states.json';

import {
  FormSection,
} from '../style';

import {
  Input,
  Label,
  Button,
} from '../../../assets/app.js';

const Form = (props) => {
  return (
    <FormSection>
      <form onSubmit={props.addBrewery}>
        <div className="field">
          <Label
            htmlFor="beer"
          >
              Beer Name
              <Input
                type="text"
                name="beer"
                id="beer"
                placeholder="A delicious beer (optional)"
                onChange={event => props.handleBeerName(event)}
                value={props.beerName}
              />
          </Label>
        </div>
        <div className="field">
          <Label
            htmlFor="location"
          >
              Brewery Name*
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="An amazing brewery"
                onChange={event => props.handleBreweryName(event)}
                value={props.breweryName}
              />
          </Label>
        </div>
        <div className="field">
          <Label
            htmlFor="city"
          >
              City*
              <Input
                type="text"
                name="city"
                id="city"
                placeholder="Some random city"
                onChange={event => props.handleCityName(event)}
                value={props.city}
              />
          </Label>
        </div>
        <div className="field">
          <Label
            htmlFor="state"
          >
              State*
              <select
                onChange={event => props.handleStateSelection(event)}
                name="state"
                id="state"
                value={props.state}
              >
                <option defaultValue={props.state}>{props.state}</option>
                {stateData.map((state) => {
                  return (
                    <option
                      key={state.abbreviation}
                      value={state.name}
                    >
                      {state.name}
                    </option>
                  );
                })}
              </select>
          </Label>
        </div>
        <div className="field" style={{ marginTop: '16px' }}>
          <Button
            type="submit"
            onClick={event => props.addBrewery(event)}
          >
            Add Brewery!
          </Button>
        </div>
      </form>
    </FormSection>
  );
};

Form.propTypes = {
  addBrewery: PropTypes.func.isRequired,
  handleBeerName: PropTypes.func.isRequired,
  handleStateSelection: PropTypes.func.isRequired,
  handleCityName: PropTypes.func.isRequired,
  handleBreweryName: PropTypes.func.isRequired,
  beerName: PropTypes.string.isRequired,
  breweryName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default Form;
