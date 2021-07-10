import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CarModelForm extends Component {

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
        // console.log(formValues);
        this.props.onSubmit(formValues);
    };
    
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                {/* name, category, officialUrl, isActive, manufacturer */}

                <Field name="name" component={this.renderInput} label="名稱"/>
                <Field name="category" component={this.renderInput} label="車型"/>
                <Field name="officialUrl" component={this.renderInput} label="官方網站"/>
                <Field name="isActive" component={this.renderInput} label="IsActive"/>
                <Field name="manufacturer" component={this.renderInput} label="車廠"/>
                    
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
    
    if (!formValues.category) {
        errors.category = 'Category is required';
    }
    
    if (!formValues.isActive) {
        errors.isActive = 'IsActive is required';
    }

    if (!formValues.manufacturer) {
        errors.manufacturer = 'Manufacturer is required';
    }
    
    return errors;
};


export default reduxForm({
    form: 'carModelForm',
    validate
})(CarModelForm);
