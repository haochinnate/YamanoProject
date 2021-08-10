import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchTrimLevel, editTrimLevel } from '../../../actions';
import TrimLevelForm from './TrimLevelForm'

class TrimLevelEdit extends React.Component {

    componentDidMount() {
        // this.props.fetchTrimLevel(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        console.log('onSubmit in TrimLevelEdit');
        console.log(formValues);

        // this.props.editTrimLevel(this.props.match.params.id);
    };

    render() {
        if (!this.props.trimlevel) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3 className="my-2 fw-bold">Edit a trimlevel</h3>
                <TrimLevelForm
                    initialValues={_.pick(
                        this.props.trimlevel,
                        'name', 
                        'isArchived'
                    )}
                    onSubmit={this.onSubmit}/>
            </div>
        )
    };
    
}

const mapStateToProps = (state, ownProps) => {
    return { trimlevel: state.trimlevels[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { fetchTrimLevel, editTrimLevel }
)(TrimLevelEdit);
