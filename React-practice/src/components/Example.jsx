
import { useState } from "react";

export default function Example(){
    const [count, setCount] = useState(0);
    const countManner = count > 0 ? "positive" : count < 0 ? "negative" : "zero";

    return(
        <div className="example-container">
            <div className="count-display">{count}  {countManner}</div>
            <button className="btn btn-increment" onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button className="btn btn-decrement" onClick={() => setCount(prev => prev - 1)}>Decrement</button>
            <button className="btn btn-reset" onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}