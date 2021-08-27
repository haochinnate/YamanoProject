import React, { useState } from 'react';
import useInput from '../../../hooks/useInput';

const isNotEmpty = value => String(value).trim() !== '';
const doNotCare = () => true;

const FilterConditionForm = (props) => {

    const {
        value: isArchived, 
        valueChangedHandler: isArchivedChangedHandler,
        inputBlurHandler: isArchivedBlurHandler,
    } = useInput({ 
        validateValue: doNotCare,
        initialValue: props.initialValues === undefined ? false : props.initialValues.isArchived 
    });

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(formValues);

        props.onSubmit({
            maxLength: 6000,
            minLength: 100,
            maxHeight: 3000,
            minHeight: 0
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
                       
                        <form className="row" onSubmit={onSubmit}>


                            {/* Min Price */}
                            
                            {/* Max Price */}

                            {/* <div className="col-auto">
                                <label htmlFor="price" className="form-label">預算</label>
                                <input id="price" type="number" className="form-control" 
                                    value={price} onChange={priceChangedHandler} onBlur={priceBlurHandler}>
                                </input>
                                


                            </div> */}

                            {/* Min Length */}
                            {/* Max Length */}
                            
                            {/* Min Width */}
                            {/* Max Width */}

                            {/* Min Height */}
                            {/* Max Height */}


                            <div>
                                <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"></input>
                                <label class="btn btn-outline-primary" htmlFor="btn-check-outlined">Single toggle</label>
                            </div>
                            
                            {/* 
                            
                            bodyStyle, 數個checkbox 或是用 
                            排氣量, 2 handle slider
                            燃料/動力形式/能源, 數個 checkbox
                            乘客數/座位數, 兩個 checkbox 5人以下, 6人以上
                            配備/配備, 一個配備 一個 checkbox
                            動力(馬力),  2 handle slider */}


                            {/* Submit(Find Car) Button */}
                            <div className="col-12 text-center">
                                <button className="btn btn-primary" type="submit">找車</button>
                            </div>
                                
                        </form>

                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default FilterConditionForm

