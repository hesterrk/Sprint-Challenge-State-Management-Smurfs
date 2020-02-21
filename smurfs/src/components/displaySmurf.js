import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions/actionCreators';
// import Loader from 'react-loader-spinner';

function DisplaySmurf(props) {

    return (
        <div>






        </div>
    )
}


const mapStateToProps = state => {
    return {
        propsSmurfs: state.smurfReducer.smurfs,
        propsIsLoading: state.smurfReducer.isLoading,
        propsError: state.smurfReducer.error 
    };
};


export default connect(
    mapStateToProps,
    {fetchSmurfs}
    )(DisplaySmurf);