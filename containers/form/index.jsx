import React from 'react';

import stateData from './data/states.json';

const Form = (props) => {
  return (
    <section>
      <form>
        <div className="field">
          <label
            htmlFor="location">
              Brewery Name
          </label>
          <input
            type="text"
            name="location"
            onChange={(event) => props.handleBreweryName(event)}
          />
        </div>
        <div className="field">
          <label
            htmlFor="city">
              City
          </label>
          <input
            type="text"
            name="location"
            onChange={(event) => props.handleCityName(event)}
          />
        </div>
        <div className="field">
          <label
            htmlFor="state">
              State
          </label>
          <select
            onChange={(event) => props.handleStateSelection(event)}
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
        </div>
        <div className="field">
          <button
            onClick={(event) => props.addBrewery(event)}
          >
            Add Brewery!
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
