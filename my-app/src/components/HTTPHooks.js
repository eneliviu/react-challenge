import React, { useState, useEffect } from "react";
import axios from "axios";

function HTTPHooks() {

    // Create set properties and methods
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState(null);

    // Don't need a hook for the POST method
    // All you need is a handler that triggers post method
    const postToAPI = () => {
        console.log("It works");
        axios
            .post("https://jsonplaceholder.typicode.com/posts/", {
                title: "Hello world!",
                body: "It works!",
                userID: 123,
            })
            .then((response) => {
                //update the data in the state with the API response
                setPostMessage(response.status === 201
                    ? `Success! Title: ${response.data.title}`
                    : 'Failed!'
                );
            })
            .catch((error) => {
                this.setState({
                    error: error.message,
                });
            });
    };

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/19")
            .then((response) => {
                console.log(response);
                //update the data in the state with the API response
                const data = Array.isArray(response.data)
                    ? response.data
                    : [response.data];
                setPosts(data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    return (
        <div>
            
            <button onClick={postToAPI}>Create Post</button>
            <p>{postMessage}</p>

            <h2>Posts:</h2>
            {/* Use curly braces to use javascripte to iterate
                throught the array of postst in the state */}
            {posts.length ? (
                posts.map((post) => (
                    <div key={post.id}>
                        <h2>
                            {post.id}. {post.title}
                        </h2>
                        <h4>By User ID {post.userId}</h4>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            ) : error ? (
                <p>{error}</p>
            ) : (
                <h4>Loading posts...</h4>
            )}
        </div>
    );
}

export default HTTPHooks;
