import React from 'react';
import useInput from '../../../hooks/useInput';

const isNotEmpty = value => value.trim() !== '';
const doNotCare = value => true;

const CarModelForm = (props) => {

    // <div>{carmodel.name}</div>
    // <div>{carmodel.bodyStyle}</div>
    // <div>{carmodel.officialUrl}</div>
    // <div>{carmodel.isArchived}</div>
    // <div>{carmodel.manufacturerId}</div>
    // <div>{carmodel.alias}</div>
    // <div>{carmodel.releaseDate}</div>
    // <div>{carmodel.yearsInfo}</div>
    // <div>{carmodel.mainImage}</div>  

    const {
        value: enteredName, 
        hasError: nameInputHasError,
        isValid: enteredNameIsvalid,
        valueChangedHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(isNotEmpty);

    const {
        value: enteredBodyStyle, 
        hasError: bodyStyleInputHasError,
        isValid: enteredBodyStyleIsvalid,
        valueChangedHandler: bodyStyleChangedHandler,
        inputBlurHandler: bodyStyleBlurHandler,
        reset: resetBodyStyleInput
    } = useInput(isNotEmpty);

    const {
        value: enteredOfficialUrl, 
        hasError: officialUrlInputHasError,
        isValid: enteredOfficialUrlIsvalid,
        valueChangedHandler: officialUrlChangedHandler,
        inputBlurHandler: officialUrlBlurHandler,
        reset: resetOfficialUrlInput
    } = useInput(doNotCare);

    const {
        value: enteredIsArchived, 
        hasError: isArchivedInputHasError,
        isValid: enteredIsArchivedIsvalid,
        valueChangedHandler: isArchivedChangedHandler,
        inputBlurHandler: isArchivedBlurHandler,
        reset: resetIsArchivedInput
    } = useInput(isNotEmpty);

    const {
        value: enteredManufacturerId, 
        hasError: manufacturerIdInputHasError,
        isValid: enteredManufacturerIdIsvalid,
        valueChangedHandler: manufacturerIdChangedHandler,
        inputBlurHandler: manufacturerIdBlurHandler,
        reset: resetManufacturerIdInput
    } = useInput(isNotEmpty);

    const {
        value: enteredAlias, 
        hasError: aliasInputHasError,
        isValid: enteredAliasIsvalid,
        valueChangedHandler: aliasChangedHandler,
        inputBlurHandler: aliasBlurHandler,
        reset: resetAliasInput
    } = useInput(doNotCare);

    const {
        value: enteredReleaseDate, 
        hasError: releaseDateInputHasError,
        isValid: enteredReleaseDateIsvalid,
        valueChangedHandler: releaseDateChangedHandler,
        inputBlurHandler: releaseDateBlurHandler,
        reset: resetReleaseDateInput
    } = useInput(doNotCare);

    const {
        value: enteredYearsInfo, 
        hasError: yearsInfoInputHasError,
        isValid: enteredYearsInfoIsvalid,
        valueChangedHandler: yearsInfoChangedHandler,
        inputBlurHandler: yearsInfoBlurHandler,
        reset: resetYearsInfoInput
    } = useInput(doNotCare);

    const {
        value: enteredMainImage, 
        hasError: mainImageInputHasError,
        isValid: enteredMainImageIsvalid,
        valueChangedHandler: mainImageChangedHandler,
        inputBlurHandler: mainImageBlurHandler,
        reset: resetMainImageInput
    } = useInput(doNotCare);

    // const renderError = ({hasError, errorMessage}) =>  {
    //     const feedbackClass = hasError ? 'invalid-feedback' : 'valid-feedback'
    //     console.log(feedbackClass);
    //     console.log(errorMessage);
    //     if (hasError) {
    //         return (
    //             <div className={feedbackClass}>
    //                 {errorMessage}
    //             </div>
    //         );
    //     }
    // };

    const nameFeedbackClass = nameInputHasError ? 'invalid-feedback' : 'valid-feedback'


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

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(formValues);

        if (!enteredNameIsvalid) {
            return;
        }

        console.log(event);
        console.log(enteredName);
        // props.onSubmit(values);

        // props.onSubmit(formValues);
    };
    
    return (

        // <div>{carmodel.name}</div>
        // <div>{carmodel.bodyStyle}</div>
        // <div>{carmodel.officialUrl}</div>
        // <div>{carmodel.isArchived}</div>
        // <div>{carmodel.manufacturerId}</div>
        // <div>{carmodel.alias}</div>
        // <div>{carmodel.releaseDate}</div>
        // <div>{carmodel.yearsInfo}</div>
        // <div>{carmodel.mainImage}</div>  
        // needs-validation noValidate
        <form className="row g-3 needs-validation" noValidate onSubmit={onSubmit}>
            {/* Name */}
            <div className="col-md-4">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" 
                    id="name" 
                    value={enteredName} onChange={nameChangedHandler} onBlur={nameBlurHandler}>
                </input>
                {/* {renderError({ hasError: nameInputHasError, errorMessage: 'Please enter Name' })} */}
                {nameInputHasError && <p style={{ color: 'red' }}>Name must not be empty</p>}
            </div>
{/*                 
            <div className="col-md-4">
                <label for="validationCustom02" className="form-label">Last name</label>
                <input type="text" className="form-control" id="validationCustom02" value="Otto">
                </input>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
                
            <div className="col-md-4">
                <label for="validationCustomUsername" className="form-label">Username</label>
                <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend">
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
            </div> */}
                
            <div className="col-12">
                <button className="btn btn-primary mt-3 mb-3" type="submit">Submit</button>
            </div>
        </form>
    );
};

export default CarModelForm;
