import React from 'react';
import { connect } from 'react-redux';
import { fetchCarmodel } from '../../../actions';

class CarModelShow extends React.Component {
    
    componentDidCatch() {
        this.props.fetchCarmodel(this.props.match.params.id);
    }

    render() {
        
        if (!this.props.carmodel) {
            return <div>Loading...</div>
        }
        
        const { name, category, officialUrl, isArchived, manufacturer} = this.props.carmodel;

        return (
            <div>
                <lable>eererer</lable>
                <h1>{name}</h1>
                <h2>{category}</h2>
                <h5>{officialUrl}</h5>
                <h5>{isArchived}</h5>
                <h5>{manufacturer}</h5>
            </div>
        );
    }
    
};

const mapStateToProps = (state, ownProps) => {
    return { carmodel: state.carmodels[ownProps.match.params.id] }
};

export default connect(
    mapStateToProps, 
    { fetchCarmodel }
)(CarModelShow);

