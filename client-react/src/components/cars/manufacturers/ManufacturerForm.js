import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

class ManufacturerForm extends Component {

    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="invalid-feedback">{error}</div>
            );
        }
    };

    renderInput = ({ input, label, meta }) => {
        // console.log(input);
        // console.log(label);
        // console.log(meta);
        const className = `mb-1 field ${meta.error && meta.touched ? 'error' : '' }`;
        // const className = 'mb-1 field';
        // className="form-control"
        
        return (
            <div className={className}>
                <label className="form-label">{label}</label>
                <input {...input} autoComplete="off" ></input>
                {this.renderError(meta)}
            </div>
        );
    };

    renderLevelSelection = ({ input, label, meta }) => {
        // const className = `mb-1 ${meta.error && meta.touched ? 'is-invalid' : '' }`;
        const className = 'mb-1 field';
        console.log(input);
        return (
            <div className={className}>
                <label className="form-label">{label}</label>
                {/* <input {...input} autoComplete="off" className="form-control"></input> */}
                <select {...input} className="form-select" aria-label="Level select">
                    <option value="1">一般</option>
                    <option value="2">豪華</option>
                </select>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        // preventDefault();
        console.log(formValues);
        // this.props.onSubmit(formValues);
    };
    
    render() {
        return (
                <form onSubmit={this.onSubmit} className="form">
                    <Field name="name" component={this.renderInput} label="名稱"/>
                    <Field name="chineseName" component={this.renderInput} label="中文名稱"/>
                    <Field name="level" component={this.renderLevelSelection} label="等級"/>
                    <Field name="officialUrl" component={this.renderInput} label="官方網站"/>
                    <Field name="logoUrl" component={this.renderInput} label="Logo位置"/>
                
                    <button type="submit" className="mt-3 btn btn-primary">Submit</button>
                </form>
            // <Form initailValues={this.props.initialValues}
            //     onSubmit={this.onSubmit}
            //     validate={validate}
            //     render={( { handleSubmit } ) => {
                
            //         <form onSubmit={handleSubmit} className="form">
            //             <Field name="name" component={this.renderInput} label="名稱"/>
            //             <Field name="chineseName" component={this.renderInput} label="中文名稱"/>
            //             <Field name="level" component={this.renderLevelSelection} label="等級"/>
            //             <Field name="officialUrl" component={this.renderInput} label="官方網站"/>
            //             <Field name="logoUrl" component={this.renderInput} label="Logo位置"/>
                    
            //             <button type="submit" className="mt-3 btn btn-primary">Submit</button>
            //         </form>
            //     }}>
            // </Form>  
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
           
    return errors;
};


// export default ManufacturerForm;
export default props => <Form {...props} component={ManufacturerForm} />