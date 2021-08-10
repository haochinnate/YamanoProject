import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../../Modal';
import history from '../../../history';
import { fetchTrimLevel, deleteTrimLevel } from '../../../actions';

class TrimLevelDelete extends Component {
    render() {
        return (
            <div>
                TrimLevelDelete
            </div>
        )
    }
}

export default TrimLevelDelete;

