import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../../Modal';
import history from '../../../history';
import { fetchTrimLevel, deleteTrimLevel } from '../../../actions';

class TrimLevelDelete extends Component {

    deleteTrimLevel = () => {
        this.props.deleteTrimLevel(this.props.match.params.id);
    };

    componentDidMount = () => {
        this.props.fetchTrimLevel(this.props.match.params.id);
    };

    renderActions() {
        return (
            <React.Fragment>
                <button onClick={() => {this.deleteTrimLevel()}} className="btn btn-danger">Delete</button>
                <Link to="/cars" className="btn btn-secondary">Cancel</Link>
            </React.Fragment>
        ); 
    }

    renderContent() {
        if (!this.props.trimlevel) {
            return 'Are you sure you want to delete this trimlevel?'
        }
        console.log(this.props.trimlevel)
        return `Are you sure you want to delete the trimlevel with title: ${this.props.trimlevel.name}?`
    }



    render() {
        console.log(this.props)
        return (
            <Modal 
                title="Delete Trimlevel"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={()=> history.goBack()}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)

    return { trimlevel: state.trimlevels[ownProps.match.params.id] };
};
export default connect(
    mapStateToProps,
    { fetchTrimLevel, deleteTrimLevel }
)(TrimLevelDelete);

