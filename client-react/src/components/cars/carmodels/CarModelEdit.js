import React from 'react';
import { connect } from 'react-redux';
import { fetchCarmodel } from '../../../actions';


class CarModelEdit extends React.Component {
    
    componentDidMount() {
        this.props.fetchCarmodel(this.props.match.params.id);
    };

    render() {
        return (
            <div>
                {this.props.carmodel.name}
            </div>
        )
    };
};

const mapStateToProps = (state, ownProps) => {
    return { carmodel: state.carmodels[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps, 
    { fetchCarmodel }
)(CarModelEdit);
