import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCarmodelsByManufacturer } from '../../../actions';
import { CARMODELS_ROOT } from '../../../consts/url';
import { BODY_STYLES } from '../../../consts/bodyStyles';

class CarModelList extends React.Component {
    
    componentDidMount() {
        if (this.props.manufacturer) {
            console.log(this.props.manufacturer);
            this.props.fetchCarmodelsByManufacturer(this.props.manufacturer);
        }
    }

    renderAdmin(carmodel) {
        return (
            <div className="right floated content">
                <Link to={`${CARMODELS_ROOT}/edit/${carmodel.id}`} className="btn btn-primary m-1">
                    Edit
                </Link>
                <Link to={`${CARMODELS_ROOT}/delete/${carmodel.id}`} className="btn btn-danger m-1">
                    Delete
                </Link>
            </div>
        );
    }

    renderCreate() {
        // if (this.props.isSignedIn) {
            return (                
                <div style={{ textAlign: 'right'}}>
                    <Link to={`${CARMODELS_ROOT}/new`} className="btn btn-success mb-3"> 
                        Create CarModel
                    </Link>
                </div>
            );
        // } 
    }

    renderList() {
        // console.log(this.props.carmodels);
        return this.props.carmodels.map(carmodel => {
            return (

                <div className="d-flex align-items-center" key={carmodel.id}>
                    <div className="flex-shrink-0 max-vh-10">
                        <Link to={`/cars/${carmodel.name}/${carmodel.name}`}>
                            <img src={window.location.origin + '/images/icons/car.png'} alt={carmodel.name}></img>
                        </Link>
                    </div>
                        
                    <div className="flex-grow-1 ms-3">
                        <div className="row">
                            <div className="col col-md-auto fs-2">
                            {carmodel.name} 
                        </div>
                        <div className="col col-md-auto fs-3">
                            <a href={carmodel.officialUrl} target="_blank">官網</a>   
                        </div>
                        </div>
                        
                        {carmodel.isArchived}
          
                        <div>{carmodel.id}</div>
                        <div>{carmodel.name}</div>
                        <div>{carmodel.bodyStyle}</div>
                        <div>{carmodel.officialUrl}</div>
                        <div>{carmodel.isArchived}</div>
                        <div>{carmodel.manufacturerId}</div>
                        <div>{carmodel.alias}</div>
                        <div>{carmodel.releaseData}</div>
                        <div>{carmodel.yearsInfo}</div>
                        <div>{carmodel.mainImage}</div>
                    </div>
                </div>
                // <Field name="name" component={this.renderInput} label="名稱"/>
                // <Field name="category" component={this.renderInput} label="車型"/>
                // <Field name="officialUrl" component={this.renderInput} label="官方網站"/>
                // <Field name="isArchived" component={this.renderInput} label="IsArchived"/>
                // <Field name="manufacturer" component={this.renderInput} label="車廠"/>
                // alias
                // releaseDate
                // yearsInfo
            );
        });
    }

    render() {
        return (
            <div>
                <div class="container-fluid">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {

    return { carmodels:  Object.values(
        _.pickBy(state.carmodels, 
            (carmodel) => {
                return carmodel.manufacturerId === ownProps.manufacturer.id;
            }
        ))
    }
};

export default connect(mapStateToProps, { fetchCarmodelsByManufacturer })(CarModelList);

