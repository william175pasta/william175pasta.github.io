import React, { useState, useContext, useReducer } from 'react';


const TestUseReducer = () => {
    const myReducer = (state, action) => {

        switch (action.type) {
            case "add10":
                return {
                    count: state.count + 10,
                    total: state.total - 10
                };
            case "add100":
                return {
                    count: state.count + 100,
                    total: state.total - 100
                };
            case "add500":
                return {
                    count: state.count + 500,
                    total: state.total - 500
                };
            case "clear":
                console.log("total : ", state.count)
                return {
                    total: state.total + state.count,
                    count: 0
                };
            case "spendCount":
                if (state.total < 0) {
                    alert("操作錯誤")
                    return {
                        count: 0,
                        total: state.total + state.count
                    }
                } else if (state.total === 0) {
                    return {
                        count: 0,
                        total: 0
                    }
                }
                return {
                    total: state.total,
                    count: 0
                };
            default:
                return state;
        }
    }
    const [states, dispatch] = useReducer(myReducer, { count: 0, total: 1000 });

    return (
        <div>
            <button onClick={() => dispatch({ type: 'add10' })}  >+10</button>
            <button onClick={() => dispatch({ type: 'add100' })}>+100</button>
            <button onClick={() => dispatch({ type: 'add500' })}>+500</button>
            <button onClick={() => dispatch({ type: 'clear' })}>Clear 下注</button>
            <button onClick={() => dispatch({ type: 'spendCount' })}
                onDoubleClick={() => { states.total = 1000; alert("...") }}
            >送出</button>
            <h2>餘額 :{states.total}</h2>
            <h2>下注 :{states.count}</h2>
        </div >
    )

}
export default TestUseReducer