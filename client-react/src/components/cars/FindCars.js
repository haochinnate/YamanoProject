import _ from 'lodash';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import FilterConditionForm from './finding/FilterConditionForm'
import FilterResults from './finding/FilterResults'
import Pagination from './finding/Pagination';
import { connect } from 'react-redux';
import { fetchTrimLevels } from '../../actions';
import { SERVERIP } from '../../consts/url';

const FindCars = (props) => {

    const changePageScrollTarget = useRef(null);
    const [levels, setLevels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [findButtonTouched, setFindButtonTouched] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(15);
    // const [itemsPerPage, setItemsPerPage] = useState(1);


    const onSubmit = (formValues) => {
        // console.log("onSubmit in FindCars");
        console.log(formValues);
        setFindButtonTouched(true);

        const fetchLevels = async () => {
            setLoading(true);
            const res = await axios.get(`http://${SERVERIP}:3001/trimlevels`);
            const filterResult = filterTrimLevels(res.data, formValues);
            setLevels(filterResult);
            setCurrentPage(1);
            setLoading(false);
        }
   
        fetchLevels();
    }

    const filterTrimLevels = (allTrimlevels, condition) => {
        return _.filter(allTrimlevels, (t) => {
            // price
            if (t.price > Number(condition.maxPrice)*10000 || t.price < Number(condition.minPrice)*10000 ) {
                return false;
            }

            // length
            if (t.length > Number(condition.maxLength) || t.length < Number(condition.minLength))
            {
                return false;
            }
            
            // bodyStyle
            if (!condition.selectedBodyStyles.includes(String(t.bodyStyle))) {
                return false;
            }
            
            // seats
            if (condition.seats === '5') {
                if (t.seats > 5) { return false; }
            }
            else if (condition.seats === '6') {
                if (t.seats < 6) { return false; }
            }

            // Cargo Volume
            if (t.standardCargoVolume === t.fiveSeatsCargoVolume) {
                if (t.standardCargoVolume < Number(condition.minCargoVolume)) {
                    return false;
                }
            }
            else {
                if (t.standardCargoVolume < Number(condition.minCargoVolume)
                    && t.fiveSeatsCargoVolume < Number(condition.minCargoVolume)) {
                    return false;
                }
            }

            // power types
            if (!condition.selectedPowerTypes.includes(String(t.powerType))) {
                return false;
            }
            
            // Engine Displacement
            if (t.engineDisplacement > Number(condition.maxDisplacement)*1000 
                || t.engineDisplacement < Number(condition.minDisplacement)*1000 ) {
                return false;
            }

            // horse power, motor power
            if (t.maxHorsepower < Number(condition.minHorsePower)
                && t.motorPower < Number(condition.minHorsePower)) {
                return false;
            }

            // safety equiplemts
            // console.log(condition.selectedSafetyEquipments)
            for (const safetyEquip of condition.selectedSafetyEquipments) {
                // console.log("Equip: " + safetyEquip)
                if (safetyEquip === "airBagNumbers")
                {
                    if (Number(t[safetyEquip]) < 6 ) {
                        // console.log(`${safetyEquip} failed`)
                        return false;
                    }
                }
                else {
                    if (!t[safetyEquip].startsWith('S')) {
                        // console.log(`${safetyEquip} failed`)
                        return false;
                    }
                }
            }

            // all condition match, so return true            
            return true;

        })
        // do the filter, filter condition:
        // {
        //     minPrice: data[Condition_MinPrice],
        //     maxPrice: data[Condition_MaxPrice],
        //     minLength: data[Condition_MinLength],
        //     maxLength: data[Condition_MaxLength],
        //     selectedBodyStyles,
        //     selectedPowerTypes, 
        //     minCargoVolume: data[Condition_MinCargoVolume],
        //     minHorsePower: data[Condition_MinHorsePower],
        //     seats: data[Condition_Seats],
        //     minDisplacement: getValues(Condition_AllDisplacement) 
        //         === 'false' ? data[Condition_MinDisplacement] : "0",
        //     maxDisplacement: getValues(Condition_AllDisplacement)
        //         === 'false' ? data[Condition_MaxDisplacement] : "10",
        //     selectedSafetyEquipments
        // }
    }


    // change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // scroll
    const executeScroll = () => {
        console.log('executeScroll')
        changePageScrollTarget.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    useEffect(() => {
        // fetchLevels();
        if (findButtonTouched) {
            executeScroll();
            // console.log('useEffect')
        }

        // effect
        return () => {
            // cleanup
        }
    }, [currentPage])


    // console.log('FindCars')
    // console.log(levels)

    // Get current levels
    const indexOfLastLevel = currentPage * itemsPerPage;
    const indexOfFirstLevel = indexOfLastLevel - itemsPerPage;
    const currentLevels = levels.slice(indexOfFirstLevel, indexOfLastLevel);

    return (
        <div className="container">
            <div className="row my-2">
                <FilterConditionForm onSubmit={onSubmit}/>
            </div>
            <div className="row my-2" ref={changePageScrollTarget}>
                <FilterResults levels={currentLevels} loading={loading} found={findButtonTouched}/>
                <Pagination itemsPerPage={itemsPerPage} 
                    totalItems={levels.length}
                    paginate={paginate}
                    activePage={currentPage}/>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    // console.log(state);
    return { 
        trimlevels:  Object.values(state.trimlevels), 
    }
};

export default connect(mapStateToProps, { fetchTrimLevels })(FindCars);
