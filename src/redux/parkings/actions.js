import { SET_PARKINGS, SET_DIALOGS, SET_ACTUAL } from "./actionTypes";

export const setParkings = (parkings) => {
  console.log("SET PARKINGS: ", parkings);
  return { type: SET_PARKINGS, payload: { parkings } };
};

export const setActual = (id) => {
  console.log("SET ACTUAL: ", id);
  return { type: SET_ACTUAL, payload: { id } };
};

export const setDialogs = (dialogs) => {
  console.log("SET DIALOGS: ", dialogs);
  return { type: SET_DIALOGS, payload: { dialogs } };
};
