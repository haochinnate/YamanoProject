import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CARS_DB_ROOT } from '../../../consts/url';
import { BODY_STYLES_ZH } from '../../../consts/bodyStyles';
import { POWER_TYPES_ZH, IsEV } from '../../../consts/powerTypes';
import { SAFETY_EQUIPMENTS_SELECTIONS } from '../../../consts/safetyEquipmentsSelections';
import { fetchCarmodel, fetchManufacturer } from '../../../actions';

const TrimLevelItem = (props) => {

    const { level } = props;

    console.log('TrimLevelItem outside');
    // console.log(props);

    useEffect(() => {
        console.log('TrimLevelItem useEffect');
        props.fetchManufacturer(level.manufacturerId);
        props.fetchCarmodel(level.carmodelId);

        return () => {
            
        }
    }, [])

    if (!props.manufacturer || !props.carmodel) {
        return (
            <div>Loading</div>
        );
    }

    const specClassName = "fs-6 m-1";

    const renderSaftetyBadge = (displayName, isStandardEquiped) => {
        const badgeClassName = `badge bg-${isStandardEquiped ? "success" : "secondary" } ${specClassName}`;

        return (
            <React.Fragment>
                <div className={badgeClassName}>
                    {displayName}
                </div>
            </React.Fragment>
        );
    }

    const renderSafetyEquipments = () => {
        const safetyEquipments = Object.keys(SAFETY_EQUIPMENTS_SELECTIONS).map((key) => [Number(key), SAFETY_EQUIPMENTS_SELECTIONS[key]]);
    
        return safetyEquipments.map(se => {
            // console.log(se[1].shouldDisplay)
            if (!se[1].shouldDisplay) {
                return (<React.Fragment> </React.Fragment>)
            }
            else {
                if (se[1].propertiesName === "airBagNumbers")
                {
                    return (
                        renderSaftetyBadge(se[1].displayName, Number(props.level[`${se[1].propertiesName}`]) >= 6)
                    );
                }
                else {
                    return (
                        renderSaftetyBadge(se[1].displayName, props.level[`${se[1].propertiesName}`].startsWith('S'))
                    );
                }
            }
        });
    };

    return (
        //  w-100 justify-content-between
        <div className="d-flex flex-column flex-sm-row align-items-center">
            <div className="col-12 col-sm-2 me-1">
                <Link className="text-center" to={`/cars/${props.manufacturer.name}/${props.carmodel.name}`}>
                    {/* {carmodel.mainImage} */}
                    <img src={window.location.origin + '/images/icons/car.png'} 
                        alt={level.name} className="img-thumbnail"></img>
                </Link>
            </div>
            <div className="col">
                <div className="d-flex flex-row-column align-items-baseline bg-secondary bg-gradient flex-wrap">
                    <Link to={`${CARS_DB_ROOT}/${props.manufacturer.name}`}
                        className="fs-4 text-light mx-1" style={{ textDecoration: 'none' }}>
                        {props.manufacturer.name}
                    </Link>
                    
                    <Link to={`${CARS_DB_ROOT}/${props.manufacturer.name}/${props.carmodel.name}`} 
                        className="fs-5 text-light mx-1" style={{ textDecoration: 'none' }}>
                        {props.carmodel.name}
                    </Link>
                    
                    <h5 className="text-light mx-1">{level.name}</h5>
                </div>

                <div className="row row-col-auto m-1">

                    <div className="d-flex flex-row flex-wrap align-items-center">
                        <div className="text-wrap text-danger fs-4 fw-bold m-1">
                            ${level.price/10000}萬元
                        </div>
                    </div>

                    <div className="d-flex flex-row flex-wrap align-items-center">
                       
                        <div className="badge bg-primary m-1 fs-6">
                            {BODY_STYLES_ZH[level.bodyStyle]}
                        </div>
                    
                        <div className={specClassName}>
                            | 車長 {level.length} mm
                        </div>
                        <div className={specClassName}>
                            {
                                level.standardCargoVolume === level.fiveSeatsCargoVolume 
                                ? `| ${level.standardCargoVolume}L` 
                                : `| ${level.standardCargoVolume}L~${level.fiveSeatsCargoVolume}L`
                            }                        
                        </div>
                        <div className={specClassName}>
                           | {level.seats}人座
                        </div>
                    </div>
                    
                    <div className="d-flex flex-row flex-wrap align-items-center">
                        <div className="badge bg-primary m-1 fs-6">
                            {POWER_TYPES_ZH[level.powerType]}
                        </div>
                        <div className={specClassName}>
                            | {level.engineDisplacement}c.c 
                        </div>
                        <div className={specClassName}>
                            { !IsEV(level.powerType) 
                                ? `| ${level.maxHorsepower} hp`
                                : `| ${level.motorPower} W`} 
                        </div>
                        <div className={specClassName}>
                            { !IsEV(level.powerType) 
                                ? `| 油耗: ${level.averageFuelEfficiency} km/L`
                                : `| 里程: ${level.electricRange} km`} 
                        </div>
                        <div className={specClassName}>
                            { IsEV(level.powerType) 
                                ? `| 充電時間: ${level.chargingTime}` : "" }
                        </div>
                    </div>

                    <div className="d-flex flex-row flex-wrap align-items-center">
                        {renderSafetyEquipments()}
                    </div>
                    
                </div>
            </div>
        </div>

        /* manufacturer.name
        carmodel.name
        carmodel.mainImage
        name
        price
        seats
        length
        standardCargoVolume,fiveSeatsCargoVolume
        powerType,
        engineDisplacement,
        maxHorsepower,motorPower
        averageFuelEfficiency, electricRange
        chargingTime
        bodyStyle
        safetyEquipments*/    
    )
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    return {
        manufacturer: state.manufacturers[ownProps.level.manufacturerId],
        carmodel: state.carmodels[ownProps.level.carmodelId]
    }
};

export default connect(
    mapStateToProps, 
    { fetchManufacturer, fetchCarmodel })
(TrimLevelItem);
