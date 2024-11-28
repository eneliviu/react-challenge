import React, { Component } from "react";

export class ControlledForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            category: "website",
            comments: "",
        };
    }

    handlerNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
    handlerCategoryChange = (event) => {
        this.setState({
            category: event.target.value,
        });
    };
    handlerCommentsChange = (event) => {
        this.setState({
            comments: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your name:</label>
                        <input
                            value={this.state.name}
                            onChange={this.handlerNameChange}
                            id="id-name"
                            name="name"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select
                            id="id-category"
                            name="category"
                            value={this.state.category}
                            onChange={this.handlerCategoryChange}
                        >
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments</label>
                        <textarea
                            id="id-comments"
                            name="comments"
                            value={this.state.comments}
                            onChange={this.handlerCommentsChange}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ControlledForm;
