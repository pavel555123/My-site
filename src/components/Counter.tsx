import React, {useState} from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={() => setCount(count + 1)}>Increment</button>
            <button className={classes.btn} onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;
