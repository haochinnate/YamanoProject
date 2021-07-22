import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchManufacturer, editManufacturer } from '../../../actions';
import ManufacturerForm from './ManufacturerForm';

class ManufacturerEdit extends React.Component {
    
    componentDidMount() {
        this.props.fetchManufacturer(this.props.match.params.id);
    };

    onSubmit = (formValues) => {
        // console.log(formValues);
        this.props.editManufacturer(this.props.match.params.id, formValues);
    };

    render() {

        if (!this.props.manufacturer) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Edit a Manufacturer</h3>
                <ManufacturerForm 
                    initialValues={_.pick(
                        this.props.manufacturer, 
                        'name', 'chineseName', 'level', 'officialUrl', 'logoUrl'
                    )}
                    onSubmit={this.onSubmit}/>
            </div>
        )
    };
};

const mapStateToProps = (state, ownProps) => {
    return { manufacturer: state.manufacturers[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps, 
    { fetchManufacturer, editManufacturer }
)(ManufacturerEdit);
