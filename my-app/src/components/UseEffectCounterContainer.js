import React, { useState } from 'react'
import UseEffectCounter from './UseEffectCounter';

function UseEffectCounterContainer() {
  const [display, setDisplay] = useState(true);
    return (
        <div onClick={() => {
            setDisplay(!display)
        }}>
            <button>Toggle display</button>
            {display && <UseEffectCounter />}
        </div>
    );
}

export default UseEffectCounterContainer