import {AUTH_LOGIN, AUTH_LOGOUT, SET_EAGLES} from './actionTypes';

const initialState = {
  loggedIn: false,
  user: {},
  appName: 'CarPark',
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        ...state,
        loggedIn: true,
        user: {...action.payload},
      };
    }
    case AUTH_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {},
      };
    }
    case SET_EAGLES: {
      return {
        ...state,
        user: {
          ...state.user,
          eagles: state.user.eagles.map(este =>
            este.name === action.payload.eagle
              ? {
                  ...este,
                  datos: action.payload.data.data,
                  status: action.payload.data.status,
                  progress: action.payload.data.progress,
                  checked: action.payload.data.checked,
                  locked: action.payload.data.locked,
                }
              : este,
          ),
        },
      };
    }
    default:
      return state;
  }
}
