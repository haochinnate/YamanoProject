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
                // 圖片
                // 名稱
                // 價格
                // 級距
                // 發布日期
                // 別稱
                <div className="col">
                    <div className="card" style={{width: '18rem'}} key={carmodel.id}>
                        <Link className="text-center" to={`/cars/${this.props.manufacturer.name}/${carmodel.name}`}>
                            {/* {carmodel.mainImage} */}
                            <img src={window.location.origin + '/images/icons/car.png'} 
                                alt={carmodel.name} className="card-img-top w-50"></img>
                        </Link>
                    
                        <div className="card-body">
                            <h3 className="card-title fw-bold">{carmodel.name}</h3>
                            <h4 className="card-text text-danger">xxx.x萬 ~ xxx.x 萬</h4>
                            <div className="">
                            <a href={carmodel.officialUrl} target="_blank">官網<small className="text-muted mx-2">別稱: {carmodel.alias}</small></a>   
                            <h6 className="card-text"> </h6>   
                            
                            </div>
                            <a href={carmodel.officialUrl} target="_blank">官網</a>   
                            <p className="card-text">999<small className="text-muted">發布日期: {carmodel.releaseDate}</small></p>
                            <span class="badge bg-primary">Primary</span>
                            <span class="badge bg-secondary">Secondary</span>
                            <span class="badge bg-success">Success</span>
                            <span class="badge bg-danger">Danger</span>
                            <span class="badge bg-warning text-dark">Warning</span>
                            <span class="badge bg-info text-dark">Info</span>
                            <span class="badge bg-light text-dark">Light</span>
                            <span class="badge bg-dark">Dark</span>
                        </div>
                    </div>
                </div>
                
                        // OK<div>{carmodel.id}</div>
                        // OK<div>{carmodel.name}</div>
                        // <div>{carmodel.bodyStyle}</div>
                        // OK<div>{carmodel.officialUrl}</div>
                        // <div>{carmodel.isArchived}</div>
                        // NN<div>{carmodel.manufacturerId}</div>
                        // <div>{carmodel.alias}</div>
                        // <div>{carmodel.releaseDate}</div>
                        // NN<div>{carmodel.yearsInfo}</div>
                        // OK<div>{carmodel.mainImage}</div> 

            );
        });
    }

    render() {
        return (
            <div>
                <div class="row row-cols-1 row-cols-sm-auto">
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

