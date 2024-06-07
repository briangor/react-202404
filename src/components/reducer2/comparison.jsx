import React, { useReducer, useState } from 'react'

export default function Comparison() {
    const [age, setAge] = useState(0);
    const [state, dispatch] = useReducer(reducer, { age: 0});

    return (
        <> 
        <p>Comparison</p>
            <span>without reducer</span>
            <button onClick={() => {
                setAge(age + 1);
            }}>
                Increment age
            </button>
            <span>Hello! You are {age}.</span><br/>
            <span>with reducer</span>
            <button onClick={() => {
                dispatch({type: 'increment_age'})
            }}>
                Increment age
            </button>
            <span>Hello! you are {state.age}</span>
        </>
    )
}


function reducer(state, action) {
    if (action.type === 'increment_age') {
        return {
            age: state.age + 1
        };
    }
    throw Error('Unknown action.');
}