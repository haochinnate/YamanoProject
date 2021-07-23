import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

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
            <Form>
                initialValues={this.props.initialValues}
                onSubmit={this.onSubmit}
                validate={validate}
                render={( { handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="ui form error">
                        {/* name, category, officialUrl, isArchived, manufacturer */}
    
                        <Field name="name" component={this.renderInput} label="名稱"/>
                        <Field name="category" component={this.renderInput} label="車型"/>
                        <Field name="officialUrl" component={this.renderInput} label="官方網站"/>
                        <Field name="isArchived" component={this.renderInput} label="IsArchived"/>
                        <Field name="manufacturer" component={this.renderInput} label="車廠"/>
                        <Field name="releaseDate" component={this.renderInput} label="發布日期"/>
                        <Field name="yearsInfo" component={this.renderInput} label="年式資訊"/>
    
                        <button className="ui button primary">Create</button>
                    </form>
                )}
            </Form>
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
    
    if (!formValues.isArchived) {
        errors.isArchived = 'IsArchived is required';
    }

    if (!formValues.manufacturer) {
        errors.manufacturer = 'Manufacturer is required';
    }
    
    return errors;
};


export default CarModelForm;
