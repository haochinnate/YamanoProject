import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TRIMLEVELS_ROOT } from '../../../consts/url';
import { BODY_STYLES_ZH } from '../../../consts/bodyStyles';



class TrimLevelList extends React.Component {
    
    componentDidMount() {
        // console.log('TrimLevelList componentDidMount');

        if (this.props.carmodel) {
            // console.log(this.props.carmodel);
            this.props.fetchTrimLevelsByCarmodel(this.props.carmodel);
        }
    }

    renderSpecTable() {
        return (
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    renderAdmin(trimlevel) {
        if (this.props.isAdminUser) {
            return (
                <div className="text-center">
                    <Link to={`${TRIMLEVELS_ROOT}/edit/${trimlevel.id}`} className="btn btn-primary m-1">
                        Edit
                    </Link>
                    <Link to={`${TRIMLEVELS_ROOT}/delete/${trimlevel.id}`} className="btn btn-danger m-1">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderCreate() {
        if (this.props.isAdminUser) {
            return (                
                <div style={{ textAlign: 'right'}}>
                    <Link to={`${TRIMLEVELS_ROOT}/new`} className="btn btn-success mb-3"> 
                        Create Trim Level
                    </Link>
                </div>
            );
        } 
    }


    render() {
        return (
            <div className="container">
                {/* {this.renderSpecTable()} */}
                <div className="mx-2 my-2 d-flex justify-content-center">
                    {this.renderCreate()}
                </div>
            </div>
        )
    };
    
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.match)
    // console.log('mapStateToProps');
    // console.log(state.carmodels)
    return { 
        // carmodels:  Object.values(
        // _.pickBy(state.carmodels, 
        //     (carmodel) => {
        //         return String(carmodel.manufacturerId) === String(ownProps.manufacturer.id);
        //     }
        // )),
        isAdminUser: state.auth.isAdminUser
    }
};

export default connect(mapStateToProps, {  })(TrimLevelList);
// export default TrimLevelList;
