import React, { Component } from 'react'
import axios from 'axios'


// Make the API request after the component mounts

export class HTTPRequests extends Component {
    constructor(props) {
      super(props)

      this.state = {
         posts: [],
         error: null
      }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts/19")
        .then(response => {
            console.log(response);
            //update the data in the state with the API response
            this.setState({
                // check if the response is an array or a single object
                posts: Array.isArray(response.data)
                    ? response.data
                    : [response.data],
            });
        })
        .catch(
            error => {
                this.setState({
                    error: error.message
                })
            }
        )

    }


  render() {
      // render the UI based on the new state values
      const posts = this.state.posts;
      return (
          <div>
              <h2>Posts</h2>
              {/* Use curly braces to use javascripte to iterate
                throught the array of postst in the state */}
              {
                posts.length ? (
                    posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.id}. {post.title}</h2>
                            <h4>By User ID {post.userId}</h4>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    ))
                ) : (
                    this.state.error
                    ? <p>{this.state.error}</p>
                    : <h4>Loading posts...</h4>
                )
              }
          </div>
      );
  }
}

export default HTTPRequests