import * as types from '../actions/actionTypes';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}


export function smurfReducer(state = initialState, action) {

    switch(action.type) {

        case types.FETCHING_SMURF_START :
            return {
                ...state,
                isLoading: true
            };

        case types.FETCHING_SMURF_SUCCESS :
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            };

        case types.FETCHING_SMURF_ERROR :
            return {
            ...state,
            error: action.payload
            };


        case types.POST_SMURF_START :
            return {
            ...state,
            isLoading: true
            };

        case types.POST_SMURF_SUCCESS :
            return {
            ...state,
            isLoading: false,
            // smurfs: state.smurfs.concat(action.payload)
            smurfs: [...state.smurfs, action.payload]
            };

        case types.POST_SMURF_ERROR : 
            return {
            ...state,
            error: action.payload
            };
            
        default :
            return state
    }

}