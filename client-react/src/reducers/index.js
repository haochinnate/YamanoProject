import { combineReducers } from "redux";
import authReducer from "./authReducer";
import manufacturerReducer from "./manufacturerReducer";
import carmodelReducer from "./carmodelReducer";
import trimlevelReducer from "./trimlevelReducer";

export default combineReducers({
    auth: authReducer,
    manufacturers: manufacturerReducer,
    carmodels: carmodelReducer,
    trimlevels: trimlevelReducer
});