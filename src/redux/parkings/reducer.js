import { SET_PARKINGS, SET_DIALOGS, SET_ACTUAL } from "./actionTypes";
import initialState from "./data";

export default function parkingsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PARKINGS: {
      const { parkings } = action.payload;
      return { ...state, parkings: [...parkings] };
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
