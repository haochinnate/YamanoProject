import React from 'react';
import { useForm } from 'react-hook-form';
import { BODY_STYLES_ZH } from '../../../consts/bodyStyles';
import { POWER_TYPES_ZH } from '../../../consts/powerTypes';
import { BUDGET_RANGES } from '../../../consts/budgetRanges';
import { SEATS_SELECTIONS } from '../../../consts/seatsSelections';
import { SAFETY_EQUIPMENTS_SELECTIONS } from '../../../consts/safetyEquipmentsSelections';

const Condition_MinPrice = "minPrice";
const Condition_MaxPrice = "maxPrice";
const Condition_MinLength = "minLength";
const Condition_MaxLength = "maxLength";
const Condition_MinCargoVolume = "minCargoVolume";
const Condition_MinHorsePower = "minHorsePower";
const Condition_Seats = "seats";
const Condition_AllDisplacement = "allDisplacement"
const Condition_MinDisplacement = "minDisplacement";
const Condition_MaxDisplacement = "maxDisplacement";
// const Condition_MinWidth = "minWidth";
// const Condition_MaxWidth = "maxWidth";
// const Condition_MinHeight = "minHeight";
// const Condition_MaxHeight = "maxHeight";


const FilterConditionForm = (props) => {

    const { register, setValue, getValues, handleSubmit, watch, formState: { errors } } = useForm();

    // console.log(watch("minPrice"));

    const renderQuickBudgetRanges = () => {
        const budgetRangeButtons = Object.keys(BUDGET_RANGES).map((key) => [Number(key), BUDGET_RANGES[key]]);
    
        return budgetRangeButtons.map(budgetRange => {
            return (
                <React.Fragment>
                    <label className="badge bg-danger me-1" 
                        onClick={() => {
                            // console.log(`${budgetRange[1].min}萬 ~ ${budgetRange[1].max}萬`);
                            setValue(Condition_MinPrice, budgetRange[1].min);
                            setValue(Condition_MaxPrice, budgetRange[1].max);
                        }}>
                        {`${budgetRange[1].min} ~ ${budgetRange[1].max}`}
                    </label>
                </React.Fragment>
            );
        });
    };

    const renderFilterPowerTypes = () => {
        const powerTypesToggleButtons = Object.keys(POWER_TYPES_ZH).map((key) => [Number(key), POWER_TYPES_ZH[key]]);
    
        return powerTypesToggleButtons.map(powerType => {
            return (
                <React.Fragment>
                    <input type="checkbox" className="btn-check" id={`btn-check-powertype-${powerType[0]}`}
                        autoComplete="off" {...register(`powerType${powerType[0]}`)} defaultChecked></input>
                    <label className="btn btn-outline-primary btn-sm m-1" htmlFor={`btn-check-powertype-${powerType[0]}`}>{powerType[1]}</label>
                </React.Fragment>
            );
        });
    };

    const renderFilterSeatsSelections = () => {
        const seatsSelections = Object.keys(SEATS_SELECTIONS).map((key) => [Number(key), SEATS_SELECTIONS[key]]);
    
        return seatsSelections.map(seatSelection => {
            return (
                <React.Fragment>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="seats" 
                            id={`seatsRadio${seatSelection[0]}`} value={`${seatSelection[0]}`}
                            {...register(Condition_Seats, { required: true })} 
                            defaultChecked={ seatSelection[0] === 0 ? true : false }/>
                        <label className="form-check-label" htmlFor={`seatsRadio${seatSelection[0]}`}>{seatSelection[1]}</label>
                    </div>
                </React.Fragment>
            );
        });
    };

    const renderFilterBodyStyles = () => {
        const bodyStyleToggleButtons = Object.keys(BODY_STYLES_ZH).map((key) => [Number(key), BODY_STYLES_ZH[key]]);
    
        return bodyStyleToggleButtons.map(bodyStyle => {
            return (
                <React.Fragment>
                    <input type="checkbox" className="btn-check" id={`btn-check-bodystyle-${bodyStyle[0]}`}
                        autoComplete="off" {...register(`bodyStyle${bodyStyle[0]}`)} defaultChecked></input>
                    <label className="btn btn-outline-primary btn-sm m-1" htmlFor={`btn-check-bodystyle-${bodyStyle[0]}`}>{bodyStyle[1]}</label>
                </React.Fragment>
            );
        });
    };

    const renderDisplacementSelections = () => {
        watch(Condition_AllDisplacement);
        const allDisplacementSetting = getValues(Condition_AllDisplacement);
        const shouldDisable = allDisplacementSetting !== 'false';
        // console.log(allDisplacementSetting);
        // if (allDisplacementSetting === 'false') {
        return(
            <div className="row align-items-end">
                <div className="col">
                    <input type="number" defaultValue="0" step="0.1" min="0.0" className="form-control" disabled={shouldDisable}
                        {...register(Condition_MinDisplacement, { min: 0.0 })} />
                </div>
            
                <div className="col-auto">
                    ~
                </div>
            
                <div className="col">
                    <input type="number" defaultValue="1.8" step="0.1" min="0.0" className="form-control" disabled={shouldDisable}
                        {...register(Condition_MaxDisplacement, { min: 0.0 })}/>
                </div>
            </div>
        )    
        // }
    };

    const renderSafetyEquipments = () => {
        const safetyEquipments = Object.keys(SAFETY_EQUIPMENTS_SELECTIONS).map((key) => [Number(key), SAFETY_EQUIPMENTS_SELECTIONS[key]]);
    
        return safetyEquipments.map(se => {
            // console.log(se[1].shouldDisplay)
            if (!se[1].shouldDisplay) {
                return (
                    <React.Fragment>
                    </React.Fragment>
                )
            }
            else {
                return (
                    <React.Fragment>
                        <input type="checkbox" className="btn-check" id={`btn-check-safety-${se[1].propertiesName}`}
                            autoComplete="off" {...register(`${se[1].propertiesName}`)} defaultChecked={se[1].defaultSelected}></input>
                        <label className="btn btn-outline-success btn-sm m-1" htmlFor={`btn-check-safety-${se[1].propertiesName}`}>{se[1].displayName}</label>
                    </React.Fragment>
                );
            }
        });
    };

    const onSubmit = (data) => {
        // event.preventDefault();
        console.log('onSubmit in Form');

        // get selected Body Styles
        const selectedBodyStyles= [];
        Object.keys(BODY_STYLES_ZH).forEach(key => {
            const isSelected = getValues(`bodyStyle${Number(key)}`);
            // console.log(isSelected);
            if (isSelected) {
                selectedBodyStyles.push(key);
            }
        });
        // console.log(selectedBodyStyles);

        // get selected Power Types
        const selectedPowerTypes= [];
        Object.keys(POWER_TYPES_ZH).forEach(key => {
            const isSelected = getValues(`powerType${Number(key)}`);
            // console.log(isSelected);
            if (isSelected) {
                selectedPowerTypes.push(key);
            }
        });
        // console.log(selectedPowerTypes);

        // get selected safety equipments
        const selectedSafetyEquipments = [];
        Object.keys(SAFETY_EQUIPMENTS_SELECTIONS).forEach(key => {
            if (SAFETY_EQUIPMENTS_SELECTIONS[key].shouldDisplay) {
                const isSelected = getValues(SAFETY_EQUIPMENTS_SELECTIONS[key].propertiesName);
                if (isSelected) {
                    selectedSafetyEquipments.push(SAFETY_EQUIPMENTS_SELECTIONS[key].propertiesName);
                }
            }
        });
        // console.log(selectedSafetyEquipments);
        
        // props.onSubmit(data);
        props.onSubmit({
            minPrice: data[Condition_MinPrice],
            maxPrice: data[Condition_MaxPrice],
            minLength: data[Condition_MinLength],
            maxLength: data[Condition_MaxLength],
            selectedBodyStyles,
            selectedPowerTypes, 
            minCargoVolume: data[Condition_MinCargoVolume],
            minHorsePower: data[Condition_MinHorsePower],
            seats: data[Condition_Seats],
            minDisplacement: getValues(Condition_AllDisplacement) 
                === 'false' ? data[Condition_MinDisplacement] : "0",
            maxDisplacement: getValues(Condition_AllDisplacement)
                === 'false' ? data[Condition_MaxDisplacement] : "10",
            selectedSafetyEquipments
        });
    };

    return (
        <div>
            <div className="accordion-item">
                <h4 className="accordion-header" id="panelsFilterConditions-heading">
                    <button className="accordion-button fs-4" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#panelsFilterConditions-content" 
                        aria-expanded="true" aria-controls="panelsFilterConditions-content">
                        條件
                    </button>
                </h4>
                    
                <div id="panelsFilterConditions-content" className="accordion-collapse collapse show" 
                    aria-labelledby="panelsFilterConditions-heading">
                    <div className="accordion-body">
                       
                        <form className="row justify-content-center" onSubmit={handleSubmit(onSubmit)}>

                            {/* Min Price & Max Price */}
                            <div className="row align-items-end mb-2">
                                <div className="col col-xxl-1">
                                        <label className="form-label text-nowrap" htmlFor="minPrice">預算(萬元):</label>
                                        <input type="number" defaultValue="0" id="minPrice"
                                            className="form-control"  {...register(Condition_MinPrice)} />
                                        
                                </div>
                                <div className="col-auto text-center">
                                    ~
                                </div>
                                <div className="col col-xxl-1">
                                        <input type="number" defaultValue="2000" aria-describedby="budgetHelpBlock"
                                            className="form-control" {...register(Condition_MaxPrice)}/>
                                </div>

                                <div id="budgetHelpBlock" className="form-text col-12 col-xxl-9">
                                    <label className="form-label text-nowrap col-auto fs-6" htmlFor="quickBudget">快速預算(萬元):</label>
                                    
                                    <div className="col" id="quickBudget">
                                        {renderQuickBudgetRanges()}
                                    </div>
                                </div>

                            </div>

                            {/* Quick Budget Ranges */}
                            {/* <div className="row">
                                <label className="form-label col-auto fs-6" htmlFor="minPrice">快速預算:</label>
                                
                                <div className="col">
                                    {renderQuickBudgetRanges()}
                                </div>
                            </div> */}

                            {/* Min Length & Max Length */}
                            <div className="row align-items-end mb-2">

                                <div className="col col-xxl-1">
                                    <label className="form-label text-nowrap" htmlFor="minLength">車長(mm):</label>

                                    {/* <div className="col"> */}
                                        <input type="number" defaultValue="0" className="form-control" 
                                            min="0" max="6000"
                                            {...register(Condition_MinLength, { required: true, min: 0, max: 6000})} />
                                        {errors[Condition_MinLength] && <span>This field is required</span>}

                                    {/* </div> */}
                                </div>
                                
                                <div className="col-auto text-center">
                                    ~
                                </div>
                                
                                <div className="col col-xxl-1">
                                    <label className="form-label" htmlFor="maxLength">   </label>

                                    <input type="number" defaultValue="6000" className="form-control" 
                                            min="0" max="6000"
                                            {...register(Condition_MaxLength, { required: true, min: 0, max: 6000 })} />
                                        {errors[Condition_MaxLength] && <span>This field is required</span>}
                                </div>
                                
                                <div className="col-12 col-xxl-4">
                                    <label className="form-label" htmlFor="maxLengthSlider">   </label>

                                    <input type="range" className="form-range" min="0" max="6000" step="10" id="lengthRange" 
                                        defaultValue="6000"
                                        onChange={(event) => { 
                                            // console.log(event);
                                            setValue(Condition_MaxLength, event.target.value);
                                        }}  value={watch(Condition_MaxLength)} ></input>
                                </div>
                                
                            </div>

                            {/* Min Width & Max Width (future)*/}
                            {/* Min Height & Max Height (future)*/}

                            {/* Seats 乘客數/座位數*/}
                            <div className="row align-items-baseline mb-2">
                                {/* <div className="col-12"> */}
                                    <label className="col-sm-auto col-form-label text-nowrap" htmlFor="seats">座位數:</label>
                                
                                    <div id="seats" className="col-sm-10">
                                        {renderFilterSeatsSelections()}                                  
                                    </div>
                                {/* </div> */}
                            </div>

                            {/* BodyStyles */}
                            <div className="row mb-2">
                                <div className="col-12">
                                    <label className="form-label text-nowrap" htmlFor="bodyStyles">車身:</label>

                                    <div id="bodyStyles">
                                        {renderFilterBodyStyles()}
                                    </div>
                                </div>
                            </div>


                            {/* StandardCargoVolume 行李箱容積 */}
                            {/* Horsepower 動力(馬力) */}
                            {/* PowerType 燃料/動力形式/能源*/}
                            <div className="row align-items-end mb-2">

                                <div className="col-3 col-xl-2 col-xxl-1">
                                    <label className="form-label text-nowrap" htmlFor="minCargoVolume">行李箱容積至少(L):</label>

                                    <div id="minCargoVolume">
                                        <input type="number" defaultValue="0" min="0" className="form-control" 
                                            {...register(Condition_MinCargoVolume)} />
                                    </div>
                                </div>

                                <div className="col-3 col-xl-2 col-xxl-1">
                                    <input type="range" className="form-range" min="0" max="700" step="10" id="minCargoVolumeRange" 
                                        defaultValue="0"
                                        onChange={(event) => { 
                                            // console.log(event);
                                            setValue(Condition_MinCargoVolume, event.target.value);
                                        }}  value={watch(Condition_MinCargoVolume)} ></input>
                                </div>

                                <div className="col-3 col-xl-2 col-xxl-1">
                                    <label className="form-label text-nowrap" htmlFor="minHorsePower">馬力至少(hp):</label>
                                    
                                    <div className="minHorsePower">
                                        <input type="number" defaultValue="0" className="form-control" 
                                            {...register(Condition_MinHorsePower)} />
                                    </div>
                                </div>

                                <div className="col-3 col-xl-2 col-xxl-1">
                                    <input type="range" className="form-range" min="0" max="400" step="10" id="horsePowerRange"
                                        defaultValue="0"
                                        onChange={(event) => { 
                                            // console.log(event);
                                            setValue(Condition_MinHorsePower, event.target.value);
                                        }} value={watch(Condition_MinHorsePower)} ></input>
                                </div>

                                <div className="col-12 col-xxl-8">
                                    <label className="form-label text-nowrap" htmlFor="bodyStyles">動力:</label>

                                    <div id="bodyStyles">
                                        {renderFilterPowerTypes()}
                                    </div>
                                </div>  

                            </div>

                            {/* Engine Displacement 排氣量*/}
                            <div className="row align-items-end mb-2">

                                <div className="col-sm-auto mb-2">
                                    <label className="form-label text-nowrap" htmlFor="engineDisplacement">排氣量(L):</label>
                                    
                                    <div id="engineDisplacement">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="allDisplacements" 
                                                id="allDisplacement" value={true}
                                                {...register(Condition_AllDisplacement, { required: true })} 
                                                defaultChecked/>
                                            <label className="form-check-label" htmlFor="allDisplacement">皆可</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="allDisplacements" 
                                                id="restrictedDisplacement" value={false}
                                                {...register(Condition_AllDisplacement, { required: true })}/>
                                            <label className="form-check-label" htmlFor="restrictedDisplacement">限定</label>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="col-sm-8 col-lg-3">
                                    {renderDisplacementSelections()}
                                </div>

                            </div>

                            {/* Safety */}
                            <div className="row mb-2">
                                <div className="col">
                                    <label className="form-label text-nowrap" htmlFor="safety">安全配備:</label>

                                    <div id="safety">
                                        {renderSafetyEquipments()}
                                    </div>
                                </div>
                            </div>

                            {/* Submit(Find Car) Button */}
                            <div className="col-12 text-center">
                                <button className="btn btn-primary" type="submit">找車</button>
                            </div>

                            {/* Reset to default button? */}
                                
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterConditionForm

