import { useState } from "react";
import { createTodos } from "./utils";
import TodoList from "./TodoList";

const todos = createTodos();

export default function Memo() {
    const [tab, setTab] = useState('all');
    const [isDark, setIsDark] = useState(false);
    return (
        <>
        <p>useMemo</p>
        <button onClick={() => setTab('all')}>All</button>
        <button onClick={() => setTab('active')}>Active</button>
        <button onClick={() => setTab('completed')}>Completed</button>
        <br/>
        <label>
            <input type="checkbox"
            checked={isDark}
            onChange={e => setIsDark(e.target.checked)}
            /> Red mode
        </label>
        <br />
        <TodoList todos={todos} tab={tab} theme={isDark ? 'red' : 'blue'}/>
        </>
    )
}
