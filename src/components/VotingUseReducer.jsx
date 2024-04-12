import { useReducer } from "react";

const initialState = { votes: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'upvote':
            return { votes: state.votes + 1};
        case 'downvote':
            return { votes: state.votes - 1};
        default:
            throw new Error();
    }
}

export default function VoteUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Current Votes: {state.votes}
            <button onClick={() => dispatch({type: 'upvote'})}>Upvote</button>
            <button onClick={() => dispatch({type: 'downvote'})}>Downvote</button>
        </>
    )
}