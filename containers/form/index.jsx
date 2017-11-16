import React from 'react';
import PropTypes from 'prop-types';

import stateData from './data/states.json';

const Form = (props) => {
  return (
    <section>
      <form onSubmit={props.addBrewery}>
        <div className="field">
          <label
            htmlFor="beer"
          >
              Beer Name
              <input
                type="text"
                name="beer"
                id="beer"
                placeholder="A delicious beer (optional)"
                onChange={event => props.handleBeerName(event)}
                value={props.beerName}
              />
          </label>
        </div>
        <div className="field">
          <label
            htmlFor="location"
          >
              Brewery Name*
              <input
                type="text"
                name="location"
                id="location"
                placeholder="An amazing brewery"
                onChange={event => props.handleBreweryName(event)}
                value={props.breweryName}
              />
          </label>
        </div>
        <div className="field">
          <label
            htmlFor="city"
          >
              City*
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Some random city"
                onChange={event => props.handleCityName(event)}
                value={props.city}
              />
          </label>
        </div>
        <div className="field">
          <label
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
          </label>
        </div>
        <div className="field">
          <button
            type="submit"
            onClick={event => props.addBrewery(event)}
          >
            Add Brewery!
          </button>
        </div>
      </form>
    </section>
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
