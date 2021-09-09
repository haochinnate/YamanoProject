import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCarmodelsByManufacturer } from '../../../actions';
import { CARMODELS_ROOT } from '../../../consts/url';
import { BODY_STYLES_ZH } from '../../../consts/bodyStyles';

class CarModelList extends React.Component {
    
    componentDidMount() {
        // console.log('componentDidMount');

        if (this.props.manufacturer) {
            // console.log(this.props.manufacturer);
            this.props.fetchCarmodelsByManufacturer(this.props.manufacturer);
        }
    }

    renderAdmin(carmodel) {
        if (this.props.isAdminUser) {
            return (
                <div className="card-footer">
                    <div className="text-center">
                        <Link to={`${CARMODELS_ROOT}/edit/${carmodel.id}`} className="btn btn-primary m-1">
                            Edit
                        </Link>
                        <Link to={`${CARMODELS_ROOT}/delete/${carmodel.id}`} className="btn btn-danger m-1">
                            Delete
                        </Link>
                    </div>
                </div>
            );
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
                // 圖片
                // 名稱
                // 價格
                // 級距
                // 發布日期
                // 別稱
                <div className="col my-2" key={carmodel.id}>
                    <div className="card" style={{width: '18rem'}}>
                        <Link className="text-center" to={`/cars/${this.props.manufacturer.name}/${carmodel.name}`}>
                            {/* {carmodel.mainImage} */}
                            {/* <i className="fas fa-car"></i> */}
                            <img src={window.location.origin + '/images/icons/car.png'} 
                                alt={carmodel.name} className="card-img-top w-50"></img>
                        </Link>
                    
                        <div className="card-body">
                            <h3 className="card-title fw-bold fs-3">{carmodel.name}</h3>
                            <h4 className="card-text text-danger fs-4">xxx.x萬 ~ xxx.x 萬</h4>
                            
                            {/* <div className="">
                                <a href={carmodel.officialUrl} target="_blank" rel="noreferrer noopener">官網</a>   
                                <span className="text-muted mx-2">別稱: {_.join(carmodel.alias, ',')}</span>
                            </div>
                            <h6 className="card-text"><small className="text-muted">發布日期: {carmodel.releaseDate}</small></h6> */}

                            <span className="badge bg-secondary me-2">{this.props.manufacturer.level}</span>

                            <span className="badge bg-primary me-2">{BODY_STYLES_ZH[carmodel.bodyStyle]}</span>

                            {/* <span className="badge bg-success me-2 ">Level 2</span> */}

                        </div>

                        {this.renderAdmin(carmodel)}
                    </div>
                </div>

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

