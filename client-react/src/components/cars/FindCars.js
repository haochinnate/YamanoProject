import React, { useEffect } from 'react'
import FilterConditionForm from './finding/FilterConditionForm'
import FilterResult from './finding/FilterResult'

const FindCars = () => {

    const onSubmit = (formValues) => {
        // console.log(formValues);

    }

    useEffect(() => {
        // effect
        return () => {
            // cleanup
        }
    }, [])

    return (
        <div className="container">
            <div className="row">
                <FilterConditionForm onSubmit={onSubmit}/>
            </div>
            <div className="row">
                <FilterResult />
            </div>
        </div>
    )
}

export default FindCars;
