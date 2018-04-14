// Library Imports
import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Redirect} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

// Importing the database and also a component to render each database element
import {Universities} from "../../api/universities";
import {University} from "../components/University";

class Dashboard extends Component {
    // Constructor to bind the methods to this element and set initial state
    constructor(props) {
        super(props);

        this.toggleFilter = this.toggleFilter.bind(this);

        this.state = {
            filtering: true,
        }
    }

    // Rendering each university component, based on the state
    renderUniversities() {
        if(this.state.filtering){
            return this.props.universities.map((uni) => (
                <University key={uni._id} uni={uni}/>
            ))
        } else {
            return this.props.allUniversities.map((uni) => (
                <University key={uni._id} uni={uni}/>
            ))
        }
    }

    // method to toggle the filter
    toggleFilter() {
        this.setState({filtering: !this.state.filtering,});
    }

    render() {
        if(!this.props.user){ // if no user connected, redirect
            return (<Redirect to={"/"}/>)
        }

        return ( // else just display the page normally
            <div className={"container"}>
                <div className={"bg-primary text-white"} style={{padding: 20, borderRadius: 50, marginBottom: 20}}>
                    <input type="checkbox" readOnly checked={this.state.filtering} onClick={this.toggleFilter}/>Show only matching universities
                </div>
                {this.renderUniversities()}
            </div>
        )
    }
}

// Tracking all unis the user is qualified to enter, and all unis in general
export default withTracker(() => {
    return {
        user: Meteor.user(),
        universities: Universities.find({
            $and: [
                {toefl: {$lte: Meteor.user().profile.toefl}},
                {
                    $or: [
                        {gpa: {$lte: Meteor.user().profile.gpa}},
                        {act: {$lte: Meteor.user().profile.act}},
                    ]
                },
                {
                    $or: [
                        {reading: {$lte: Meteor.user().profile.reading}},
                        {writing: {$lte: Meteor.user().profile.writing}},
                        {math: {$lte: Meteor.user().profile.math}},
                    ]
                }
            ]
        }).fetch(),
        allUniversities: Universities.find({}).fetch(),
    }
})(Dashboard);

