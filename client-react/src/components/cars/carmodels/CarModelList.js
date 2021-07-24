import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCarmodelsByManufacturer } from '../../../actions';
import { CARMODELS_ROOT } from '../../../consts/url';

class CarModelList extends React.Component {
    
    componentDidMount() {
        if (this.props.manufacturer) {
            console.log(this.props.manufacturer);
            this.props.fetchCarmodelsByManufacturer(this.props.manufacturer);
        }
    }

    renderAdmin(carmodel) {
        return (
            <div className="right floated content">
                <Link to={`${CARMODELS_ROOT}/edit/${carmodel.id}`} className="btn btn-primary m-1">
                    Edit
                </Link>
                <Link to={`${CARMODELS_ROOT}/delete/${carmodel.id}`} className="btn btn-danger m-1">
                    Delete
                </Link>
            </div>
        );
    }

    renderCreate() {
        // if (this.props.isSignedIn) {
            return (                
                <div style={{ textAlign: 'right'}}>
                    <Link to={`${CARMODELS_ROOT}/new`} className="btn btn-success mb-3"> 
                        Create CarModel
                    </Link>
                </div>
            );
        // } 
    }

    renderList() {
        return this.props.carmodels.map(carmodel => {
            return (
                <div className="item" key={carmodel.id}>
                    <i className="large middle aligned icon car"/>
                    <div className="content">
                        <Link to={`/cars/${carmodel.name}/${carmodel.name}`} className="header">
                            {carmodel.name}()
                        </Link>
                        <div className="description">
                            <a href={carmodel.officialUrl} target="_blank">官網</a>   
                        </div>
                        {carmodel.isArchived}
          
                        <div>{carmodel.id}</div>
                        <div>{carmodel.name}</div>
                        <div>{carmodel.bodyStyle}</div>
                        <div>{carmodel.officialUrl}</div>
                        <div>{carmodel.isArchived}</div>
                        <div>{carmodel.manufacturerId}</div>
                        <div>{carmodel.alias}</div>
                        <div>{carmodel.releaseData}</div>
                        <div>{carmodel.yearsInfo}</div>
                        <div>{carmodel.mainImage}</div>
                    </div>
                </div>
                // <Field name="name" component={this.renderInput} label="名稱"/>
                // <Field name="category" component={this.renderInput} label="車型"/>
                // <Field name="officialUrl" component={this.renderInput} label="官方網站"/>
                // <Field name="isArchived" component={this.renderInput} label="IsArchived"/>
                // <Field name="manufacturer" component={this.renderInput} label="車廠"/>
                // alias
                // releaseDate
                // yearsInfo
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Models</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { carmodels: Object.values(state.carmodels) }
};

export default connect(mapStateToProps, { fetchCarmodelsByManufacturer })(CarModelList);

