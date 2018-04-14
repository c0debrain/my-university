// Library Imports
import React, {Component} from 'react';
import {Accounts, STATES} from 'meteor/std:accounts-bootstrap';
import {withTracker} from 'meteor/react-meteor-data';
import {Redirect} from 'react-router-dom';

// Import the custom login template
import {CustomLogin} from "../../api/customLogin";

// Settings for the user config andUI
Accounts.config({
   sendVerificationEmail: false,
   forbidClientAccountCreation: false
});

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL',
    minimumPasswordLength: 8,
});

class LogIn extends Component {
    // Constructor to initalise the state
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
        }
    }

    // Redirect the user
    enableRedirect() {
        this.setState({ redirect: true });
    }

    // Handle the rendering of the page
    render() {
        if(this.state.redirect || this.props.user != null){ // if the page should redirect (after a login) or if no user
            return (<Redirect to="/dashboard"/>);
        }

        return ( // else just load the login component
            <div className={"container"}>
                <div className={"card bg-info text-white"}>
                    <div className={"card-body"} ref={"loginForm"}>
                        <CustomLogin onSignedInHook={this.enableRedirect.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    return {
        user: Meteor.user(),
    }
})(LogIn);