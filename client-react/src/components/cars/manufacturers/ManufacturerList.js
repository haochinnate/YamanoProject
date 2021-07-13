import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchManufacturers } from '../../../actions';

class ManufacturerList extends Component {

    componentDidMount() {
        this.props.fetchManufacturers();
    }

    renderAdmin(manufacturer) {
        if (this.props.isSignedIn) {
            return (
                <div className="right floated content">
                    <Link to={`/cars/manufacturers/edit/${manufacturer.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/cars/manufacturers/delete/${manufacturer.id}`} className="ui button negative">
                        Delete
                    </Link>
                    {/* <button className="ui button primary">Edit</button> */}
                    {/* <button className="ui button negative">Delete</button> */}
                </div>
            );
        }
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right'}}>
                    <Link to="/cars/manufacturers/new" className="ui button primary"> 
                        Create Manufacturer
                    </Link>
                </div>
            );
        } 
    }

    renderList() {
        return this.props.manufacturers.map(manufacturer => {
            return (
                <div className="item" key={manufacturer.id}>
                    {this.renderAdmin(manufacturer)}
                    <i className="large middle aligned icon car"/>
                    <div className="content">
                        {manufacturer.name}({manufacturer.chineseName})
                        <div className="description">{manufacturer.officialUrl}</div>
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
            <div>
                <h2>Manufacturers</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
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
