import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CARS_DB_ROOT } from '../../../consts/url';
import { BODY_STYLES_ZH } from '../../../consts/bodyStyles';
import { POWER_TYPES_ZH } from '../../../consts/powerTypes';
import { SAFETY_EQUIPMENTS_SELECTIONS } from '../../../consts/safetyEquipmentsSelections';
import { fetchCarmodel, fetchManufacturer } from '../../../actions';

const TrimLevelItem = (props) => {

    const { level } = props;

    console.log('TrimLevelItem outside');
    console.log(props);

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

    return (
        //  w-100 justify-content-between
        <div class="d-flex">
            <div className="col-2">
                <Link className="text-center" to={`/cars/${props.manufacturer.name}/${props.carmodel.name}`}>
                    {/* {carmodel.mainImage} */}
                    <img src={window.location.origin + '/images/icons/car.png'} 
                        alt={level.name} className="w-50"></img>
                </Link>
            </div>
            <div className="col-10">
                <div className="d-flex bg-secondary bg-gradient">
                    <Link to={`${CARS_DB_ROOT}/${props.manufacturer.name}`} className="fs-4 text-white align-bottom" style={{ textDecoration: 'none' }}>
                        {props.manufacturer.name}
                    </Link>
                    <Link to={`${CARS_DB_ROOT}/${props.manufacturer.name}/${props.carmodel.name}`} className="fs-5 text-white align-bottom" style={{ textDecoration: 'none' }}>
                        {props.carmodel.name}
                    </Link>
                    <h5 className="text-white">{level.name}</h5>
                </div>

                <div className="row">
                    <h5 class="mb-1">List group item heading</h5>
                    <h5>{level.name}</h5>
                    <h5>{level.price}</h5>
                    <small>3 days ago</small>
                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
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
    console.log(state);
    return {
        manufacturer: state.manufacturers[ownProps.level.manufacturerId],
        carmodel: state.carmodels[ownProps.level.carmodelId]
    }
};

export default connect(
    mapStateToProps, 
    { fetchManufacturer, fetchCarmodel })
(TrimLevelItem);
