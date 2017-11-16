import React from 'react';
import PropTypes from 'prop-types';

import stateData from './data/states.json';

const Form = (props) => {
  return (
    <section>
      <form>
        <div className="field">
          <label
            htmlFor="location"
          >
              Brewery Name
              <input
                type="text"
                name="location"
                id="location"
                onChange={event => props.handleBreweryName(event)}
              />
          </label>
        </div>
        <div className="field">
          <label
            htmlFor="city"
          >
              City
              <input
                type="text"
                name="city"
                id="city"
                onChange={event => props.handleCityName(event)}
              />
          </label>
        </div>
        <div className="field">
          <label
            htmlFor="state"
          >
              State
              <select
                onChange={event => props.handleStateSelection(event)}
                name="state"
                id="state"
              >
                {stateData.map((state) => {
                  return (
                    <option
                      key={state.abbreviation}
                      value={state.abbreviation}
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
  handleStateSelection: PropTypes.func.isRequired,
  handleCityName: PropTypes.func.isRequired,
  handleBreweryName: PropTypes.func.isRequired,
};

export default Form;
