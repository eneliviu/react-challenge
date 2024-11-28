import React, { useState } from "react";

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: "" });
    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={(e) =>
                        // always spread old object before setting new ones
                        setName({
                            ...name, // spreading operator
                            firstName: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={(e) =>
                        // always spread old object before setting new ones
                        setName({
                            ...name, // spreading operator
                            lastName: e.target.value,
                        })
                    }
                />
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    );
}

export default UseStateWithObjects;
