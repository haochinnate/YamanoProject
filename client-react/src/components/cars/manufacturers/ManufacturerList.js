import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchManufacturers } from '../../../actions';
import { MANUFACTURERS_ROOT, CARS_DB_ROOT } from '../../../consts/url';

class ManufacturerList extends Component {

    componentDidMount() {
        this.props.fetchManufacturers();
    }

    renderAdmin(manufacturer) {
        if (this.props.isAdminUser) {
            return (
                <div className="card-footer">

                <div className="text-center">
                    <Link to={`${MANUFACTURERS_ROOT}/edit/${manufacturer.id}`} className="btn btn-primary m-1">
                        Edit
                    </Link>
                    <Link to={`${MANUFACTURERS_ROOT}/delete/${manufacturer.id}`} className="btn btn-danger m-1">
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
                <div className="mx-2 my-2 d-flex justify-content-center">
                    <Link to={`${MANUFACTURERS_ROOT}/new`} className="btn btn-success mb-3 text-nowrap"> 
                        Create Manufacturer
                    </Link>
                </div>
            );
        } 
    }

    renderManufacturers() {
        return this.props.manufacturers.map(manufacturer => {
            return (
                // style={{ width: '18rem', height: '18rem' }} justify-content-stretch  img-fluid
                // , width: 'auto', height: 'auto' 
                // col-6 col-sm-3 col-md-2
                <div className="my-2" key={manufacturer.id}>
                    
                    <div className="card h-100" >
                        <Link to={`${CARS_DB_ROOT}/${manufacturer.name}`} className="text-center" >
                            <img src={window.location.origin + `/images/manufacturers/${manufacturer.name}.png`}
                                className="card-img-top" alt={manufacturer.name}
                                style={{ maxHeight: '100px', maxWidth:'100%', width: 'auto', height: 'auto' }}/>
                        </Link>
                    
                        <div className="card-body">
                            
                            <div className="text-center">
                                <Link to={`${CARS_DB_ROOT}/${manufacturer.name}`} className="fs-4 card-title"
                                    >
                                    {manufacturer.name === manufacturer.chineseName 
                                        ? manufacturer.name
                                        : `${manufacturer.name}(${manufacturer.chineseName})`}
                                </Link>
                                
                                <div>
                                    <a href={manufacturer.officialUrl} target="_blank" rel="noreferrer noopener">
                                        <i className="fas fa-link" style={{ color: 'gray' }}></i>
                                        官網
                                    </a> 
                                </div>
                            </div>
                        </div>
                    
                        {/* Edit and Delete button will show in card-footer */}
                        {this.renderAdmin(manufacturer)}
                           
                    </div>

                </div>

                // <Field name="chineseName" component={this.renderInput} label="中文名稱"/>
                // <Field name="name" component={this.renderInput} label="名稱"/>
                // <Field name="level" component={this.renderInput} label="等級"/>
                // <Field name="officialUrl" component={this.renderInput} label="官方網站"/>
                // <Field name="logoUrl" component={this.renderInput} label="Logo位置"/>
            );
        });
    }

    render() {
        return (
            <div className="">
                <div className="row my-2">
                    <div className="col-12">
                        <h1 className="text-center text-md-start">車廠</h1>
                    </div>
                </div>

                {/* d-flex card-group row-cols-sm-4 row-cols-md-6*/}
                <div className="row row-cols-2 row-cols-sm-auto  justify-content-center ">
                    {this.renderManufacturers()}
                </div>
                
                {this.renderCreate()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    // console.log('UserId: ' + state.auth.userId)
    return { 
        // manufacturers: Object.values(state.manufacturers),
        manufacturers: _.sortBy(Object.values(state.manufacturers), 'name'),
        // currentUserId: state.auth.userId,
        isAdminUser: state.auth.isAdminUser
    };
};

export default connect(mapStateToProps, { fetchManufacturers })(ManufacturerList);
