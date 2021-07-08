import React from 'react'
import { connect } from 'react-redux';
import { fetchCarmodels } from '../../../actions';

class CarModelList extends React.Component {
    
    componentDidMount() {
        this.props.fetchCarmodels();
    }

    renderList() {
        return this.props.carmodels.map(carmodel => {
            return (
                <div className="item" key={carmodel.id}>
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        {carmodel.name}
                        <div className="description">{carmodel.officialUrl}</div>
                    </div>
                </div>
                // <Field name="name" component={this.renderInput} label="名稱"/>
                // <Field name="category" component={this.renderInput} label="車型"/>
                // <Field name="officialUrl" component={this.renderInput} label="官方網站"/>
                // <Field name="isActive" component={this.renderInput} label="IsActive"/>
                // <Field name="manufacturer" component={this.renderInput} label="車廠"/>
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
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { carmodels: Object.values(state.carmodels) }
};

export default connect(mapStateToProps, { fetchCarmodels })(CarModelList);

