import _ from 'lodash';
import {
    CREATE_MANUFACTURER,
    FETCH_MANUFACTURER,
    FETCH_MANUFACTURERS,
    EDIT_MANUFACTURER,
    DELETE_MANUFACTURER
} from '../actions/types';

const manufacturerReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_MANUFACTURER:
            return { ...state, [action.payload.id]: action.payload };

        case FETCH_MANUFACTURER:
            return { ...state, [action.payload.id]: action.payload };
        
        case FETCH_MANUFACTURERS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        
        case EDIT_MANUFACTURER:
            return { ...state, [action.payload.id]: action.payload };
        
        case DELETE_MANUFACTURER:
            return _.omit(state, action.payload);
            
        default:
            return state;
    }
};

export default manufacturerReducer;