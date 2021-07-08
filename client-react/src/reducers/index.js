import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import authReducer from "./authReducer";
import manufacturerReducer from "./manufacturerReducer";
import carmodelReducer from "./carmodelReducer";

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    manufacturers: manufacturerReducer,
    carmodels: carmodelReducer
});