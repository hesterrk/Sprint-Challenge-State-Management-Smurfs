import React from 'react';
import { connect } from 'react-redux';
import { changeInput, postNewSmurf } from './actions/actionCreators';



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
           <form onSubmit={onSubmit}>
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
        </form> 

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
