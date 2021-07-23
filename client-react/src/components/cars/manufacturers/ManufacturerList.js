import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchManufacturers } from '../../../actions';
import { MANUFACTURERS_ROOT } from '../../../consts/url';

class ManufacturerList extends Component {

    componentDidMount() {
        this.props.fetchManufacturers();
    }

    renderAdmin(manufacturer) {
        // if (this.props.isSignedIn) {
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
        // }
    }

    renderCreate() {
        // if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right'}}>
                    <Link to={`${MANUFACTURERS_ROOT}/new`} className="btn btn-success"> 
                        Create Manufacturer
                    </Link>
                </div>
            );
        // } 
    }

    renderManufacturers() {
        return this.props.manufacturers.map(manufacturer => {
            return (
                <div className="col" key={manufacturer.id}>
                    

                    <Link to={`${MANUFACTURERS_ROOT}/${manufacturer.id}`}>
                        <img src="..." className="img-fluid" alt="..."/>
                    </Link>

                    <div className="container">
                        <Link to={`${MANUFACTURERS_ROOT}/${manufacturer.id}`} className="fs-4">
                            {manufacturer.name === manufacturer.chineseName 
                                ? manufacturer.name
                                : `${manufacturer.name}(${manufacturer.chineseName})`}
                        </Link>
                        <div className="description">
                            <a href={manufacturer.officialUrl} target="_blank">官網</a>   
                        </div>
                    </div>
                    {this.renderAdmin(manufacturer)}
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
            <div>
                <h2>Manufacturers</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-8">
                        {/* <div class="col">Column</div>
                        <div class="col">Column</div>
                        <div class="col">Column</div>
                        <div class="col">Column</div> */}
                        {this.renderManufacturers()}
                    </div>
                </div>
                {/* <div className="ui celled list">
                    {this.renderList()}
                </div> */}
                {this.renderCreate()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { 
        manufacturers: Object.values(state.manufacturers),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchManufacturers })(ManufacturerList);
