import * as types from './actionTypes';

// call API here.

export function requestMapPlots() {
  return { type: types.REQUEST_MAP_PLOTS };
}

export function receiveMapPlotsSuccess(plots) {
  return {
    type: types.RECEIVE_MAP_PLOTS_SUCCESS,
    plots,
  };
}

export function receiveMapPlotsFailure(error) {
  return {
    type: types.RECEIVE_MAP_PLOTS_FAILURE,
    error,
  };
}

export function fetchMapPlots() {
  return function dispatchRequestMapPlots(dispatch) {
    dispatch(requestMapPlots());

    // api call here
    return getMapPlots()
      .then((plots) => {
        dispatch(receiveMapPlotsSuccess(plots));
      })
      .catch((error) => {
        dispatch(receiveMapPlotsFailure(error));
      });
  };
}
