import React from 'react';
import { connect } from 'react-redux';
import { fetchManufacturer } from '../../../actions';
import CarModelList from '../carmodels/CarModelList';

class ManufacturerShow extends React.Component {
    
    componentDidCatch() {
        this.props.fetchManufacturer(this.props.match.params.id);
    }

    render() {
        
        if (!this.props.manufacturer) {
            return <div>Loading...</div>
        }
        
        const { name, chineseName, level, officialUrl, logoUrl} = this.props.manufacturer;

        return (
            <div className="ui container">
                <h1>{name}</h1>
                <h2>{chineseName}</h2>
                <h5>{level}</h5>
                <h5>{officialUrl}</h5>
                <h5>{logoUrl}</h5>
                <CarModelList />
            </div>
        );
    }
    
};

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return { manufacturer: state.manufacturers[ownProps.match.params.id] }
};

export default connect(
    mapStateToProps, 
    { fetchManufacturer }
)(ManufacturerShow);
