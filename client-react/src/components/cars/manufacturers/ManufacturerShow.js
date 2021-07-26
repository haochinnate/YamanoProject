import React from 'react';
import { connect } from 'react-redux';
import { fetchManufacturer } from '../../../actions';
import CarModelList from '../carmodels/CarModelList';

class ManufacturerShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchManufacturer(this.props.match.params.id);
    }

    render() {
        
        if (!this.props.manufacturer) {
            return <div>Loading...</div>
        }
        
        const { name, chineseName, level, officialUrl, logoUrl} = this.props.manufacturer;

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
    return { manufacturer: state.manufacturers[ownProps.match.params.id] }
};

export default connect(
    mapStateToProps, 
    { fetchManufacturer }
)(ManufacturerShow);
