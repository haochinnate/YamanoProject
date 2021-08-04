import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCarmodel, editCarmodel } from '../../../actions';
import CarModelForm from './CarModelForm';

class CarModelEdit extends React.Component {
    
    componentDidMount() {
        this.props.fetchCarmodel(this.props.match.params.id);
    };

    onSubmit = (formValues) => {
        // console.log(formValues);
        this.props.editCarmodel(this.props.match.params.id, formValues);
    };

    render() {

        if (!this.props.carmodel) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3 className="my-2 fw-bold">Edit a carmodel</h3>
                <CarModelForm
                    initialValues={_.pick(
                        this.props.carmodel,
                        'name', 'bodyStyle', 'officialUrl', 
                        'isArchived', 'manufacturerId', 'alias',
                        'releaseDate', 'yearsInfo', 'mainImage'
                    )}
                    onSubmit={this.onSubmit}/>
            </div>
        )
    };
};

const mapStateToProps = (state, ownProps) => {
    return { carmodel: state.carmodels[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps, 
    { fetchCarmodel, editCarmodel }
)(CarModelEdit);
