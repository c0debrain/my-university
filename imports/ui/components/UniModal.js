// Library Imports
import React, {Component} from 'react';

// The modal to display for more info about a university
export class UniModal extends Component {
    render() {
        return (
            <div className={"container"}>
                <div className={"back-shadow"} onClick={this.props.toggleModal}/>
                <div className={"card bg-primary custom-modal text-white"}>
                    <div className={"card-header text-center"}>
                        <div className={"row"}>
                            <h4 style={{display: 'inline-block'}} className={"ml-auto mr-auto"}>{this.props.uni.name}</h4>
                            <button className={"btn btn-danger"} onClick={this.props.toggleModal}>Close</button>
                        </div>
                    </div>
                    <div className={"card-body"}>
                        <p className={"card-text"}>{this.props.uni.description}</p>
                        <div className={"row"}>
                            <div className={"col-sm-6"}>
                                <h5 className={"card-text"} align={"center"}>Academic Courses</h5>
                                <ul>
                                    <div align={"center"} dangerouslySetInnerHTML={{__html: this.props.uni.academics}}/>
                                </ul>
                            </div>
                            <div className={"col-sm-6"}>
                                <h5 className={"card-text"} align={"center"}>Athletic Courses</h5>
                                <ul>
                                    <div align={"center"} dangerouslySetInnerHTML={{__html: this.props.uni.athletics}}/>
                                </ul>
                            </div>
                        </div>
                        <h6 align={"center"}>Contact Information</h6>
                        <p className={"card-text"}>
                            {this.props.uni.contactInfo}
                        </p>
                        <p className={"card-text"}>
                            {this.props.uni.internationalContactInfo}
                        </p>
                        <p className={"card-text"} align="center">
                            <a className={"text-danger"} href={this.props.uni.applyLink}>Apply Now</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
