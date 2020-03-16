import React, { useState, useContext, useReducer, useEffect } from 'react';
import MusicTest from './musicTest'
import Button from '@material-ui/core/Button';


const HooksUseEffectTwo = () => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    const openClick = () => {
        if (open) {
            console.log(open)
            setOpen(false)
        } else {
            console.log(open)
            setOpen(true)
        }
    }
    return (
        <div style={{ padding: '10px 0' }} >
            {/* <button type="button" onClick={increment}>+1</button>
            <button type="button" onClick={decrement}>-1</button>
            <button type="button" onClick={reset}>Clear</button>
            <h5>{count}</h5> */}
            <Button onClick={openClick} variant="outlined" color="secondary">
                Youtube 開關
            </Button>
            {
                open === true ? <MusicTest /> : ("")
            }
        </div >

    )
}
export default HooksUseEffectTwo








