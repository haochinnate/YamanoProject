import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { BODY_STYLES_ZH } from '../../../consts/bodyStyles';
import { POWER_TYPES_ZH } from '../../../consts/powerTypes';
import { fetchManufacturers } from '../../../actions';

const isNotEmpty = value => String(value).trim() !== '';
const doNotCare = value => true;

const TrimLevelForm = (props) => {

    useEffect(() => {
        props.fetchManufacturers();
    }, [])

    // Basic properties
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
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.price 
    });

    const {
        value: enteredManufacturerId, 
        hasError: manufacturerIdInputHasError,
        isValid: enteredManufacturerIdIsvalid,
        valueChangedHandler: manufacturerIdChangedHandler,
        inputBlurHandler: manufacturerIdBlurHandler,
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
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.carmodelId 
    });

    const {
        value: isArchived, 
        valueChangedHandler: isArchivedChangedHandler,
        inputBlurHandler: isArchivedBlurHandler,
    } = useInput({ 
        validateValue: doNotCare, initialValue: false,
        initialValue: props.initialValues === undefined ? false : props.initialValues.isArchived 
    });

    // BodySpec properties
    const {
        value: bodyStyle, 
        valueChangedHandler: bodyStyleChangedHandler,
        inputBlurHandler: bodyStyleBlurHandler,
    } = useInput({ 
        validateValue: isNotEmpty,
        initialValue: props.initialValues === undefined ? 1 : props.initialValues.bodyStyle 
    });

    const {
        value: seats, 
        valueChangedHandler: seatsChangedHandler,
        inputBlurHandler: seatsBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.seats 
    });

    const {
        value: length, 
        valueChangedHandler: lengthChangedHandler,
        inputBlurHandler: lengthBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.length 
    });

    const {
        value: width, 
        valueChangedHandler: widthChangedHandler,
        inputBlurHandler: widthBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.width 
    });

    const {
        value: height, 
        valueChangedHandler: heightChangedHandler,
        inputBlurHandler: heightBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.height 
    });

    const {
        value: wheelbase, 
        valueChangedHandler: wheelbaseChangedHandler,
        inputBlurHandler: wheelbaseBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.wheelbase 
    });

    const {
        value: weight, 
        valueChangedHandler: weightChangedHandler,
        inputBlurHandler: weightBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.weight 
    });

    const {
        value: standardCargoVolume, 
        valueChangedHandler: standardCargoVolumeChangedHandler,
        inputBlurHandler: standardCargoVolumeBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.standardCargoVolume 
    });

    const {
        value: fiveSeatsCargoVolume, 
        valueChangedHandler: fiveSeatsCargoVolumeChangedHandler,
        inputBlurHandler: fiveSeatsCargoVolumeBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.fiveSeatsCargoVolume 
    });

    const {
        value: maxCargoVolume, 
        valueChangedHandler: maxCargoVolumeChangedHandler,
        inputBlurHandler: maxCargoVolumeBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.maxCargoVolume 
    });

    const {
        value: frunkCargoVolume, 
        valueChangedHandler: frunkCargoVolumeChangedHandler,
        inputBlurHandler: frunkCargoVolumeBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.frunkCargoVolume 
    });

    // PowerTrain properties

    const {
        value: powerType, 
        valueChangedHandler: powerTypeChangedHandler,
        inputBlurHandler: powerTypeBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 1 : props.initialValues.powerType 
    });

    const {
        value: transmission, 
        valueChangedHandler: transmissionChangedHandler,
        inputBlurHandler: transmissionBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? "排," : props.initialValues.transmission 
    });

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('onSubmit in TrimLevelForm');
        // console.log(formValues);

        if (!enteredNameIsvalid || !enteredPriceIsvalid 
            || !carmodelIdIsValid || !enteredManufacturerIdIsvalid) {
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
            // Basic properties
            name, price: Number(price), isArchived,
            manufacturerId: Number(enteredManufacturerId),
            carmodelId: Number(carmodelId),
            // BodySpec properties
            bodyStyle: Number(bodyStyle), seats: Number(seats), length: Number(length), width: Number(width), height: Number(height),
            wheelbase: Number(wheelbase), weight: Number(weight), standardCargoVolume: Number(standardCargoVolume), 
            fiveSeatsCargoVolume: Number(fiveSeatsCargoVolume), maxCargoVolume: Number(maxCargoVolume), frunkCargoVolume: Number(frunkCargoVolume),
            // PowerTrain properties
            powerType: Number(powerType), transmission

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

    const renderPowerTypesOptions = () => {
        const optionsArray = Object.keys(POWER_TYPES_ZH).map((key) => [Number(key), POWER_TYPES_ZH[key]]);
    
        return optionsArray.map(powerType => {
            return (
                <option value={powerType[0]} key={powerType[0]}>
                    {powerType[1]}
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
                                <label htmlFor="carmodel" className="form-label">Model ID</label>
                                <input id="carmodel" type="number" className="form-control" 
                                    value={carmodelId} onChange={carmodelIdChangedHandler} onBlur={carmodelIdBlurHandler}>
                                </input>
                            </div>

                            {/* IsArchived */}
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="isArchived"
                                        checked={isArchived} onChange={isArchivedChangedHandler} onBlur={isArchivedBlurHandler}>
                                    </input>
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
                                                        
                            {/* Seats */}
                            <div className="col-md-2">
                                <label htmlFor="seats" className="form-label">座位數(人)</label>
                                <input id="seats" type="number" className="form-control" 
                                    value={seats} onChange={seatsChangedHandler} onBlur={seatsBlurHandler}>
                                </input>
                            </div>

                            {/* Body Style */}
                            <div className="col-md-3">
                                <label htmlFor="bodyStyle" className="form-label">車身型式</label>
                    
                                <select className="form-select" id="bodyStyle" required value={bodyStyle} 
                                    onChange={bodyStyleChangedHandler} onBlur={bodyStyleBlurHandler}>
                                    <option value="">選擇車身...</option>
                                        {renderBodyStylesOptions()}
                                </select>
                            </div>

                            {/* Length */}
                            <div className="col-md-3">
                                <label htmlFor="length" className="form-label">長(mm)</label>
                                    
                                <input id="length" type="number" className="form-control" 
                                    value={length} onChange={lengthChangedHandler} onBlur={lengthBlurHandler}>
                                </input>
                            </div>

                            {/* Width */}
                            <div className="col-md-3">
                                <label htmlFor="width" className="form-label">寬(mm)</label>
                                    
                                <input id="width" type="number" className="form-control" 
                                    value={width} onChange={widthChangedHandler} onBlur={widthBlurHandler}>
                                </input>
                            </div>

                            {/* Height */}
                            <div className="col-md-3">
                                <label htmlFor="height" className="form-label">高(mm)</label>
                                    
                                <input id="height" type="number" className="form-control" 
                                    value={height} onChange={heightChangedHandler} onBlur={heightBlurHandler}>
                                </input>
                            </div>

                            {/* Wheelbase */}
                            <div className="col-md-3">
                                <label htmlFor="wheelbase" className="form-label">軸距(mm)</label>
                                    
                                <input id="wheelbase" type="number" className="form-control" 
                                    value={wheelbase} onChange={wheelbaseChangedHandler} onBlur={wheelbaseBlurHandler}>
                                </input>
                            </div>

                            {/* Weight */}
                            <div className="col-md-3">
                                <label htmlFor="weight" className="form-label">車重(kg)</label>
                                    
                                <input id="weight" type="number" className="form-control" 
                                    value={weight} onChange={weightChangedHandler} onBlur={weightBlurHandler}>
                                </input>
                            </div>

                            {/* StandardCargoVolume */}
                            <div className="col-md-3">
                                <label htmlFor="standardCargoVolume" className="form-label">後行李箱標準容積(L)</label>
                                    
                                <input id="standardCargoVolume" type="number" className="form-control" 
                                    value={standardCargoVolume} onChange={standardCargoVolumeChangedHandler} onBlur={standardCargoVolumeBlurHandler}>
                                </input>
                            </div>

                            {/* FiveSeatsCargoVolume */}
                            <div className="col-md-3">
                                <label htmlFor="fiveSeatsCargoVolume" className="form-label">後行李箱五人座容積(L)</label>
                                    
                                <input id="fiveSeatsCargoVolume" type="number" className="form-control" 
                                    value={fiveSeatsCargoVolume} onChange={fiveSeatsCargoVolumeChangedHandler} onBlur={fiveSeatsCargoVolumeBlurHandler}>
                                </input>
                            </div>

                            {/* MaxCargoVolume */}
                            <div className="col-md-3">
                                <label htmlFor="maxCargoVolume" className="form-label">後行李箱最大容積(L)</label>
                                    
                                <input id="maxCargoVolume" type="number" className="form-control" 
                                    value={maxCargoVolume} onChange={maxCargoVolumeChangedHandler} onBlur={maxCargoVolumeBlurHandler}>
                                </input>
                            </div>

                            {/* FrunkCargoVolume */}
                            <div className="col-md-3">
                                <label htmlFor="frunkCargoVolume" className="form-label">前行李箱容積(L)</label>
                                    
                                <input id="frunkCargoVolume" type="number" className="form-control" 
                                    value={frunkCargoVolume} onChange={frunkCargoVolumeChangedHandler} onBlur={frunkCargoVolumeBlurHandler}>
                                </input>
                            </div>

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
                        動力系統(Power Train)
                    </button>
                </h2>
                
                <div id="panelsPowertrainProperties-content" className="accordion-collapse collapse show" 
                    aria-labelledby="panelsPowertrainProperties-heading">
                    <div className="accordion-body">
                        <div className="row">

                            {/* PowerType */}
                            <div className="col-md-4">
                                <label htmlFor="powerType" className="form-label">動力型式</label>
                                    
                                <select className="form-select" id="powerType" required value={powerType} 
                                    onChange={powerTypeChangedHandler} onBlur={powerTypeBlurHandler}>
                                    <option value="">選擇...</option>
                                    {renderPowerTypesOptions()}
                                </select>
                            </div>

                            {/* Transmission */}
                            <div className="col-md-4">
                                <label htmlFor="transmission" className="form-label">變速系統</label>
                                    
                                <input type="text" className="form-control" id="transmission" 
                                    value={transmission} onChange={transmissionChangedHandler} onBlur={transmissionBlurHandler}>
                                </input>
                            </div>

                            
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
