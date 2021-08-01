import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../../Modal';
import history from '../../../history';
import { fetchCarmodel, deleteCarmodel } from '../../../actions';

class CarModelDelete extends React.Component{

    deleteCarmodel = () => {
        this.props.deleteCarmodel(this.props.match.params.id);
    };

    componentDidMount = () => {
        this.props.fetchCarmodel(this.props.match.params.id);
    };

    renderActions() {
        return (
            <React.Fragment>
                <button onClick={() => {this.deleteCarmodel()}} className="btn btn-danger">Delete</button>
                <Link to="/cars" className="btn btn-secondary">Cancel</Link>
            </React.Fragment>
        ); 
    }

    renderContent() {
        if (!this.props.carmodel) {
            return 'Are you sure you want to delete this carmodel?'
        }

        return `Are you sure you want to delete the carmodel with title: ${this.props.carmodel.title}`
    }

    render() {
        // console.log(this.props)        
        return (
            <Modal
                title="Delete Carmodel"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { carmodel: state.carmodels[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps, 
    { fetchCarmodel, deleteCarmodel }
)(CarModelDelete);

