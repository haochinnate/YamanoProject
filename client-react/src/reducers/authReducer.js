import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    isAdminUser: null
};

const authReducer = (state = INITIAL_STATE, action) => {
   
    switch (action.type) {
        case SIGN_IN:
            // var isAdminUser = String(action.payload) === String(process.env.REACT_APP_GOOGLE_USER_ID);
            var isAdminUser = false;
    
            return { ...state, isSignedIn: true, userId: action.payload, isAdminUser: isAdminUser }
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null, isAdminUser: false }
        default:
            return state;
    }
};

export default authReducer;