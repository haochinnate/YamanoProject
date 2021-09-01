import React from 'react';
import { connect } from 'react-redux';
import { fetchManufacturerByName } from '../../../actions';
import _ from 'lodash';
import CarModelList from '../carmodels/CarModelList';

class ManufacturerShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchManufacturerByName(this.props.match.params.manufacturerName);
    }

    render() {
        
        if (!this.props.manufacturer) {
            return <div>Loading...</div>
        }
        
        // other properties level, officialUrl, logoUrl
        const { name, chineseName } = this.props.manufacturer;

        return (
            <div className="container">
                <div className="row m-2">
                    <div className="col-12 fs-1 text-center">
                        <img style={{ height: '50px' }} src={window.location.origin + `/images/manufacturers/${name}.png`} alt={name}/>
                        <label className="align-bottom">{name === chineseName ? name : `${name}(${chineseName})`}</label>
                    </div>
                </div>
                
                <CarModelList manufacturer={this.props.manufacturer} />
            </div>
        );
    }
    
};

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    // console.log(state);
    return { manufacturer: _.find(state.manufacturers, { name: ownProps.match.params.manufacturerName}) }
};

export default connect(
    mapStateToProps, 
    { fetchManufacturerByName }
)(ManufacturerShow);
