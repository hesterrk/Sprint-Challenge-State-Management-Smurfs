import React from 'react';
import { connect } from 'react-redux';
import { changeInput, postNewSmurf } from './actions/actionCreators';
import styled from 'styled-components';

const Form = styled.form `
border: 5px dotted lavender;
padding: 10px 0px 10px 0px;
margin: 10px 50px 10px 50px;

`

function SmurfForm(props) {

    const onChange = e => {
    props.changeInput({
            inputName: e.target.name,
            inputValue: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        props.postNewSmurf({
            name: props.propsName,
            age: props.propsAge,
            height: props.propsHeight
        })
        
    }


    if(props.propsLoader) {
        return <div>Sending Your Smurf...</div>
    }


    return (
        <div>
           <Form onSubmit={onSubmit}>
        <label> Name:<br></br>
        <input 
        value={props.propsName}
        onChange={onChange}
        name="name"

        />
        </label><br></br>

        <label> Age: <br></br>
        <input 
        value={props.propsAge}
        onChange={onChange}
        name="age"

        />

        </label> <br></br>
        <label> Height: <br></br>
        <input 
        value={props.propsHeight}
        onChange={onChange}
        name="height"

        />
        </label> <br></br>
        <input type="submit" />
        </Form> 

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
