import {ADD_LOG, CLEAN_LOG} from './actionTypes';
import initialState from './data';

export default function logReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LOG: {
      const {linea} = action.payload;
      return {...state, lineas: [...state.lineas, linea]};
    }
    case CLEAN_LOG: {
      return {
        ...state,
        lineas: [],
      };
    }
    default:
      return state;
  }
}
