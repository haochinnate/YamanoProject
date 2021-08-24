import React, { Component } from 'react';
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
                <div className="text-center">
                    <Link to={`${MANUFACTURERS_ROOT}/edit/${manufacturer.id}`} className="btn btn-primary m-1">
                        Edit
                    </Link>
                    <Link to={`${MANUFACTURERS_ROOT}/delete/${manufacturer.id}`} className="btn btn-danger m-1">
                        Delete
                    </Link>
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
                // <div className="col col-12 col-sm-6 col-md-4 col-lg-2" key={manufacturer.id}>
                    
                //     <Link to={`${CARS_DB_ROOT}/${manufacturer.name}`} className="text-center">
                //         <img src={window.location.origin + `/images/manufacturers/${manufacturer.name}.png`}
                //             className="img-fluid ratio ratio-1-1" alt={manufacturer.name}/>
                //     </Link>

                //     <div className="text-center">
                //         <Link to={`${CARS_DB_ROOT}/${manufacturer.name}`} className="fs-4 text-nowrap">
                //             {manufacturer.name === manufacturer.chineseName 
                //                 ? manufacturer.name
                //                 : `${manufacturer.name}(${manufacturer.chineseName})`}
                //         </Link>
                //         <div className="fs-6">
                //             <a href={manufacturer.officialUrl} target="_blank">官網</a>   
                //         </div>
                //     </div>
                //     {this.renderAdmin(manufacturer)}
                // </div>
                // style={{ width: '18rem', height: '18rem' }} justify-content-stretch
                <div className="col-6 col-md-2 my-2" key={manufacturer.id}>
                    
                    <div className="card" >
                        <Link to={`${CARS_DB_ROOT}/${manufacturer.name}`} className="text-center" 
                            >
                            <img src={window.location.origin + `/images/manufacturers/${manufacturer.name}.png`}
                                className="card-img-top img-fluid"  alt={manufacturer.name}/>
                        </Link>
                    
                        <div className="card-body">
                            <div className="text-center">
                                <Link to={`${CARS_DB_ROOT}/${manufacturer.name}`} className="fs-5">
                                    {manufacturer.name === manufacturer.chineseName 
                                        ? manufacturer.name
                                        : `${manufacturer.name}(${manufacturer.chineseName})`}
                                </Link>
                                <div className="fs-8">
                                    <a href={manufacturer.officialUrl} target="_blank">官網</a>   
                                </div>
                            </div>
                        </div>
                    
                        <div className="card-footer">
                            {this.renderAdmin(manufacturer)}
                        </div>
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

                {/*  d-flex row-cols-1 row-cols-sm-auto */}
                <div className="row justify-content-center">
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
        manufacturers: Object.values(state.manufacturers),
        // currentUserId: state.auth.userId,
        isAdminUser: state.auth.isAdminUser
    };
};

export default connect(mapStateToProps, { fetchManufacturers })(ManufacturerList);
