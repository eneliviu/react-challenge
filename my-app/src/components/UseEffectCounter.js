import React, { useState, useEffect } from "react";

function UseEffectCounter() {
    const [count, setCount] = useState(0); // initialize count variable to 0
    const [time, setTime] = useState(0);

    // run on every render: pass no array parameter
    // run conditionally: pass an array with appropriate props or state
    // run only once: pass an aempty array
    // cleanup function - executed before a component unmounts: pass no array parameter

    // useEffect runs a function on every render
    useEffect(() => {
        console.log("count 1 effect");
        document.title = count;
    }, [count]); // only run when the count changes

    // const [count2, setCount2] = useState(0); // initialize count2 variable to 0
    // useEffect(() => {
    //     console.log("count 2 effect");
    //     document.title = count2;
    // }, [count2]); // only run when the count2 changes

    useEffect(() => {
        console.log("Creating timer");
        const interval = setInterval(() => {
            console.log("Interval executed");
            setTime((time) => time + 1);
        }, 1000);

        // return the cleanup function
        return () => {
            console.log("cleaning up");
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
                Increment Count ({count})
            </button>
            {/* <button onClick={() => setCount2((count2) => count2 + 1)}>
                Increment Count2 ({count2})
            </button>*/}
            <h2>Time is {time}</h2>
        </div>
    );
}

export default UseEffectCounter;
