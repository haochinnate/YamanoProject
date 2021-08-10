import _ from 'lodash';
import {
    CREATE_TRIMLEVEL,
    FETCH_TRIMLEVEL,
    FETCH_TRIMLEVELS,
    EDIT_TRIMLEVEL,
    DELETE_TRIMLEVEL
} from '../actions/types';

const trimlevelReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_TRIMLEVEL:
            return { ...state, [action.payload.id]: action.payload };
        
        case FETCH_TRIMLEVEL:
            return { ...state, [action.payload.id]: action.payload };

        case FETCH_TRIMLEVELS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };

        case EDIT_TRIMLEVEL:
            return { ...state, [action.payload.id]: action.payload };
        
        case DELETE_TRIMLEVEL:
            return _.omit(state, action.payload);     

        default:
            return state;
    }
};

export default trimlevelReducer;
