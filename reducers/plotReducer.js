import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function plotReducer(state = initialState.plots, action) {
  switch (action.type) {
    case types.REQUEST_MAP_PLOTS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_MAP_PLOTS_SUCCESS: {
      const dataObjects = Object.values(action.plots);
      const plots = [];
      dataObjects.map((obj) => {
        return plots.push(obj.plots[0]);
      });

      return Object.assign({}, state, {
        isFetching: false,
        data: plots,
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.RECEIVE_MAP_PLOTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.plots,
        error: action.error,
      });

    case types.REQUEST_SAVE_MAP_PLOTS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_SAVE_MAP_PLOTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: state.data.concat(action.plots),
        lastUpdated: action.receivedAt,
        error: null,
      });

    case types.RECEIVE_SAVE_MAP_PLOTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.plots,
        error: action.error,
      });

    default:
      return state;
  }
}
