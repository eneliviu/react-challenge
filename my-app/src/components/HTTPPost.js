import React, { Component } from "react";
import axios from "axios";

export class HTTPPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiResponse: null,
            error: null,
        };
    }
    postToAPI = () => {
        console.log("It works");
        axios
            .post("https://jsonplaceholder.typicode.com/posts/", {
                title: "Hello world!",
                body: "It works!",
                userID: 123,
            })
            .then((response) => {
                //update the data in the state with the API response
                this.setState({
                    apiResponse: response.data
                });
            })
            .catch(
                error => {
                this.setState({
                    error: error.message,
                });
            });
    };

    render() {
        const apiResponse = this.state.apiResponse;
        return (
            <div>
                <button onClick={this.postToAPI}>Create Post</button>
                {apiResponse ? (
                    <div>
                        <h1>{apiResponse.title}</h1>
                        <p>post id: {apiResponse.id}</p>
                        <p>user id: {apiResponse.userID}</p>
                    </div>
                ) : this.state.error ? (
                    <p>{this.state.error}</p>
                ) : (
                    <h4>Please click the button above</h4>
                )}
            </div>
        );
    }
}

export default HTTPPost;
