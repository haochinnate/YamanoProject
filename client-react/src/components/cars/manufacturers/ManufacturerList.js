import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchManufacturers } from '../../../actions';

class ManufacturerList extends Component {

    componentDidMount() {
        this.props.fetchManufacturers();
    }

    renderList() {
        return this.props.manufacturers.map(manufacturer => {
            return (
                <div className="item" key={manufacturer.id}>
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
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { manufacturers: Object.values(state.manufacturers) }
};

export default connect(mapStateToProps, { fetchManufacturers })(ManufacturerList);
