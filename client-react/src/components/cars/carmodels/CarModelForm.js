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
    } = useInput({ validateValue: isNotEmpty, initialValue: 'initial really?' });

    const {
        value: enteredBodyStyle, 
        hasError: bodyStyleInputHasError,
        isValid: enteredBodyStyleIsvalid,
        valueChangedHandler: bodyStyleChangedHandler,
        inputBlurHandler: bodyStyleBlurHandler,
        reset: resetBodyStyleInput
    } = useInput({ validateValue: isNotEmpty });

    const {
        value: enteredOfficialUrl, 
        valueChangedHandler: officialUrlChangedHandler,
        inputBlurHandler: officialUrlBlurHandler,
        reset: resetOfficialUrlInput
    } = useInput( { validateValue: doNotCare });

    const {
        value: enteredIsArchived, 
        hasError: isArchivedInputHasError,
        isValid: enteredIsArchivedIsvalid,
        valueChangedHandler: isArchivedChangedHandler,
        inputBlurHandler: isArchivedBlurHandler,
        reset: resetIsArchivedInput
    } = useInput({ validateValue: isNotEmpty });

    const {
        value: enteredManufacturerId, 
        hasError: manufacturerIdInputHasError,
        isValid: enteredManufacturerIdIsvalid,
        valueChangedHandler: manufacturerIdChangedHandler,
        inputBlurHandler: manufacturerIdBlurHandler,
        reset: resetManufacturerIdInput
    } = useInput({ validateValue: isNotEmpty });

    const {
        value: enteredAlias, 
        valueChangedHandler: aliasChangedHandler,
        inputBlurHandler: aliasBlurHandler,
        reset: resetAliasInput
    } = useInput({ validateValue: doNotCare, initialValue: 'eee,ooo' });

    const {
        value: enteredReleaseDate, 
        hasError: releaseDateInputHasError,
        isValid: enteredReleaseDateIsvalid,
        valueChangedHandler: releaseDateChangedHandler,
        inputBlurHandler: releaseDateBlurHandler,
        reset: resetReleaseDateInput
    } = useInput({ validateValue: doNotCare });

    const {
        value: enteredYearsInfo, 
        valueChangedHandler: yearsInfoChangedHandler,
        inputBlurHandler: yearsInfoBlurHandler,
        reset: resetYearsInfoInput
    } = useInput({ validateValue: doNotCare });

    const {
        value: enteredMainImage, 
        valueChangedHandler: mainImageChangedHandler,
        inputBlurHandler: mainImageBlurHandler,
        reset: resetMainImageInput
    } = useInput({ validateValue: doNotCare });

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
    // enteredName = 'some initial';

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(formValues);

        if (!enteredNameIsvalid) {
            return;
        }

        console.log(event);
        console.log(enteredName);
        console.log(enteredReleaseDate);
        console.log(enteredAlias);
        console.log(enteredIsArchived);
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

            
            {/* Body Style */}
         
            {/* Official Url */}
            <div className="col-md-4">
                <label htmlFor="officialUrl" className="form-label">官網</label>
                <input type="text" className="form-control" 
                    id="officialUrl" 
                    value={enteredOfficialUrl} onChange={officialUrlChangedHandler} onBlur={officialUrlBlurHandler}>
                </input>
            </div>

            {/* IsArchived */}
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" 
                        checked={enteredIsArchived}
                        onChange={isArchivedChangedHandler} onBlur={isArchivedBlurHandler}
                        id="isArchived"></input>
                    <label className="form-check-label" htmlFor="isArchived">
                        已下市
                    </label>
                </div>
            </div> 

            {/* ManufacturerId */}
        
            {/* Alias */}
            <div className="col-md-4">
                <label htmlFor="alias" className="form-label">別稱(以,區隔)</label>
                <input type="text" className="form-control" 
                    id="alias" 
                    value={enteredAlias} onChange={aliasChangedHandler} onBlur={aliasBlurHandler}>
                </input>
            </div>

            {/* Release Date */}
            <div className="col-md-4">
                <label htmlFor="releaseDate" className="form-label">發表日期</label>
                <input type="date" className="form-control" 
                    id="releaseDate" 
                    value={enteredReleaseDate} onChange={releaseDateChangedHandler} onBlur={releaseDateBlurHandler}>
                </input>
            </div>
        
            {/* Years Info */}
            <div className="col-md-4">
                <label htmlFor="yearsInfo" className="form-label">年式</label>
                <input type="text" className="form-control" 
                    id="yearsInfo" 
                    value={enteredYearsInfo} onChange={yearsInfoChangedHandler} onBlur={yearsInfoBlurHandler}>
                </input>
            </div>

            {/* Main Image   */}
            <div className="col-md-4">
                <label htmlFor="mainImage" className="form-label">主要圖片</label>
                <input type="text" className="form-control" 
                    id="mainImage" 
                    value={enteredMainImage} onChange={mainImageChangedHandler} onBlur={mainImageBlurHandler}>
                </input>
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
