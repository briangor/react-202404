import React, { useMemo } from 'react'
import { filterTodos } from './utils';

export default function TodoList({ todos, theme, tab }) {
    // without memoization
    // console.time('timer');
    // const visibleTodos = filterTodos(todos, tab);
    // console.timeEnd('timer');

    // with memoization
    console.time('timer (memo)');
    const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
    console.timeEnd('timer (memo)');

  return (
    <div className={theme}>
        <ul>
            <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
            { visibleTodos.map(todo => (
                <li key={todo.id}>
                    { todo.completed ? 
                    <s>{ todo.text }</s> : 
                    todo.text
                    }
                </li>
            ))}
        </ul>
    </div>
  );
}
