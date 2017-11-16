import * as types from './actionTypes';
import database from '../config/database';

import { saveMapPlots } from '../api/plotsApi';

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

    return database.ref('/plots').once('value', snap => {
      const plots = snap.val();
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

    const plotRef = database.ref('/plots');
    plotRef.push({
      plots,
    })
      .then(() => {
        dispatch(receiveSaveMapPlotsSuccess(plots));
      })
      .catch((error) => {
        dispatch(receiveMapPlotsFailure(error));
      });
  };
}
