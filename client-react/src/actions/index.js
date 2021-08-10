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
    EDIT_CARMODEL,
    CREATE_TRIMLEVEL,
    FETCH_TRIMLEVELS,
    FETCH_TRIMLEVEL,
    DELETE_TRIMLEVEL,
    EDIT_TRIMLEVEL
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

export const fetchManufacturerByName = (name) => async (dispatch) => {
    
    const response = await manufacturers.get('/manufacturers', { params: { name } });
    // console.log('fetchManufacturerByName');
    // console.log(response);
    dispatch({ type: FETCH_MANUFACTURERS, payload: response.data });
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
    // console.log(response.data)
    dispatch({ type: FETCH_CARMODELS, payload: response.data });
};

export const fetchCarmodel = (id) => async (dispatch) => {
    const response = await carmodels.get(`/carmodels/${id}`);

    dispatch({ type: FETCH_CARMODEL, payload: response.data });
};

export const fetchCarmodelByName = (manufacturerName, carmodleName) => async (dispatch) => {
    // /comments?author.name=typicode
    const response = await carmodels.get(`/carmodels`, { params: { 
                'manufacturer.name': manufacturerName,
                'name': carmodleName
            } });
    // console.log('fetchCarmodelByName');
    // console.log(manufacturerName);
    // console.log(carmodleName);
    // console.log(response);
    // response.data is an array, so use [0] to get first item
    dispatch({ type: FETCH_CARMODEL, payload: response.data[0] });
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

// trimlevels
export const createTrimLevel = (formValues) => async (dispatch) => {
    const response = await carmodels.post('/trimlevels', formValues);

    dispatch({ type: CREATE_TRIMLEVEL, payload: response.data });
};

export const fetchTrimLevels = () => async (dispatch) => {
    const response = await carmodels.get('/trimlevels');

    dispatch({ type: FETCH_TRIMLEVELS, payload: response.data });
};

export const fetchTrimLevelsByCarmodel = (carmodel) => async (dispatch) => {
    // GET /contacts/{cID}/notes
    const response = await carmodels.get(`/carmodels/${carmodel.id}/trimlevels`);
    // console.log(response.data)
    dispatch({ type: FETCH_TRIMLEVELS, payload: response.data });
};

export const fetchTrimLevel = (id) => async (dispatch) => {
    const response = await carmodels.get(`/trimlevels/${id}`);

    dispatch({ type: FETCH_TRIMLEVEL, payload: response.data });
};

export const fetchTrimLevelByName = (manufacturerName, carmodleName, trimlevelName) => async (dispatch) => {
    // /comments?author.name=typicode
    const response = await carmodels.get(`/trimlevels`, { params: { 
                'carmodel.manufacturer.name': manufacturerName,
                'carmodel.name': carmodleName,
                'name': trimlevelName
            } });
    // console.log('fetchCarmodelByName');
    // console.log(manufacturerName);
    // console.log(carmodleName);
    // console.log(response);
    // response.data is an array, so use [0] to get first item
    dispatch({ type: FETCH_TRIMLEVEL, payload: response.data[0] });
};

export const editTrimLevel = (id, formValues) => async (dispatch) => {
    const response = await carmodels.patch(`/trimlevels/${id}`, formValues);

    dispatch({ type: EDIT_TRIMLEVEL, payload: response.data });
    
    history.push('/cars');
};

export const deleteTrimLevel = (id) => async (dispatch) => {
    await carmodels.delete(`/trimlevels/${id}`);

    dispatch({ type: DELETE_TRIMLEVEL, payload: id });

    history.push('/cars');
};
