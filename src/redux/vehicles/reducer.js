import { SET_VEHICLES, SET_DIALOGS, SET_ACTUAL } from "./actionTypes";
import initialState from "./data";

export default function vehiclesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VEHICLES: {
      const { vehicles } = action.payload;
      return { ...state, vehicles: [...vehicles] };
    }
    case SET_ACTUAL: {
      const { id } = action.payload;
      return { ...state, actual: id };
    }
    case SET_DIALOGS: {
      const { dialogs } = action.payload;
      return { ...state, dialogs: { ...dialogs } };
    }
    default:
      return state;
  }
}
