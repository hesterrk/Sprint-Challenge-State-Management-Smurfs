import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions/actionCreators';
import Loader from 'react-loader-spinner';

function DisplaySmurf(props) {

    return (
        <div>
         <button onClick={props.fetchSmurfs}>Get Smurfs!!</button>
         {!props.propsSmurfs && !props.propsIsLoading && (
            <h3>Get a List of Smurfs Here </h3>
        )}

        {props.propsIsLoading && (
            <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={300}
            />
        )}

                <div>
                 <h1>Smurfs: </h1>
                
                 {props.propsSmurfs && !props.propsIsLoading && (
                   <div>
                     {props.propsSmurfs.map(sm => (
                       <div>
                       <h2> {sm.name} </h2>
                       <p> {sm.age} </p>
                       <p>{sm.height} </p>
                        </div>

                       
                    ))}
                   </div>
                 )}
             </div>

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