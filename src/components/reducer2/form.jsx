import { useReducer, useState } from "react";

const initialState = { name: 'Taylor', age: 42 };

export default function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [name, setName] = useState('Gang');
    const [age, setAge] = useState(33);

    function handleButtonClick() {
        dispatch({ type: 'incremented_age' });
    }

    function handleInputChange(e) {
        dispatch({
            type: 'changed_name',
            nextName: e.target.value
        });
    }

    return (
        <>
            <p>Form</p>
            <input
                value={state.name}
                onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>Increment age</button>
            <p>Hello, {state.name}. You are {state.age}.</p>
            <p>--</p>
            <input
                value={name}
                onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>Increment age</button>
            <p>Hello, {name}. You are {age}.</p>
        </>
    );
}

function reducer(state, action) {
    switch (action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed_name': {
            return {
                name: action.nextName,
                age: state.age
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}