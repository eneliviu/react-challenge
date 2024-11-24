import React from "react";

function ConsitionalRenderingFunctional(props) {
    return (
        <div>
            <h1>{props.connected ? "Connected" : "Not connected"}</h1>
        </div>
    );
}

export default ConsitionalRenderingFunctional;
