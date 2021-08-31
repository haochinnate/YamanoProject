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
    }

    // change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        const fetchLevels = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:3001/trimlevels');
            setLevels(res.data);
            setLoading(false);
        }
   
        fetchLevels();
   
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
    console.log(state);
    return { 
        trimlevels:  Object.values(state.trimlevels), 
        isAdminUser: state.auth.isAdminUser
    }
};

export default connect(mapStateToProps, { fetchTrimLevels })(FindCars);
