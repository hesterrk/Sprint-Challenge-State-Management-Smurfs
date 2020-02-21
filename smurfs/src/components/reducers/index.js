import { formReducer } from './formReducer';
import { smurfReducer } from './smurfReducer';
import { formLoadingReducer } from './formSpinnerReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    formReducer,
    smurfReducer,
    formLoadingReducer
   
});