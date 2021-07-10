import React from 'react';
import { connect } from 'react-redux';
import { fetchManufacturer } from '../../../actions';


class ManufacturerEdit extends React.Component {
    
    componentDidMount() {
        this.props.fetchManufacturer(this.props.match.params.id);
    };

    render() {
        return (
            <div>
                {this.props.manufacturer.name}
            </div>
        )
    };
};

const mapStateToProps = (state, ownProps) => {
    return { manufacturer: state.manufacturer[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps, 
    { fetchManufacturer }
)(ManufacturerEdit);
