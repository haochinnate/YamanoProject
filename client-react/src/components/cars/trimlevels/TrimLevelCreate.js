import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTrimLevel } from '../../../actions';
import TrimLevelForm from './TrimLevelForm';

class TrimLevelCreate extends Component {

    onSubmit = (formValues) => {
        console.log('onSubmit in TrimLevelCreate');
        console.log(formValues);
        this.props.createTrimLevel(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a TrimLevel</h3>
                <TrimLevelForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
};

export default connect(
    null,
    { createTrimLevel }
)(TrimLevelCreate)
