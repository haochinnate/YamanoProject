import React, {cloneElement } from 'react'
import { Redirect, Route } from 'react-router'
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, isAdminUser, ...rest}) => {
    // console.log('PrivateRoute');
    // console.log(isAdminUser);

    return (
        <Route {...rest} render = { props => (
            isAdminUser ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ 
                    pathname: '/cars',
                    state: { from: props.location}
                }} />
            )
        )}/>
    );
}

const mapStateToProps = (state) => {
    return { 
        isAdminUser: state.auth.isAdminUser
        // isAdminUser: true
    }
};

export default connect(mapStateToProps)(PrivateRoute);
