import React from "react";

class StatefulGreetingWithCallback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        // always use the built-in setState() to update state
        // setState() is asynchroneous
        // pass callback function to setState() as second argument to execute after the state update is completed
        this.setState((prevState, prevProps) => {
            console.log("Previsous State:", prevState);
            console.log("Previsous Props:", prevProps);
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
                count: prevState.count + 1,
            }
        })
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log("Previsous State:", prevState);
            console.log("Previsous Props:", prevProps);
            return {
                count: prevState.count + 1,
            }
        });
    }


    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
                <button onClick={() => this.increment()}>Increment</button>
                <p>You've clicked {this.state.count} times</p>
            </div>
        );
    }
}

export default StatefulGreetingWithCallback;
