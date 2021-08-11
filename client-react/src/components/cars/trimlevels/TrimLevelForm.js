import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { BODY_STYLES_ZH } from '../../../consts/bodyStyles';
import { fetchManufacturers } from '../../../actions';


const TrimLevelForm = (props) => {

    useEffect(() => {
        props.fetchManufacturers();
    }, [])

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('onSubmit in TrimLevelForm');
        // console.log(formValues);

        // if (!enteredNameIsvalid || !enteredBodyStyleIsvalid || !enteredManufacturerIdIsvalid) {
        //     return;
        // }

        // console.log(event);
        // console.log(enteredName);
        // console.log(enteredReleaseDate);
        // console.log(enteredAlias);
        // console.log(enteredIsArchived);
        // console.log(enteredBodyStyle);
        // console.log(enteredManufacturerId);
        // props.onSubmit({
        //     name: enteredName,
        //     bodyStyle: enteredBodyStyle,
        //     officialUrl: enteredOfficialUrl,
        //     isArchived: enteredIsArchived,
        //     manufacturerId: Number(enteredManufacturerId),
        //     alias: enteredAlias,
        //     releaseDate: enteredReleaseDate,
        //     yearsInfo: enteredYearsInfo,
        //     mainImage: enteredMainImage
        // });

        props.onSubmit({ test: '123' });
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
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                {/* {renderAccordionPowertrainProperties()} */}
                {/* {renderAccordionEngineProperties()} */}
                {/* {renderAccordionElectricMotorProperties()} */}
                {/* {renderAccordionSafetyProperties()} */}


                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
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
