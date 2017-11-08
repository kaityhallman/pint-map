import React from 'react';

import stateData from './data/states.json';

const Form = () => {
  return (
    <section>
      <form>
        <div className="field">
          <label htmlFor="location">Brewery Location</label>
          <input type="text" name="location"/>
        </div>
        <div className="field">
          <label htmlFor="city">City</label>
          <input type="text" name="location"/>
        </div>
        <div className="field">
          <label htmlFor="state">State</label>
          <select name="state" id="state">
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
      </form>
    </section>
  );
}

export default Form;
