import React, { Component } from "react";

export class EventsClass extends Component {
    // event handler
    clickHandler() {
        console.log("Clicked the class button");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>
                    Click me - class component
                </button>
            </div>
        );
    }
}

export default EventsClass;
