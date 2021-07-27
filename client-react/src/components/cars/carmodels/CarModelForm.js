import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

class CarModelForm extends Component {

    // renderError({error, touched}) {
    //     if (touched && error) {
    //         return (
    //             <div className="ui error message">
    //                 <div className="header">{error}</div>
    //             </div>
    //         );
    //     }
    // };

    // renderInput = ({ input, label, meta }) => {
    //     const className = `field ${meta.error && meta.touched ? 'error' : '' }`;
        
    //     return (
    //         <div className={className}>
    //             <label>{label}</label>
    //             <input {...input} autoComplete="off"></input>
    //             {this.renderError(meta)}
    //         </div>
    //     );
    // };

    onSubmit(formValues) {
        // console.log(formValues);
        this.props.onSubmit(formValues);
    };
    
    render() {
        return (
            <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" value="Mark" required>
    </input>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" value="Otto" required>
    </input>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      </input>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required></input>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required></input>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
                        // {/* <Field name="name" component={this.renderInput} label="名稱"/>
                        // <Field name="category" component={this.renderInput} label="車型"/>
                        // <Field name="officialUrl" component={this.renderInput} label="官方網站"/>
                        // <Field name="isArchived" component={this.renderInput} label="IsArchived"/>
                        // <Field name="manufacturer" component={this.renderInput} label="車廠"/>
                        // <Field name="releaseDate" component={this.renderInput} label="發布日期"/>
                        // <Field name="yearsInfo" component={this.renderInput} label="年式資訊"/> */}
                        // {/* // <div>{carmodel.id}</div>
                        // // <div>{carmodel.name}</div>
                        // // <div>{carmodel.bodyStyle}</div>
                        // // <div>{carmodel.officialUrl}</div>
                        // // <div>{carmodel.isArchived}</div>
                        // // <div>{carmodel.manufacturerId}</div>
                        // // <div>{carmodel.alias}</div>
                        // // <div>{carmodel.releaseDate}</div>
                        // // <div>{carmodel.yearsInfo}</div>
                        // // <div>{carmodel.mainImage}</div>  */}

                        // {/* <button type="submit" className="mt-3 mb-3 btn btn-primary">Submit</button> */}
        );
    };

};

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

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
