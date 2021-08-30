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
        validateValue: doNotCare,
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

    const {
        value: driveWheel, 
        valueChangedHandler: driveWheelChangedHandler,
        inputBlurHandler: driveWheelBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? "輪驅動," : props.initialValues.driveWheel 
    });

    // Engine Properties
    const {
        value: engineDisplacement, 
        valueChangedHandler: engineDisplacementChangedHandler,
        inputBlurHandler: engineDisplacementBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.engineDisplacement 
    });

    const {
        value: maxTorque, 
        valueChangedHandler: maxTorqueChangedHandler,
        inputBlurHandler: maxTorqueBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.maxTorque 
    });

    const {
        value: maxHorsepower, 
        valueChangedHandler: maxHorsepowerChangedHandler,
        inputBlurHandler: maxHorsepowerBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.maxHorsepower 
    });

    const {
        value: cityFuelEfficiency, 
        valueChangedHandler: cityFuelEfficiencyChangedHandler,
        inputBlurHandler: cityFuelEfficiencyBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.cityFuelEfficiency 
    });

    const {
        value: freewayFuelEfficiency, 
        valueChangedHandler: freewayFuelEfficiencyChangedHandler,
        inputBlurHandler: freewayFuelEfficiencyBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.freewayFuelEfficiency 
    });

    const {
        value: averageFuelEfficiency, 
        valueChangedHandler: averageFuelEfficiencyChangedHandler,
        inputBlurHandler: averageFuelEfficiencyBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.averageFuelEfficiency 
    });

    // Electric Motor properties
    const {
        value: batteryCapacity, 
        valueChangedHandler: batteryCapacityChangedHandler,
        inputBlurHandler: batteryCapacityBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.batteryCapacity 
    });

    const {
        value: motorTorque, 
        valueChangedHandler: motorTorqueChangedHandler,
        inputBlurHandler: motorTorqueBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.motorTorque 
    });

    const {
        value: motorPower, 
        valueChangedHandler: motorPowerChangedHandler,
        inputBlurHandler: motorPowerBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.motorPower 
    });

    const {
        value: electricEfficiency, 
        valueChangedHandler: electricEfficiencyChangedHandler,
        inputBlurHandler: electricEfficiencyBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.electricEfficiency 
    });

    const {
        value: electricRange, 
        valueChangedHandler: electricRangeChangedHandler,
        inputBlurHandler: electricRangeBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.electricRange 
    });

    const {
        value: cityRange, 
        valueChangedHandler: cityRangeChangedHandler,
        inputBlurHandler: cityRangeBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.cityRange 
    });

    const {
        value: freewayRange, 
        valueChangedHandler: freewayRangeChangedHandler,
        inputBlurHandler: freewayRangeBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.freewayRange 
    });

    const {
        value: combinedRange, 
        valueChangedHandler: combinedRangeChangedHandler,
        inputBlurHandler: combinedRangeBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 0 : props.initialValues.combinedRange 
    });

    const {
        value: chargingTime, 
        valueChangedHandler: chargingTimeChangedHandler,
        inputBlurHandler: chargingTimeBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? '' : props.initialValues.chargingTime 
    });

    // Safety properties

    const {
        value: antilockBrakingSystem, 
        valueChangedHandler: antilockBrakingSystemChangedHandler,
        inputBlurHandler: antilockBrakingSystemBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.antilockBrakingSystem
    });

    const {
        value: accelerationStabilityRetainer, 
        valueChangedHandler: accelerationStabilityRetainerChangedHandler,
        inputBlurHandler: accelerationStabilityRetainerBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.accelerationStabilityRetainer 
    });

    const {
        value: electronicBrakeforceDistribution, 
        valueChangedHandler: electronicBrakeforceDistributionChangedHandler,
        inputBlurHandler: electronicBrakeforceDistributionBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.electronicBrakeforceDistribution
    });

    const {
        value: brakeAssistSystem, 
        valueChangedHandler: brakeAssistSystemChangedHandler,
        inputBlurHandler: brakeAssistSystemBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.brakeAssistSystem
    });

    const {
        value: electronicStabilityProgram, 
        valueChangedHandler: electronicStabilityProgramChangedHandler,
        inputBlurHandler: electronicStabilityProgramBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.electronicStabilityProgram
    });

    const {
        value: cruiseControl, 
        valueChangedHandler: cruiseControlChangedHandler,
        inputBlurHandler: cruiseControlBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.cruiseControl
    });

    const {
        value: adaptiveCruiseControl, 
        valueChangedHandler: adaptiveCruiseControlChangedHandler,
        inputBlurHandler: adaptiveCruiseControlBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.adaptiveCruiseControl
    });

    const {
        value: forwardCollisionWarning, 
        valueChangedHandler: forwardCollisionWarningChangedHandler,
        inputBlurHandler: forwardCollisionWarningBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.forwardCollisionWarning
    });

    const {
        value: automaticEmergencyBraking, 
        valueChangedHandler: automaticEmergencyBrakingChangedHandler,
        inputBlurHandler: automaticEmergencyBrakingBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.automaticEmergencyBraking
    });

    const {
        value: laneDepartureWarning, 
        valueChangedHandler: laneDepartureWarningChangedHandler,
        inputBlurHandler: laneDepartureWarningBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.laneDepartureWarning
    });

    const {
        value: laneDepartureRevise, 
        valueChangedHandler: laneDepartureReviseChangedHandler,
        inputBlurHandler: laneDepartureReviseBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.laneDepartureRevise
    });

    const {
        value: laneKeepingAssistance, 
        valueChangedHandler: laneKeepingAssistanceChangedHandler,
        inputBlurHandler: laneKeepingAssistanceBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.laneKeepingAssistance
    });

    const {
        value: rearCrossTrafficWarning, 
        valueChangedHandler: rearCrossTrafficWarningChangedHandler,
        inputBlurHandler: rearCrossTrafficWarningBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.rearCrossTrafficWarning
    });

    const {
        value: blindSpotWarning, 
        valueChangedHandler: blindSpotWarningChangedHandler,
        inputBlurHandler: blindSpotWarningBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.blindSpotWarning
    });

    const {
        value: reverseAutomaticEmergencyBraking, 
        valueChangedHandler: reverseAutomaticEmergencyBrakingChangedHandler,
        inputBlurHandler: reverseAutomaticEmergencyBrakingBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.reverseAutomaticEmergencyBraking
    });

    const {
        value: hillStartAssis, 
        valueChangedHandler: hillStartAssisChangedHandler,
        inputBlurHandler: hillStartAssisBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.hillStartAssis
    });

    const {
        value: hillDescentControl, 
        valueChangedHandler: hillDescentControlChangedHandler,
        inputBlurHandler: hillDescentControlBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.hillDescentControl
    });


    const {
        value: airBagNumbers, 
        valueChangedHandler: airBagNumbersChangedHandler,
        inputBlurHandler: airBagNumbersBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? '' : props.initialValues.airBagNumbers
    });

    const {
        value: isofix, 
        valueChangedHandler: isofixChangedHandler,
        inputBlurHandler: isofixBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.isofix
    });

    const {
        value: activeParkingAssistance, 
        valueChangedHandler: activeParkingAssistanceChangedHandler,
        inputBlurHandler: activeParkingAssistanceBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.activeParkingAssistance
    });

    const {
        value: iihsDescription, 
        valueChangedHandler: iihsDescriptionChangedHandler,
        inputBlurHandler: iihsDescriptionBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? '' : props.initialValues.iihsDescription
    });

    const {
        value: ncapDescription, 
        valueChangedHandler: ncapDescriptionChangedHandler,
        inputBlurHandler: ncapDescriptionBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? '' : props.initialValues.ncapDescription
    });

    const {
        value: surroundViewCamera, 
        valueChangedHandler: surroundViewCameraChangedHandler,
        inputBlurHandler: surroundViewCameraBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.surroundViewCamera
    });

    const {
        value: rearViewCamera, 
        valueChangedHandler: rearViewCameraChangedHandler,
        inputBlurHandler: rearViewCameraBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? 'S/O/N()' : props.initialValues.rearViewCamera
    });

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log('onSubmit in TrimLevelForm');
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
            powerType: Number(powerType), transmission, driveWheel,
            // Engine properties
            engineDisplacement: Number(engineDisplacement), maxTorque: Number(maxTorque), maxHorsepower: Number(maxHorsepower),
            cityFuelEfficiency: Number(cityFuelEfficiency), freewayFuelEfficiency: Number(freewayFuelEfficiency), averageFuelEfficiency: Number(averageFuelEfficiency),
            // Electric Motor properties
            batteryCapacity: Number(batteryCapacity), motorTorque: Number(motorTorque), motorPower: Number(motorPower),
            electricEfficiency: Number(electricEfficiency), electricRange: Number(electricRange), cityRange: Number(cityRange),
            freewayRange: Number(freewayRange), combinedRange: Number(combinedRange), chargingTime,
            // Safety properties
            antilockBrakingSystem, accelerationStabilityRetainer, electronicBrakeforceDistribution,
            brakeAssistSystem, electronicStabilityProgram, cruiseControl, adaptiveCruiseControl,
            forwardCollisionWarning, automaticEmergencyBraking, laneDepartureWarning,
            laneDepartureRevise, laneKeepingAssistance, rearCrossTrafficWarning,
            blindSpotWarning, reverseAutomaticEmergencyBraking, hillStartAssis, hillDescentControl,
            airBagNumbers, isofix, activeParkingAssistance, iihsDescription, ncapDescription,
            surroundViewCamera, rearViewCamera
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
                            <div className="col-md-3">
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

                            {/* DriveWheel */}
                            <div className="col-md-4">
                                <label htmlFor="driveWheel" className="form-label">驅動形式</label>
                                    
                                <input type="text" className="form-control" id="driveWheel" 
                                    value={driveWheel} onChange={driveWheelChangedHandler} onBlur={driveWheelBlurHandler}>
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

                            {/* Engine Displacement */}
                            <div className="col-md-3">
                                <label htmlFor="engineDisplacement" className="form-label">排氣量(c.c)</label>
                                    
                                <input id="engineDisplacement" type="number" className="form-control" 
                                    value={engineDisplacement} onChange={engineDisplacementChangedHandler} onBlur={engineDisplacementBlurHandler}>
                                </input>
                            </div>                            

                            {/* Max Torque */}
                            <div className="col-md-3">
                                <label htmlFor="maxTorque" className="form-label">最大扭力(kgm@rpm)</label>
                                    
                                <input id="maxTorque" type="number" className="form-control" 
                                    value={maxTorque} onChange={maxTorqueChangedHandler} onBlur={maxTorqueBlurHandler}>
                                </input>
                            </div>     

                            {/* Max Horsepower */}
                            <div className="col-md-3">
                                <label htmlFor="maxHorsepower" className="form-label">最大馬力(hp@rpm)</label>
                                    
                                <input id="maxHorsepower" type="number" className="form-control" 
                                    value={maxHorsepower} onChange={maxHorsepowerChangedHandler} onBlur={maxHorsepowerBlurHandler}>
                                </input>
                            </div> 

                            {/* City Fuel Efficiency */}
                            <div className="col-md-3">
                                <label htmlFor="cityFuelEfficiency" className="form-label">市區油耗(km/L)</label>
                                    
                                <input id="cityFuelEfficiency" type="number" className="form-control" 
                                    value={cityFuelEfficiency} onChange={cityFuelEfficiencyChangedHandler} onBlur={cityFuelEfficiencyBlurHandler}>
                                </input>
                            </div> 

                            {/* Freeway Fuel Efficiency */}
                            <div className="col-md-3">
                                <label htmlFor="freewayFuelEfficiency" className="form-label">高速油耗(km/L)</label>
                                    
                                <input id="freewayFuelEfficiency" type="number" className="form-control" 
                                    value={freewayFuelEfficiency} onChange={freewayFuelEfficiencyChangedHandler} onBlur={freewayFuelEfficiencyBlurHandler}>
                                </input>
                            </div> 

                            {/* Average Fuel Efficiency */}
                            <div className="col-md-3">
                                <label htmlFor="averageFuelEfficiency" className="form-label">平均油耗(km/L)</label>
                                    
                                <input id="averageFuelEfficiency" type="number" className="form-control" 
                                    value={averageFuelEfficiency} onChange={averageFuelEfficiencyChangedHandler} onBlur={averageFuelEfficiencyBlurHandler}>
                                </input>
                            </div> 

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

                            {/* Battery Capacity */}
                            <div className="col-md-3">
                                <label htmlFor="batteryCapacity" className="form-label">電池容量(kWh)</label>
                                    
                                <input id="batteryCapacity" type="number" className="form-control" 
                                    value={batteryCapacity} onChange={batteryCapacityChangedHandler} onBlur={batteryCapacityBlurHandler}>
                                </input>
                            </div>

                            {/* Motor Torque */}
                            <div className="col-md-3">
                                <label htmlFor="motorTorque" className="form-label">馬達最大扭力(Nm)</label>
                                    
                                <input id="motorTorque" type="number" className="form-control" 
                                    value={motorTorque} onChange={motorTorqueChangedHandler} onBlur={motorTorqueBlurHandler}>
                                </input>
                            </div>     

                            {/* Motor Power */}
                            <div className="col-md-3">
                                <label htmlFor="motorPower" className="form-label">馬達最大功率(kW)</label>
                                    
                                <input id="motorPower" type="number" className="form-control" 
                                    value={motorPower} onChange={motorPowerChangedHandler} onBlur={motorPowerBlurHandler}>
                                </input>
                            </div> 

                            {/* Electric Efficiency */}
                            <div className="col-md-3">
                                <label htmlFor="electricEfficiency" className="form-label">電耗(Wh/km)</label>
                                    
                                <input id="electricEfficiency" type="number" className="form-control" 
                                    value={electricEfficiency} onChange={electricEfficiencyChangedHandler} onBlur={electricEfficiencyBlurHandler}>
                                </input>
                            </div> 

                            {/* Electric Range */}
                            <div className="col-md-3">
                                <label htmlFor="electricRange" className="form-label">純電行駛里程(km) WLTP?</label>
                                    
                                <input id="electricRange" type="number" className="form-control" 
                                    value={electricRange} onChange={electricRangeChangedHandler} onBlur={electricRangeBlurHandler}>
                                </input>
                            </div>

                            {/* City Range */}
                            <div className="col-md-3">
                                <label htmlFor="cityRange" className="form-label">市區行駛里程(km)</label>
                                    
                                <input id="cityRange" type="number" className="form-control" 
                                    value={cityRange} onChange={cityRangeChangedHandler} onBlur={cityRangeBlurHandler}>
                                </input>
                            </div>

                            {/* Freeway Range */}
                            <div className="col-md-3">
                                <label htmlFor="freewayRange" className="form-label">高速行駛里程(km)</label>
                                    
                                <input id="freewayRange" type="number" className="form-control" 
                                    value={freewayRange} onChange={freewayRangeChangedHandler} onBlur={freewayRangeBlurHandler}>
                                </input>
                            </div>

                            {/* Combined Range */}
                            <div className="col-md-3">
                                <label htmlFor="combinedRange" className="form-label">綜合行駛里程(km)</label>
                                    
                                <input id="combinedRange" type="number" className="form-control" 
                                    value={combinedRange} onChange={combinedRangeChangedHandler} onBlur={combinedRangeBlurHandler}>
                                </input>
                            </div> 

                            {/* Charging Time */}
                            <div className="col-md-12">
                                <label htmlFor="chargingTime" className="form-label">充電時間</label>
                                    
                                <input type="text" className="form-control" id="chargingTime" 
                                    value={chargingTime} onChange={chargingTimeChangedHandler} onBlur={chargingTimeBlurHandler}>
                                </input>
                            </div>

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

                            {/* ABS 防鎖死煞車系統 */}
                            <div className="col-md-4">
                                <label htmlFor="antilockBrakingSystem" className="form-label">ABS-防鎖死煞車系統</label>
                                    
                                <input type="text" className="form-control" id="antilockBrakingSystem" 
                                    value={antilockBrakingSystem} onChange={antilockBrakingSystemChangedHandler} onBlur={antilockBrakingSystemBlurHandler}>
                                </input>
                            </div>

                            {/* ASR 循跡防滑控制系統 */}
                            <div className="col-md-4">
                                <label htmlFor="accelerationStabilityRetainer" className="form-label">ASR-循跡防滑控制系統</label>
                                    
                                <input type="text" className="form-control" id="accelerationStabilityRetainer" 
                                    value={accelerationStabilityRetainer} onChange={accelerationStabilityRetainerChangedHandler} onBlur={accelerationStabilityRetainerBlurHandler}>
                                </input>
                            </div>

                            {/* EBD 電子煞車力道分配系統 */}
                            <div className="col-md-4">
                                <label htmlFor="electronicBrakeforceDistribution" className="form-label">EBD-電子煞車力道分配系統</label>
                                    
                                <input type="text" className="form-control" id="electronicBrakeforceDistribution" 
                                    value={electronicBrakeforceDistribution} onChange={electronicBrakeforceDistributionChangedHandler} 
                                    onBlur={electronicBrakeforceDistributionBlurHandler}>
                                </input>
                            </div>

                            {/* BAS 煞車力道輔助系統 */}
                            <div className="col-md-4">
                                <label htmlFor="brakeAssistSystem" className="form-label">BAS-煞車力道輔助系統</label>
                                    
                                <input type="text" className="form-control" id="brakeAssistSystem" 
                                    value={brakeAssistSystem} onChange={brakeAssistSystemChangedHandler} onBlur={brakeAssistSystemBlurHandler}>
                                </input>
                            </div>

                            {/* ESP 車身動態穩定系統 */}
                            <div className="col-md-4">
                                <label htmlFor="electronicStabilityProgram" className="form-label">ESP-車身動態穩定系統</label>
                                    
                                <input type="text" className="form-control" id="electronicStabilityProgram" 
                                    value={electronicStabilityProgram} onChange={electronicStabilityProgramChangedHandler} 
                                    onBlur={electronicStabilityProgramBlurHandler}>
                                </input>
                            </div>

                            {/* 定速 */}
                            <div className="col-md-4">
                                <label htmlFor="cruiseControl" className="form-label">定速</label>
                                    
                                <input type="text" className="form-control" id="cruiseControl" 
                                    value={cruiseControl} onChange={cruiseControlChangedHandler} onBlur={cruiseControlBlurHandler}>
                                </input>
                            </div>

                            {/* ACC 主動車距巡航控制系統 */}
                            <div className="col-md-4">
                                <label htmlFor="adaptiveCruiseControl" className="form-label">ACC-主動車距巡航控制系統</label>
                                    
                                <input type="text" className="form-control" id="adaptiveCruiseControl" 
                                    value={adaptiveCruiseControl} onChange={adaptiveCruiseControlChangedHandler} onBlur={adaptiveCruiseControlBlurHandler}>
                                </input>
                            </div>

                            {/* FCW 前方碰撞警示 */}
                            <div className="col-md-4">
                                <label htmlFor="forwardCollisionWarning" className="form-label">FCW-前方碰撞警示</label>
                                    
                                <input type="text" className="form-control" id="forwardCollisionWarning" 
                                    value={forwardCollisionWarning} onChange={forwardCollisionWarningChangedHandler} onBlur={forwardCollisionWarningBlurHandler}>
                                </input>
                            </div>
                            
                            {/* AEB 自動緊急煞車 */}
                            <div className="col-md-4">
                                <label htmlFor="automaticEmergencyBraking" className="form-label">AEB-自動緊急煞車</label>
                                    
                                <input type="text" className="form-control" id="automaticEmergencyBraking" 
                                    value={automaticEmergencyBraking} onChange={automaticEmergencyBrakingChangedHandler} onBlur={automaticEmergencyBrakingBlurHandler}>
                                </input>
                            </div>

                            {/* LDW 車道偏離警示 */}
                            <div className="col-md-4">
                                <label htmlFor="laneDepartureWarning" className="form-label">LDW-車道偏離警示</label>
                                    
                                <input type="text" className="form-control" id="laneDepartureWarning" 
                                    value={laneDepartureWarning} onChange={laneDepartureWarningChangedHandler} onBlur={laneDepartureWarningBlurHandler}>
                                </input>
                            </div>

                            {/* LDR 車道偏離修正 */}
                            <div className="col-md-4">
                                <label htmlFor="laneDepartureRevise" className="form-label">LDR-車道偏離修正</label>
                                    
                                <input type="text" className="form-control" id="laneDepartureRevise" 
                                    value={laneDepartureRevise} onChange={laneDepartureReviseChangedHandler} onBlur={laneDepartureReviseBlurHandler}>
                                </input>
                            </div>                                                                                    

                            {/* LKA 車道維持 */}
                            <div className="col-md-4">
                                <label htmlFor="laneKeepingAssistance" className="form-label">LKA-車道維持</label>
                                    
                                <input type="text" className="form-control" id="laneKeepingAssistance" 
                                    value={laneKeepingAssistance} onChange={laneKeepingAssistanceChangedHandler} onBlur={laneKeepingAssistanceBlurHandler}>
                                </input>
                            </div>

                            {/* RCTA 後方車側警示 */}
                            <div className="col-md-4">
                                <label htmlFor="rearCrossTrafficWarning" className="form-label">RCTA-後方車側警示</label>
                                    
                                <input type="text" className="form-control" id="rearCrossTrafficWarning" 
                                    value={rearCrossTrafficWarning} onChange={rearCrossTrafficWarningChangedHandler} onBlur={rearCrossTrafficWarningBlurHandler}>
                                </input>
                            </div>  

                            {/* BSW 盲點偵測警示 */}
                            <div className="col-md-4">
                                <label htmlFor="blindSpotWarning" className="form-label">BSW-盲點偵測警示</label>
                                    
                                <input type="text" className="form-control" id="blindSpotWarning" 
                                    value={blindSpotWarning} onChange={blindSpotWarningChangedHandler} onBlur={blindSpotWarningBlurHandler}>
                                </input>
                            </div>    

                            {/* RAEB 後方車流自動煞車 */}
                            <div className="col-md-4">
                                <label htmlFor="reverseAutomaticEmergencyBraking" className="form-label">RAEB-後方車流自動煞車</label>
                                    
                                <input type="text" className="form-control" id="reverseAutomaticEmergencyBraking" 
                                    value={reverseAutomaticEmergencyBraking} onChange={reverseAutomaticEmergencyBrakingChangedHandler} onBlur={reverseAutomaticEmergencyBrakingBlurHandler}>
                                </input>
                            </div>    

                            {/* HSA 斜坡起步輔助 */}
                            <div className="col-md-4">
                                <label htmlFor="hillStartAssis" className="form-label">HSA-斜坡起步輔助</label>
                                    
                                <input type="text" className="form-control" id="hillStartAssis" 
                                    value={hillStartAssis} onChange={hillStartAssisChangedHandler} onBlur={hillStartAssisBlurHandler}>
                                </input>
                            </div>    

                            {/* HDC 陡坡緩降系統 */}
                            <div className="col-md-4">
                                <label htmlFor="hillDescentControl" className="form-label">HDC-陡坡緩降系統</label>
                                    
                                <input type="text" className="form-control" id="hillDescentControl" 
                                    value={hillDescentControl} onChange={hillDescentControlChangedHandler} onBlur={hillDescentControlBlurHandler}>
                                </input>
                            </div>     

                            {/* AirBagNumbers */}
                            <div className="col-md-4">
                                <label htmlFor="airBagNumbers" className="form-label">氣囊總數</label>
                                    
                                <input type="text" className="form-control" id="airBagNumbers" 
                                    value={airBagNumbers} onChange={airBagNumbersChangedHandler} onBlur={airBagNumbersBlurHandler}>
                                </input>
                            </div>    

                            {/* ISOFIX */}
                            <div className="col-md-4">
                                <label htmlFor="isofix" className="form-label">ISOFIX</label>
                                    
                                <input type="text" className="form-control" id="isofix" 
                                    value={isofix} onChange={isofixChangedHandler} onBlur={isofixBlurHandler}>
                                </input>
                            </div>  

                            {/* Active Parking Assistance 自動停車 */}
                            <div className="col-md-4">
                                <label htmlFor="activeParkingAssistance" className="form-label">自動停車</label>
                                    
                                <input type="text" className="form-control" id="activeParkingAssistance" 
                                    value={activeParkingAssistance} onChange={activeParkingAssistanceChangedHandler} onBlur={activeParkingAssistanceBlurHandler}>
                                </input>
                            </div>    

                            {/* IIHS */}
                            <div className="col-md-4">
                                <label htmlFor="iihsDescription" className="form-label">IIHS</label>
                                    
                                <input type="text" className="form-control" id="iihsDescription" 
                                    value={iihsDescription} onChange={iihsDescriptionChangedHandler} onBlur={iihsDescriptionBlurHandler}>
                                </input>
                            </div>  

                            {/* NCAP */}
                            <div className="col-md-4">
                                <label htmlFor="ncapDescription" className="form-label">NCAP</label>
                                    
                                <input type="text" className="form-control" id="ncapDescription" 
                                    value={ncapDescription} onChange={ncapDescriptionChangedHandler} onBlur={ncapDescriptionBlurHandler}>
                                </input>
                            </div>    

                            {/* 環景 */}
                            <div className="col-md-4">
                                <label htmlFor="surroundViewCamera" className="form-label">環景360度</label>
                                    
                                <input type="text" className="form-control" id="surroundViewCamera" 
                                    value={surroundViewCamera} onChange={surroundViewCameraChangedHandler} onBlur={surroundViewCameraBlurHandler}>
                                </input>
                            </div>                                                     

                            {/* 倒車顯影 */}
                            <div className="col-md-4">
                                <label htmlFor="rearViewCamera" className="form-label">倒車顯影</label>
                                    
                                <input type="text" className="form-control" id="rearViewCamera" 
                                    value={rearViewCamera} onChange={rearViewCameraChangedHandler} onBlur={rearViewCameraBlurHandler}>
                                </input>
                            </div>

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
