import React, { useState } from 'react';
import useInput from '../../../hooks/useInput';

const FilterConditionForm = (props) => {

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(formValues);

        props.onSubmit({
            
        });

        // props.onSubmit(formValues);
    };

    return (
        <div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsFilterConditions-heading">
                    <button className="accordion-button" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#panelsFilterConditions-content" 
                        aria-expanded="true" aria-controls="panelsFilterConditions-content">
                        條件
                    </button>
                </h2>
                    
                <div id="panelsFilterConditions-content" className="accordion-collapse collapse show" 
                    aria-labelledby="panelsFilterConditions-heading">
                    <div className="accordion-body">
                        <div className="row">
                            ijijij

                        </div>
                    </div>
                </div>
            </div>

            <form>

                {/* Submit(Find Car) Button */}
                <div className="col-12">
                    <button className="btn btn-primary mt-3 mb-3" type="submit">找車</button>
                </div>
            </form>
        </div>
    )
}

export default FilterConditionForm

