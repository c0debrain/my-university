// Library Imports
import React, {Component} from 'react';

// Importing the modal to display for more info
import {UniModal} from "./UniModal";

export class University extends Component {
    // constructor to set the inital state and bind methods
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            modalShow: false,
        }
    }

    // Method to truncate a string to a certain amount of characters
    truncate(string, characters) {
        if (string.length > characters) {
            return (string.substr(0, characters) + '...');
        } else {
            return (string);
        }
    }

    // method to toggle whether or not the modal should be shown
    toggleModal() {
        this.setState({ modalShow: !this.state.modalShow });
    }

    render() {
        return (
            <div>
                <div className={"card bg-light"} style={{marginBottom: 50}}>
                    <img className={"card-img-top"} src={this.props.uni.image} alt={this.props.uni.name}/>
                    <div className={"card-body"}>
                        <h4 className={"card-title"}>{this.props.uni.name}</h4>
                        <p className={"card-text"}>{this.truncate(this.props.uni.description, 200)}</p>
                        <button className={"btn btn-info"} onClick={this.toggleModal}>More</button>
                    </div>
                </div>
                {this.state.modalShow && <UniModal key={this.props.uni._id} uni={this.props.uni} toggleModal = {this.toggleModal.bind(this)} />}
            </div>
        );
    }
}