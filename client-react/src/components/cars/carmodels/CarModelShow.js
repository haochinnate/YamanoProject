import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchManufacturers, fetchCarmodelsByManufacturer } from '../../../actions';

class CarModelShow extends React.Component {
    
    componentDidMount() {
        // console.log(this.props.manufacturer);
        // console.log(this.props.carmodel);
        // this.props.fetchManufacturers();
        // if (this.props.manufacturer) {
        //     // console.log(this.props.manufacturer);
        //     this.props.fetchCarmodelsByManufacturer(this.props.manufacturer);
        // }
    }

    renderVideos() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="..." className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
    
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
  
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }

    // https://getbootstrap.com/docs/5.0/components/carousel/
    render() {
        
        if (!this.props.carmodel) {
            return <div>Loading...</div>
        }
        
        const { name, bodyStyle, officialUrl, isArchived, 
            manufacturerId, alias, releaseDate, yearsInfo, mainImage} = this.props.carmodel;

        // <div>{carmodel.name}</div>
        // <div>{carmodel.bodyStyle}</div>
        // <div>{carmodel.officialUrl}</div>
        // <div>{carmodel.isArchived}</div>
        // <div>{carmodel.manufacturerId}</div>
        // <div>{carmodel.alias}</div>
        // <div>{carmodel.releaseDate}</div>
        // <div>{carmodel.yearsInfo}</div>
        // <div>{carmodel.mainImage}</div>  

        return (
            <div>
                {this.renderVideos()}
                <h1>Eererer</h1>
                <h1>{name}</h1>
                <h2>{bodyStyle}</h2>
                <h5>{officialUrl}</h5>
                <h5>{isArchived}</h5>
                <h5>{manufacturerId}</h5>
            </div>
        );
    }
    
};

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    // console.log(state);
    const tmpManufacturer = _.find(state.manufacturers, { name: ownProps.match.params.manufacturerName});
    // console.log(tmpManufacturer);

    const tmpCarModel = _.find(state.carmodels, { name: ownProps.match.params.carmodelName});
    // console.log(tmpCarModel);
    return { 
        carmodel: tmpCarModel,
        manufacturer: tmpManufacturer
    }
};

export default connect(
    mapStateToProps, 
    { fetchManufacturers, fetchCarmodelsByManufacturer }
)(CarModelShow);

