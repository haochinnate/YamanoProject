import _ from 'lodash';
import {
    CREATE_CARMODEL,
    FETCH_CARMODEL,
    FETCH_CARMODELS_BY_MANUFACTURER,
    FETCH_CARMODELS,
    EDIT_CARMODEL,
    DELETE_CARMODEL
} from '../actions/types'


const carmodelReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_CARMODEL:
            return { ...state, [action.payload.id]: action.payload };
        
        case FETCH_CARMODEL:
            return { ...state, [action.payload.id]: action.payload };

        case FETCH_CARMODELS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };

        case FETCH_CARMODELS_BY_MANUFACTURER:
            // return { ...state, ..._.mapKeys(action.payload, 'id') };
            return { ..._.mapKeys(action.payload, 'id') };

        case EDIT_CARMODEL:
            return { ...state, [action.payload.id]: action.payload };
        
        case DELETE_CARMODEL:
            return _.omit(state, action.payload);     

        default:
            return state;
    }
};

export default carmodelReducer;
