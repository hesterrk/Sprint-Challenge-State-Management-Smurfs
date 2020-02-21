import axios from 'axios';
import * as types from './actionTypes';

export const fetchSmurfs = () =>  dispatch => {
    dispatch({
        type: types.FETCHING_SMURF_START
    });
    
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res);
        dispatch({
        type: types.FETCHING_SMURF_SUCCESS, payload: res.data
    });

    })
    .catch(err => {
        dispatch({
            type: types.FETCHING_SMURF_ERROR, payload: err.response

        });


    });


};


export function changeInput({inputName, inputValue}) {
    return {
        type: types.INPUT_CHANGE,
        payload: { inputName, inputValue}
    }
}


export const postNewSmurf = ({name, age, height}) => dispatch => {
    dispatch({
        type: types.POST_SMURF_START
    });
    dispatch({
        type: types.FORM_LOAD_START
    })


    axios.post('http://localhost:3333/smurfs', {
        name,
        age,
        height

    })
    .then(res => {
        dispatch({
            type: types.POST_SMURF_SUCCESS, payload: res.data

        })
        })
        .catch(err => {
            dispatch({
                type: types.POST_SMURF_ERROR, payload: err.response
                
            });

        })

        .finally(() => {
            dispatch({
                type: types.FORM_LOAD_STOP
            })
        })


}