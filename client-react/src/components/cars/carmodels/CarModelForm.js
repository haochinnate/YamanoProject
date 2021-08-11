import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { BODY_STYLES_ZH } from '../../../consts/bodyStyles';
import { fetchManufacturers } from '../../../actions';

const isNotEmpty = value => String(value).trim() !== '';
const doNotCare = value => true;

const CarModelForm = (props) => {
    
    useEffect(() =>{
        // console.log('some call useEffect!!')
        props.fetchManufacturers();
        // console.log(props.manufacturers);
        // console.log(props.initialValues);
    }, []);

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
    } = useInput({ 
        validateValue: isNotEmpty, 
        initialValue: props.initialValues === undefined ? '' : props.initialValues.name 
    });

    const {
        value: enteredBodyStyle, 
        hasError: bodyStyleInputHasError,
        isValid: enteredBodyStyleIsvalid,
        valueChangedHandler: bodyStyleChangedHandler,
        inputBlurHandler: bodyStyleBlurHandler,
        reset: resetBodyStyleInput
    } = useInput({ 
        validateValue: isNotEmpty,
        initialValue: props.initialValues === undefined ? '' : props.initialValues.bodyStyle 
    });

    const {
        value: enteredOfficialUrl, 
        valueChangedHandler: officialUrlChangedHandler,
        inputBlurHandler: officialUrlBlurHandler,
        reset: resetOfficialUrlInput
    } = useInput( { 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? '' : props.initialValues.officialUrl 
    });

    const {
        value: enteredIsArchived, 
        hasError: isArchivedInputHasError,
        isValid: enteredIsArchivedIsvalid,
        valueChangedHandler: isArchivedChangedHandler,
        inputBlurHandler: isArchivedBlurHandler,
        reset: resetIsArchivedInput
    } = useInput({ 
        validateValue: doNotCare, initialValue: false,
        initialValue: props.initialValues === undefined ? '' : props.initialValues.isArchived 
    });

    const {
        value: enteredManufacturerId, 
        hasError: manufacturerIdInputHasError,
        isValid: enteredManufacturerIdIsvalid,
        valueChangedHandler: manufacturerIdChangedHandler,
        inputBlurHandler: manufacturerIdBlurHandler,
        reset: resetManufacturerIdInput
    } = useInput({ 
        validateValue: isNotEmpty,
        initialValue: props.initialValues === undefined ? '' : props.initialValues.manufacturerId 
    });

    const {
        value: enteredAlias, 
        valueChangedHandler: aliasChangedHandler,
        inputBlurHandler: aliasBlurHandler,
        reset: resetAliasInput
    } = useInput({ 
        validateValue: doNotCare, 
        initialValue: props.initialValues === undefined ? '' : props.initialValues.alias 
    });

    const {
        value: enteredReleaseDate, 
        hasError: releaseDateInputHasError,
        isValid: enteredReleaseDateIsvalid,
        valueChangedHandler: releaseDateChangedHandler,
        inputBlurHandler: releaseDateBlurHandler,
        reset: resetReleaseDateInput
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? '' : props.initialValues.releaseDate 
    });

    const {
        value: enteredYearsInfo, 
        valueChangedHandler: yearsInfoChangedHandler,
        inputBlurHandler: yearsInfoBlurHandler,
        reset: resetYearsInfoInput
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? '' : props.initialValues.yearsInfo 
    });

    const {
        value: enteredMainImage, 
        valueChangedHandler: mainImageChangedHandler,
        inputBlurHandler: mainImageBlurHandler,
        reset: resetMainImageInput
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? '' : props.initialValues.mainImage 
    });


    const renderBodyStylesOptions = () => {
        const optionsArray = Object.keys(BODY_STYLES_ZH).map((key) => [Number(key), BODY_STYLES_ZH[key]]);
    
        return optionsArray.map(bodyStyle => {
            return (
                <option value={bodyStyle[0]} key={bodyStyle[0]}>
                    {bodyStyle[1]}
                </option>
            );
        });
    };

    const renderManufacturersOptions = () => {
        return props.manufacturers.map(m => {
            return (
                <option value={m.id} key={m.id}>
                    {m.name}({m.chineseName})
                </option>
            );
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(formValues);

        if (!enteredNameIsvalid || !enteredBodyStyleIsvalid || !enteredManufacturerIdIsvalid) {
            return;
        }

        // console.log(event);
        // console.log(enteredName);
        // console.log(enteredReleaseDate);
        // console.log(enteredAlias);
        // console.log(enteredIsArchived);
        // console.log(enteredBodyStyle);
        // console.log(enteredManufacturerId);
        props.onSubmit({
            name: enteredName,
            bodyStyle: enteredBodyStyle,
            officialUrl: enteredOfficialUrl,
            isArchived: enteredIsArchived,
            manufacturerId: Number(enteredManufacturerId),
            alias: enteredAlias,
            releaseDate: enteredReleaseDate,
            yearsInfo: enteredYearsInfo,
            mainImage: enteredMainImage
        });

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
        <form className="row g-2 needs-validation" noValidate onSubmit={onSubmit}>

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

            {/* ManufacturerId */}
            <div className="col-md-4">
                <label htmlFor="manufacturer" className="form-label">車廠</label>
                    
                <select className="form-select" id="manufacturer" required value={enteredManufacturerId} 
                    onChange={manufacturerIdChangedHandler} onBlur={manufacturerIdBlurHandler}>
                    <option value="">選擇車廠...</option>
                    {renderManufacturersOptions()}
                </select>
                {manufacturerIdInputHasError && <p style={{ color: 'red' }}>請選擇車廠</p>}
            </div>

            {/* Body Style */}
            <div className="col-md-4">
                <label htmlFor="bodyStyle" className="form-label">車身型式</label>
                    
                <select className="form-select" id="bodyStyle" required value={enteredBodyStyle} 
                    onChange={bodyStyleChangedHandler} onBlur={bodyStyleBlurHandler}>
                    <option value="">選擇車身...</option>
                    {renderBodyStylesOptions()}
                </select>
                {bodyStyleInputHasError && <p style={{ color: 'red' }}>Body Style must not be empty</p>}
            </div>

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

            {/* Official Url */}
            <div className="col-md-6">
                <label htmlFor="officialUrl" className="form-label">官網</label>
                <input type="text" className="form-control" 
                    id="officialUrl" 
                    value={enteredOfficialUrl} onChange={officialUrlChangedHandler} onBlur={officialUrlBlurHandler}>
                </input>
            </div>

            {/* Main Image   */}
            <div className="col-md-6">
                <label htmlFor="mainImage" className="form-label">主要圖片URL</label>
                <input type="text" className="form-control" 
                    id="mainImage" 
                    value={enteredMainImage} onChange={mainImageChangedHandler} onBlur={mainImageBlurHandler}>
                </input>
            </div>

            {/* IsArchived */}
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" 
                        checked={enteredIsArchived}
                        onChange={isArchivedChangedHandler} onBlur={isArchivedBlurHandler}
                        id="isArchived"></input>
                    <label className="form-check-label" htmlFor="isArchived">已下市</label>
                </div>
            </div> 

            {/*                 

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
                
           */}
                
            <div className="col-12">
                <button className="btn btn-primary mt-3 mb-3" type="submit">Submit</button>
            </div>
        </form>
    );
};

const mapStateToProps = (state) => {
    return { 
        manufacturers: Object.values(state.manufacturers)
    };
};

export default connect(mapStateToProps, { fetchManufacturers })(CarModelForm);
