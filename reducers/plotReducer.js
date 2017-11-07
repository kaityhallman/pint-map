import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default plotReducer(state = initialState.plots, action) {
  switch (action.type) {
    case types.REQUEST_MAP_PLOTS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_MAP_PLOTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.plots,
        lastUpdated: action.receivedAt,
        error: null;
      });

    case types.RECEIVE_MAP_PLOTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.plots,
        error: action.error,
      });
  }
}
