import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { BODY_STYLES_ZH } from '../../../consts/bodyStyles';
import { fetchManufacturers } from '../../../actions';

const isNotEmpty = value => String(value).trim() !== '';
const doNotCare = value => true;

const TrimLevelForm = (props) => {

    useEffect(() => {
        props.fetchManufacturers();
    }, [])

    const {
        value: name, 
        hasError: nameInputHasError,
        isValid: enteredNameIsvalid,
        valueChangedHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
    } = useInput({ 
        validateValue: isNotEmpty, 
        initialValue: props.initialValues === undefined ? '' : props.initialValues.name 
    });

    const {
        value: price, 
        hasError: priceHasError,
        isValid: enteredPriceIsvalid,
        valueChangedHandler: priceChangedHandler,
        inputBlurHandler: priceBlurHandler,
    } = useInput({ 
        validateValue: isNotEmpty, 
        initialValue: props.initialValues === undefined ? '' : props.initialValues.price 
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
        value: carmodelId, 
        isValid: carmodelIdIsValid,
        valueChangedHandler: carmodelIdChangedHandler,
        inputBlurHandler: carmodelIdBlurHandler,
    } = useInput({ 
        validateValue: isNotEmpty,
        initialValue: props.initialValues === undefined ? '' : props.initialValues.manufacturerId 
    });

    const {
        value: isArchived, 
        valueChangedHandler: isArchivedChangedHandler,
        inputBlurHandler: isArchivedBlurHandler,
    } = useInput({ 
        validateValue: doNotCare, initialValue: false,
        initialValue: props.initialValues === undefined ? false : props.initialValues.isArchived 
    });


    const onSubmit = (event) => {
        event.preventDefault();
        console.log('onSubmit in TrimLevelForm');
        // console.log(formValues);

        if (!enteredNameIsvalid || !enteredPriceIsvalid || !carmodelIdIsValid) {
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
            name, price: Number(price), isArchived,
            manufacturerId: Number(enteredManufacturerId),
            carmodelId: Number(carmodelId)

            // bodyStyle: enteredBodyStyle,
            // officialUrl: enteredOfficialUrl,
            // alias: enteredAlias,
            // releaseDate: enteredReleaseDate,
            // yearsInfo: enteredYearsInfo,
            // mainImage: enteredMainImage
        });

        // props.onSubmit({ test: '123' });
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

    const renderAccordionBasicProperties = () => {
        return (
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsBasicProperties-heading">
                    <button className="accordion-button" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#panelsBasicProperties-content" 
                        aria-expanded="true" aria-controls="panelsBasicProperties-content">
                        基本資料
                    </button>
                </h2>
                    
                <div id="panelsBasicProperties-content" className="accordion-collapse collapse show" 
                    aria-labelledby="panelsBasicProperties-heading">
                    <div className="accordion-body">
                        <div className="row">
                            {/* Name */}
                            <div className="col-md-4">
                                <label htmlFor="name" className="form-label">名稱</label>
                                    <input id="name" type="text" className="form-control" 
                                         
                                        value={name} onChange={nameChangedHandler} onBlur={nameBlurHandler}>
                                    </input>
                                {nameInputHasError && <p style={{ color: 'red' }}>Name must not be empty</p>}
                            </div>

                            {/* Price */}
                            <div className="col-md-4">
                                <label htmlFor="price" className="form-label">價格</label>
                                    <input id="price" type="number" className="form-control" 
                                         
                                        value={price} onChange={priceChangedHandler} onBlur={priceBlurHandler}>
                                    </input>
                                {priceHasError && <p style={{ color: 'red' }}>請輸入價格</p>}
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

                            {/* CarmodelId */}
                            <div className="col-md-4">
                                <label htmlFor="carmodel" className="form-label">Model name</label>
                                    
                                <input id="carmodel" type="number" className="form-control" 
                                         
                                    value={carmodelId} onChange={carmodelIdChangedHandler} onBlur={carmodelIdBlurHandler}>
                                </input>
                            </div>

                            {/* IsArchived */}
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="isArchived"
                                        checked={isArchived}
                                        onChange={isArchivedChangedHandler} onBlur={isArchivedBlurHandler}
                                        ></input>
                                    <label className="form-check-label" htmlFor="isArchived">已下市</label>
                                </div>
                            </div> 

                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderAccordionBodySpecProperties = () => {
        return (
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsBodySpecProperties-heading">
                    <button className="accordion-button" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#panelsBodySpecProperties-content" 
                        aria-expanded="true" aria-controls="panelsBodySpecProperties-content">
                        車身資料
                    </button>
                </h2>
                
                <div id="panelsBodySpecProperties-content" className="accordion-collapse collapse show" 
                    aria-labelledby="panelsBodySpecProperties-heading">
                    <div className="accordion-body">
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderAccordionPowertrainProperties = () => {
        return (
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsPowertrainProperties-heading">
                    <button className="accordion-button" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#panelsPowertrainProperties-content" 
                        aria-expanded="true" aria-controls="panelsPowertrainProperties-content">
                        動力系統
                    </button>
                </h2>
                
                <div id="panelsPowertrainProperties-content" className="accordion-collapse collapse show" 
                    aria-labelledby="panelsPowertrainProperties-heading">
                    <div className="accordion-body">
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderAccordionEngineProperties = () => {
        return (
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsEngineProperties-heading">
                    <button className="accordion-button" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#panelsEngineProperties-content" 
                        aria-expanded="true" aria-controls="panelsEngineProperties-content">
                        引擎資料
                    </button>
                </h2>
                
                <div id="panelsEngineProperties-content" className="accordion-collapse collapse show" 
                    aria-labelledby="panelsEngineProperties-heading">
                    <div className="accordion-body">
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderAccordionElectricMotorProperties = () => {
        return (
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsElectricMotorProperties-heading">
                    <button className="accordion-button" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#panelsElectricMotorProperties-content" 
                        aria-expanded="true" aria-controls="panelsElectricMotorProperties-content">
                        電能動力資料
                    </button>
                </h2>
                
                <div id="panelsElectricMotorProperties-content" className="accordion-collapse collapse show" 
                    aria-labelledby="panelsElectricMotorProperties-heading">
                    <div className="accordion-body">
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderAccordionSafetyProperties = () => {
        return (
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsSafetyProperties-heading">
                    <button className="accordion-button" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#panelsSafetyProperties-content" 
                        aria-expanded="true" aria-controls="panelsSafetyProperties-content">
                        安全配備
                    </button>
                </h2>
                
                <div id="panelsSafetyProperties-content" className="accordion-collapse collapse show" 
                    aria-labelledby="panelsSafetyProperties-heading">
                    <div className="accordion-body">
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <form className="row g-2 needs-validation" noValidate onSubmit={onSubmit}>
            <div className="accordion" id="accordionPanelsForInputProperties">

                {renderAccordionBasicProperties()}
                {renderAccordionBodySpecProperties()}
                {renderAccordionPowertrainProperties()}
                {renderAccordionEngineProperties()}
                {renderAccordionElectricMotorProperties()}
                {renderAccordionSafetyProperties()}

            </div>

            <div className="col-12">
                <button className="btn btn-primary mt-3 mb-3" type="submit">Submit</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return { 
        manufacturers: Object.values(state.manufacturers)
    };
};

export default connect(mapStateToProps, { fetchManufacturers })(TrimLevelForm);
