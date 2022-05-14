import { SET_VEHICLES, SET_DIALOGS, SET_ACTUAL } from "./actionTypes";

export const setActual = (id) => {
  console.log("SET ACTUAL: ", id);
  return { type: SET_ACTUAL, payload: { id } };
};

export const setVehicles = (vehicles) => {
  console.log("SET VEHICLES: ", vehicles);
  return { type: SET_VEHICLES, payload: { vehicles } };
};

export const setDialogs = (dialogs) => {
  console.log("SET DIALOGS: ", dialogs);
  return { type: SET_DIALOGS, payload: { dialogs } };
};
