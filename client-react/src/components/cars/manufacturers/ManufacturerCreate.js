import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createManufacturer } from '../../../actions'
import ManufacturerForm from './ManufacturerForm'


class ManufacturerCreate extends Component {


    onSubmit = (formValues) => {
        // console.log(formValues);
        this.props.createManufacturer(formValues);
    }
    
    render() {
        return (
            <div>
                <h3>Create a Manufacturer</h3>
                <ManufacturerForm onSubmit={this.onSubmit}/>
            </div>
        );
    };

};


export default connect(
    null, 
    { createManufacturer }
)(ManufacturerCreate);
