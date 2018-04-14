// Library Imports
import React, { Component } from 'react';

// Simple component for the home page
export class Home extends Component {
    render() {
        return (
            <div className={"container"}>
                <div className={"card bg-primary text-white"}>
                    <div className={"card-header"}>
                        <h4>Welcome to MyUniversity!</h4>
                    </div>
                    <div className={"card-body"}>
                        <h5 className={"card-title"}>Dear Visitors,</h5>
                        <div className={"row"}>
                            <div className={"col-lg-8"}>
                                <p className={"card-text"}>
                                    MyUniversity is an online platform created by a team of students in Thessaloniki and Athens, Greece.
                                    This website aims to help you select a university you can enter, based on your grades.
                                    Many students that graduate from High School struggle to choose a University because most of the time they have the ability to enter so many of them.
                                    In order to help alleviate that problem, MyUniversity offers you a way to quickly look through Universities you can enter and get information about them.</p>
                                <p className={"card-text"}>
                                    In order to get started, simply create an account and head to the dashboard!
                                </p>
                            </div>
                            <div className={"d-sm-none d-lg-inline-block col-lg-4"}>
                                <img className={"img-responsive about-img"} src={"/images/logo.png"}/>
                            </div>
                        </div>
                        <p className={"card-text"}>
                            With pure love; the organizing team of <img src={"/images/myu.png"} className={"img-responsive"}/> ,
                        </p>
                        <p className={"card-text"}>
                            NAME REDACTED, NAME REDACTED, Evangelos Ch, NAME REDACTED
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}