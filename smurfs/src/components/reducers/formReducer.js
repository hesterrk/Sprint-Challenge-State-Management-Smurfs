import * as types from '../actions/actionTypes';


const initialState = {
    name: '',
    age: '',
    height: ''
    
}


export const formReducer = (state = initialState, action) => {

    switch(action.type) {

        case types.INPUT_CHANGE : 
        return {
            ...state,
            [action.payload.inputName] : action.payload.inputValue
    
        };
    
        case types.RESET_INPUT :
        return initialState
        
        default :
        return state
        }




}