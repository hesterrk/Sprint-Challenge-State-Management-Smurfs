import * as types from '../actions/actionTypes';

const initialState = {

    formLoading: false 
}

export function formLoadingReducer(state = initialState, action) {
    switch(action.type) {
        case types.FORM_LOAD_START :
            return {
                formLoading: true
            };

            case types.FORM_LOAD_STOP :
                return initialState


            default :
            return state
    }




}