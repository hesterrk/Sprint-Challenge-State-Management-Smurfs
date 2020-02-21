import React from 'react';
import { connect } from 'react-redux';
import { changeInput, postNewSmurf } from './actions/actionCreators';



function SmurfForm(props) {

    return (
        <div>

        </div>
    )

}


const mapStateToProps = state => {
    return {
        propsName: state.formReducer.name,
        propsAge: state.formReducer.age,
        propsHeight: state.formReducer.height,
        propsLoader: state.formLoadingReducer.formLoading
    
    };
};


export default connect(
    mapStateToProps,
    {changeInput, postNewSmurf}
    )(SmurfForm);
