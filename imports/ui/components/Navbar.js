// Library Imports
import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import {Redirect} from 'react-router-dom';


export class Navbar extends Component {
    // Constructor to set the initial state
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
        }
    }

    // Method to log the user out and redirect them
    logout(event) {
        event.preventDefault();
        Meteor.logout();
        this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect) { // If the user is being redirected, redirect them properly after logging out
            this.setState({redirect: false});
            return (<Redirect to="/"/>);
        }

        return (
            <nav className={"navbar navbar-expand-sm bg-menu-light navbar-dark box-shadow fixed-top"} id={"nav"}>
                <Link to={'/'} className={"navbar-brand logo justify-content-center"}>
                    <img src={"/images/logo.png"} alt={"MyUniversity"}/>
                </Link>
                <ul className={"navbar-nav nav-list ml-auto justify-content-end"}>
                    <li className={"nav-item"}>
                        <NavLink activeClassName={'active'} to={'/home'} className={"nav-link d-md-inline-block"}><i
                            className={"fa fa-home"}/> <span
                            className={"d-sm-none d-lg-inline-block"}> Home</span></NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink activeClassName={'active'} to={'/about'} className={"nav-link d-md-inline-block"}><i
                            className={"fa fa-info"}/> <span
                            className={"d-sm-none d-lg-inline-block"}> About</span></NavLink>
                    </li>
                    {this.props.user ? <li className={"nav-item"}>
                        <NavLink activeClassName={'active'} to={'/profile'} className={"nav-link d-md-inline-block"}><i
                            className={"fa fa-address-card"}/> <span
                            className={"d-sm-none d-lg-inline-block"}> Profile</span></NavLink>
                    </li> : null}
                    <li className={"nav-item"}>
                        {this.props.user ?
                            <button onClick={this.logout.bind(this)} className={"btn btn-danger d-md-inline-block"}><i
                                className={"fa fa-chevron-left"}/> Logout
                            </button>
                            : <Link to={'/login'}>
                                <button className={"btn btn-blue d-md-inline-block"}><i
                                    className={"fa fa-chevron-right"}/> Login
                                </button>
                            </Link>
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}