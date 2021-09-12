import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCarmodelsByManufacturer } from '../../../actions';
import { CARMODELS_ROOT } from '../../../consts/url';
import CarModelCard from './CarModelCard';

class CarModelList extends React.Component {
    
    componentDidMount() {
        // console.log('componentDidMount');

        if (this.props.manufacturer) {
            // console.log(this.props.manufacturer);
            this.props.fetchCarmodelsByManufacturer(this.props.manufacturer);
        }
    }


    renderCreate() {
        if (this.props.isAdminUser) {
            return (                
                <div style={{ textAlign: 'right'}}>
                    <Link to={`${CARMODELS_ROOT}/new`} className="btn btn-success mb-3 text-nowrap"> 
                        Create CarModel
                    </Link>
                </div>
            );
        } 
    }

    renderList() {
        // console.log(this.props.carmodels);
        return this.props.carmodels.map(carmodel => {
            return (
                <CarModelCard carmodel={carmodel} manufacturer={this.props.manufacturer}/>
            );
        });
    }

    render() {
        return (
            <div>
                {/* <div className="row my-2">
                    <div className="col-12">
                        <h1 className="text-center text-md-start">車廠 -> Carmodel</h1>
                    </div>
                </div> */}

                {/* row-cols-1 row-cols-sm-auto */}
                <div className="d-flex row row-cols-auto justify-content-center">
                    {this.renderList()}
                </div>
                <div className="mx-2 my-2 d-flex justify-content-center">
                    {this.renderCreate()}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.match)
    // console.log('mapStateToProps');
    // console.log(state.carmodels)
    return { carmodels:  Object.values(
        _.pickBy(state.carmodels, 
            (carmodel) => {
                return String(carmodel.manufacturerId) === String(ownProps.manufacturer.id);
            }
        )),
        isAdminUser: state.auth.isAdminUser
    }
};

export default connect(mapStateToProps, { fetchCarmodelsByManufacturer })(CarModelList);

