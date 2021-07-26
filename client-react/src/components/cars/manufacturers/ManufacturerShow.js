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
                <div className="d-flex align-items-center">
                    <div className="p-2">
                        <img style={{ height: '50px' }} src={window.location.origin + `/images/manufacturers/${name}.png`} alt={name}/>
                    </div>
                    <div className="p-2 fs-1 text-center">
                        <p>{name === chineseName ? name : `${name}(${chineseName})`}</p>
                    </div>
                    <div class="p-2 fs-3 text-center">
                        <a href={officialUrl} target="_blank">官網</a>   
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
