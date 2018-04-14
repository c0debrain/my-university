// Library Imports
import React, {Component} from 'react'
import {Link} from 'react-router-dom';

// Simple page to provide a button to go back ot the main page if the path has not been found
export class NotFound extends Component {
    render() {
        return (
            <div className={"container"}>
                <div className={"card bg-danger text-white"}>
                    <div className={"card-header"}>
                        <h4>Something went wrong :(</h4>
                    </div>
                    <div className={"card-body"}>
                        <h3 className={"card-title"}>Error 404</h3>
                        <p className={"card-text"}>The page you're looking for has not been found.
                        It has been deleted or it never existed to begin with. We are terribly sorry for that.</p>
                        <Link to={'/'}><button className={"btn"}>Return to Home</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}