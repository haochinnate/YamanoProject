import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterConditionForm from './finding/FilterConditionForm'
import FilterResults from './finding/FilterResults'
import Pagination from './finding/Pagination';
import { connect } from 'react-redux';
import { TRIMLEVELS_ROOT } from '../../consts/url';
import { BODY_STYLES_ZH } from '../../consts/bodyStyles';
import { POWER_TYPES_ZH } from '../../consts/powerTypes';
import { fetchTrimLevels } from '../../actions';


const FindCars = (props) => {

    const [levels, setLevels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2);
    // const [itemsPerPage, setItemsPerPage] = useState(1);


    const onSubmit = (formValues) => {
        console.log("onSubmit in FindCars");
        console.log(formValues);

        const fetchLevels = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:3001/trimlevels');
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

    useEffect(() => {
        // const fetchLevels = async () => {
        //     setLoading(true);
        //     const res = await axios.get('http://localhost:3001/trimlevels');
        //     setLevels(res.data);
        //     setLoading(false);
        // }
   
        // fetchLevels();
   
        // effect
        return () => {
            // cleanup
        }
    }, [])


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
            <div className="row my-2">
                <FilterResults levels={currentLevels} loading={loading}/>
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
        isAdminUser: state.auth.isAdminUser
    }
};

export default connect(mapStateToProps, { fetchTrimLevels })(FindCars);
