import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ManufacturerCreate extends Component {

    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    };

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : '' }`;
        
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"></input>
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit(formValues) {
        console.log(formValues);
    }
    
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="name" component={this.renderInput} label="名稱"/>
                <Field name="chineseName" component={this.renderInput} label="中文名稱"/>
                <Field name="level" component={this.renderInput} label="等級"/>
                <Field name="officialUrl" component={this.renderInput} label="官方網站"/>
                <Field name="logoUrl" component={this.renderInput} label="Logo位置"/>
                    
                <button className="ui button primary">Create</button>
            </form>
        );
    };

};


const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = 'Name is required';
    }
    
    if (!formValues.chineseName) {
        errors.chineseName = 'Chinese Name is required';
    }
    
    if (!formValues.level) {
        errors.level = 'Level is required';
    }
    
    if (!formValues.officialUrl) {
        errors.officialUrl = 'Official URL is required';
    }
    
    return errors;
};


export default reduxForm({
    form: 'manufacturerCreate',
    validate
})(ManufacturerCreate);
