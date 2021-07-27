import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCarmodel } from '../../../actions'
import CarModelForm from './CarModelForm'

class CarModelCreate extends Component {

    onSubmit(formValues) {
        console.log(formValues);
        // this.props.createCarmodel(formValues);
    }
    
    render() {
        return (
            <div>
                <h3>Create a carmodel</h3>
                <CarModelForm onSubmit={this.onSubmit}/>
            </div>
        );
    };

};


export default connect(
    null, 
    { createCarmodel }
)(CarModelCreate);
