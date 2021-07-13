import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../../Modal';
import history from '../../../history';
import { fetchManufacturer, deleteManufacturer } from '../../../actions';

class ManufacturerDelete extends React.Component{
    
    deleteManufacturer = () => {
        this.props.deleteManufacturer(this.props.match.params.id);
    };

    componentDidMount = () => {
        this.props.fetchManufacturer(this.props.match.params.id);
    };

    renderActions() {
        return (
            <React.Fragment>
                <button onClick={() => { this.deleteManufacturer() }} 
                    className="ui button negative">Delete</button>
                <Link to="/cars" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.manufacturer) {
            return 'Are you sure you want to delete this manufacturer?';
        }

        return `Are you sure you want to delete the manufacturer with name: ${this.props.manufacturer.name}?`;
    }

    render() {
        return (
            <Modal 
                title="Delete Manufacturer"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
    
};

const mapStateToProps = (state, ownProps) => {
    return { manufacturer: state.manufacturers[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { fetchManufacturer, deleteManufacturer }
)(ManufacturerDelete);
