import manufacturers from "../apis/manufacturers";
import history from "../history";
import carmodels from "../apis/carmodels";
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_MANUFACTURER,
    FETCH_MANUFACTURERS,
    FETCH_MANUFACTURER,
    DELETE_MANUFACTURER,
    EDIT_MANUFACTURER,
    CREATE_CARMODEL,
    FETCH_CARMODELS,
    FETCH_CARMODEL,
    DELETE_CARMODEL,
    EDIT_CARMODEL
} from "./types";

export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

// manufacturers
export const createManufacturer = (formValues) => async (dispatch) => {
    const response = await manufacturers.post('/manufacturers', formValues);

    dispatch({ type: CREATE_MANUFACTURER, payload: response.data });

    history.push('/cars');
};

export const fetchManufacturers = () => async (dispatch) => {
    const response = await manufacturers.get('/manufacturers');

    dispatch({ type: FETCH_MANUFACTURERS, payload: response.data });
};

export const fetchManufacturer = (id) => async (dispatch) => {
    const response = await manufacturers.get(`/manufacturers/${id}`);

    dispatch({ type: FETCH_MANUFACTURER, payload: response.data });
};

export const editManufacturer = (id, formValues) => async (dispatch) => {
    const response = await manufacturers.patch(`/manufacturers/${id}`, formValues);

    dispatch({ type: EDIT_MANUFACTURER, payload: response.data });

    history.push('/cars');
};

export const deleteManufacturer = (id) => async (dispatch) => {
    await manufacturers.delete(`/manufacturers/${id}`);

    dispatch({ type: DELETE_MANUFACTURER, payload: id });

    history.push('/cars');
};

// carmodels
export const createCarmodel = (formValues) => async (dispatch) => {
    const response = await carmodels.post('/carmodels', formValues);

    dispatch({ type: CREATE_CARMODEL, payload: response.data });
};

export const fetchCarmodels = () => async (dispatch) => {
    const response = await carmodels.get('/carmodels');

    dispatch({ type: FETCH_CARMODELS, payload: response.data });
};

export const fetchCarmodelsByManufacturer = (manufacturer) => async (dispatch) => {
    // GET /contacts/{cID}/notes
    const response = await carmodels.get(`/manufacturers/${manufacturer.id}/carmodels`);

    dispatch({ type: FETCH_CARMODELS, payload: response.data });
};

export const fetchCarmodel = (id) => async (dispatch) => {
    const response = await carmodels.get(`/carmodels/${id}`);

    dispatch({ type: FETCH_CARMODEL, payload: response.data });
};

export const editCarmodel = (id, formValues) => async (dispatch) => {
    const response = await carmodels.patch(`/carmodels/${id}`, formValues);

    dispatch({ type: EDIT_CARMODEL, payload: response.data });
    
    history.push('/cars');
};

export const deleteCarmodel = (id) => async (dispatch) => {
    await carmodels.delete(`/carmodels/${id}`);

    dispatch({ type: DELETE_CARMODEL, payload: id });

    history.push('/cars');
};

