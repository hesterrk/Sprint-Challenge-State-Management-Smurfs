import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions/actionCreators';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Button = styled.button `
    box-shadow:inset 0px 1px 0px 0px #e184f3;
    background:linear-gradient(to bottom, #c123de 5%, #a20dbd 100%);
	background-color: lavender;
	border-radius:6px;
	border:1px solid #a511c0;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
    text-shadow:0px 1px 0px #9b14b3;
    margin-top: 5px;
`






function DisplaySmurf(props) {

    return (
        <div>
         <Button onClick={props.fetchSmurfs}>Get Smurfs!!</Button>
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