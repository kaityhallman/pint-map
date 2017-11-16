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

export function requestSaveMapPlots() {
  return { type: types.REQUEST_SAVE_MAP_PLOTS };
}

export function receiveSaveMapPlotsSuccess(plots) {
  return {
    type: types.RECEIVE_SAVE_MAP_PLOTS_SUCCESS,
    plots,
  };
}

export function receiveSaveMapPlotsFailure(error) {
  return {
    type: types.RECEIVE_SAVE_MAP_PLOTS_FAILURE,
    error,
  };
}

export function savePlots(plots) {
  return function dispatchSaveMapPlots(dispatch) {
    dispatch(requestSaveMapPlots());

    return saveMapPlots(plots)
      .then(() => {
        dispatch(receiveMapPlotsSuccess(plots));
      })
      .catch((error) => {
        dispatch(receiveSaveMapPlotsFailure(error));
      });
  };
}
