// Library Imports
import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import {Redirect} from 'react-router-dom';

class Profile extends Component {
    // Constructor to set state and method binds
    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
        this.saveChanges = this.saveChanges.bind(this);

        this.state = {
            editMode: false,
        }
    }

    // Method to enable edit mode
    edit() {
        this.setState({editMode: true});
    }

    // Method to update user
    saveChanges() {
        Meteor.users.update({
                _id: this.props.user._id
            },
            {
                $set: {
                    "profile.firstName": this.refs.firstName.value,
                    "profile.lastName": this.refs.lastName.value,
                    "profile.reading": this.refs.reading.value,
                    "profile.writing": this.refs.writing.value,
                    "profile.math": this.refs.math.value,
                    "profile.gpa": this.refs.gpa.value,
                    "profile.toefl": this.refs.toefl.value,
                    "profile.act": this.refs.act.value,
                }
            }
        );

        this.setState({editMode: false});
    }

    // Method to render the form version of the card
    renderEditForm() {
        return (
            <div className={"container"}>
                <div className={"card bg-info text-white"}>
                    <div className={"card-header"}>
                        <div className={"row"}>
                            <h4 style={{display: "inline-block"}}
                                className={"ml-auto mr-auto"}>{this.props.profile.firstName} "{this.props.user.username}" {this.props.profile.lastName}</h4>
                            <button className={"btn btn-success"} onClick={this.saveChanges}>Save</button>
                        </div>
                    </div>
                    <div className={"card-body"}>
                        <form>
                            <h5 className={"card-title"} align={"center"}>Personal Details</h5>
                            <div className={"row"}>
                                <div className={"col-sm-6"}>
                                    <div className={"form-group"}>
                                        <label htmlFor={"firstName"}>First Name</label>
                                        <input type={"text"} className={"form-control"} ref={"firstName"}
                                               defaultValue={this.props.profile.firstName}/>
                                    </div>
                                </div>
                                <div className={"col-sm-6"}>
                                    <div className={"form-group"}>
                                        <label htmlFor={"lastName"}>Last Name</label>
                                        <input type={"text"} className={"form-control"} ref={"lastName"}
                                               defaultValue={this.props.profile.lastName}/>
                                    </div>
                                </div>
                            </div>
                            <h5 className={"card-title"} align={"center"}>Grades</h5>
                            <div className={"row"}>
                                <div className={"col-sm-6"}>
                                    <h6 className={"card-title"} align={"center"}>SAT</h6>
                                    <div className={"form-group"}>
                                        <label htmlFor={"reading"}>Reading</label>
                                        <input type={"number"} ref={"reading"}
                                               className={"form-control form-control-sm"} min={"0"} max={"700"}
                                               defaultValue={this.props.profile.reading}/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label htmlFor={"reading"}>Writing</label>
                                        <input type={"number"} ref={"writing"}
                                               className={"form-control form-control-sm"} min={"0"} max={"700"}
                                               defaultValue={this.props.profile.writing}/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label htmlFor={"math"}>Mathematics</label>
                                        <input type={"number"} ref={"math"} className={"form-control form-control-sm"}
                                               min={"0"} max={"700"} defaultValue={this.props.profile.math}/>
                                    </div>
                                </div>
                                <div className={"col-sm-6"}>
                                    <h6 className={"card-title"} align={"center"}>Other</h6>
                                    <div className={"form-group"}>
                                        <label htmlFor={"gpa"}>GPA</label>
                                        <input type={"number"} ref={"gpa"} className={"form-control form-control-sm"}
                                               min={"0"} max={"5"} step={"any"} defaultValue={this.props.profile.gpa}/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label htmlFor={"toefl"}>TOEFL</label>
                                        <input type={"number"} ref={"toefl"} className={"form-control form-control-sm"}
                                               min={"0"} max={"120"} defaultValue={this.props.profile.toefl}/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label htmlFor={"act"}>ACT</label>
                                        <input type={"number"} ref={"act"} className={"form-control form-control-sm"}
                                               min={"0"} max={"36"} defaultValue={this.props.profile.act}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }

    // Method to render the normal version of the card
    renderProfile() {
        return (
            <div className={"container"}>
                <div className={"card bg-info text-white"}>
                    <div className={"card-header"}>
                        <div className={"row"}>
                            <h4 style={{display: "inline-block"}}
                                className={"ml-auto mr-auto"}>{this.props.profile.firstName} "{this.props.user.username}" {this.props.profile.lastName}</h4>
                            <button className={"btn btn-primary"} onClick={this.edit}>Edit</button>
                        </div>
                    </div>
                    <div className={"card-body"}>
                        <h5 className={"card-title"} align={"center"}>Personal Details</h5>
                        <p className={"card-text"}
                           style={{textAlign: 'center'}}>{this.props.profile.firstName} {this.props.profile.lastName} </p>
                        <h5 className={"card-title"} align={"center"}>Grades</h5>
                        <div className={"row"}>
                            <div className={"col-sm-6"}>
                                <h6 className={"card-title"} align={"center"}>SAT</h6>
                                <p className={"card-text"}
                                   style={{textAlign: 'center'}}>Reading: {this.props.profile.reading}</p>
                                <p className={"card-text"}
                                   style={{textAlign: 'center'}}>Writing: {this.props.profile.writing}</p>
                                <p className={"card-text"}
                                   style={{textAlign: 'center'}}>Mathematics: {this.props.profile.math}</p>
                            </div>
                            <div className={"col-sm-6"}>
                                <h6 className={"card-title"} align={"center"}>Other</h6>
                                <p className={"card-text"}
                                   style={{textAlign: 'center'}}>GPA: {this.props.profile.gpa}</p>
                                <p className={"card-text"}
                                   style={{textAlign: 'center'}}>TOEFL: {this.props.profile.toefl}</p>
                                <p className={"card-text"}
                                   style={{textAlign: 'center'}}>ACT: {this.props.profile.act}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Method to handle what to render
    render() {
        if (this.props.loggingIn) { // If the user is logging in
            return ( // Show a loading screen
                <div className={"container"}>
                    <div className={"card bg-primary text-white"}>
                        <div className={"card-body"}>
                            <h1 align={"center"} className={"card-title"}>Loading</h1>
                        </div>
                    </div>
                </div>
            );
        } else {
            if(!this.props.user){ // if no user connected, redirect
                return (<Redirect to={"/"}/>);
            }
            if (this.state.editMode) {
                return this.renderEditForm();
            } else {
                return this.renderProfile();
            }

        }
    }
}

// Track if the user is logging in, the current logged in user and their profile
export default withTracker(() => {
    return {
        loggingIn: Meteor.loggingIn(),
        user: Meteor.user(),
        profile: Meteor.user() ? Meteor.user().profile : {},
    }
})(Profile);