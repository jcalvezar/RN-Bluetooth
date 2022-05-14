import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import parkingsReducer from "./parkings/reducer";
import vehiclesReducer from "./vehicles/reducer";
import logReducer from "./desarrollo/reducer";

export default combineReducers({
  authReducer,
  parkingsReducer,
  vehiclesReducer,
  logReducer,
});
