import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { render } from 'react-dom';

const ManufacturerForm = (props) => {
    
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const onSubmit = async values => {
        await sleep(300)
        // console.log(values);
        // console.log('submit in ManufacturerForm')
        // window.alert(JSON.stringify(values));
        props.onSubmit(values);
    }

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

    const renderError = ({error, touched}) => {
       
        if (touched && error) {
            console.log(error)
            console.log(touched)
            return (
                // <div className="invalid-feedback">{error}</div>
                <div className="text-danger">{error}</div>
            );
        }
    };

    const renderInput = ({ input, label, meta }) => {
        // console.log(input);
        // console.log(label);
        // console.log(meta);
        // const className = `mb-2 field ${meta.error && meta.touched ? 'error' : '' }`;
        const className = 'mb-2';
        // className="form-control"
    
        return (
            <div className={className}>
                <label className="form-label">{label}</label>
                <input {...input} autoComplete="off" className="form-control"></input>          
                {renderError(meta)}
            </div>
        );
    };

    const renderLevelSelection = ({ input, label, meta }) => {
        // const className = `mb-1 ${meta.error && meta.touched ? 'is-invalid' : '' }`;
        const className = 'mb-2';
        // console.log(input);
        return (
            <div className={className}>
                <label className="form-label">{label}</label>
                {/* <input {...input} autoComplete="off" className="form-control"></input> */}
                {/* <div>
                    <label>
                        <Field name
                    </label>
                </div>
                */}
                <select {...input} className="form-select" aria-label="Level select"
                    >
                    <option value="一般">一般</option>
                    <option value="豪華">豪華</option>
                </select>
                {renderError(meta)}
            </div>
        );
    }
    console.log(props)

    return (
        <Form onSubmit={onSubmit}
            initialValues={props.initialValues}
            validate={validate}
            render={( { handleSubmit, form, submitting, pristine, values } ) => (
                <form className="form" onSubmit={handleSubmit}>
                    <Field name="name" component={renderInput} label="名稱"/>
                    <Field name="chineseName" component={renderInput} label="中文名稱"/>
                    <Field name="level" component={renderLevelSelection} label="等級"/>
                    {/* {renderLevelSelection()} */}
                    <Field name="officialUrl" component={renderInput} label="官方網站"/>
                    <Field name="logoUrl" component={renderInput} label="Logo位置"/>
                
                    <button type="submit" className="mt-3 mb-3 btn btn-primary">Submit</button>
                </form>
            )}>

        </Form>
    );
};





export default ManufacturerForm;
// export default props => <Form {...props} component={ManufacturerForm} />