import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions';
import './GoogleAuth.scss';

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // initialized
            window.gapi.client.init({
                clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
                scope: 'email'
            }).then(() => {
                // get and store the reference of 'auth' object
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get());

                this.auth.isSignedIn.listen(this.onAuthChange);
            });

        });
    };

    onAuthChange= (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <div className="google-btn" onClick={this.onSignOutClick}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p className="btn-text"><b>Sign Out</b></p>
                </div>
            );
        } else {
            return (
                <div className="google-btn" onClick={this.onSignInClick}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p className="btn-text"><b>Sign In with Google</b></p>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
};

export default connect(
    mapStateToProps,
    { signIn, signOut }
)(GoogleAuth);

