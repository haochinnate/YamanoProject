import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCarmodels } from '../../../actions';

class CarModelList extends React.Component {
    
    componentDidMount() {
        this.props.fetchCarmodels();
    }

    renderAdmin(carmodel) {
        return (
            <div className="right floated content">
                <Link to={`/cars/carmodels/edit/${carmodel.id}`} className="ui button primary">
                    Edit
                </Link>
                <Link to={`/cars/carmodels/delete/${carmodel.id}`} className="ui button negative">
                    Delete
                </Link>
            </div>
        );
    }

    renderCreate() {
        // if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right'}}>
                    <Link to="/cars/carmodels/new" className="ui button primary"> 
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
                        <Link to={`/cars/${carmodel.manufacturer.name}/${carmodel.name}`} className="header">
                            {carmodel.name}()
                        </Link>
                        <div className="description">
                            <a href={carmodel.officialUrl} target="_blank">官網</a>   
                        </div>
                        {carmodel.isArchived}
                        <div className="description">{carmodel.releaseDate}</div>
                        <div className="description">{carmodel.yearsInfo}</div>
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

export default connect(mapStateToProps, { fetchCarmodels })(CarModelList);

