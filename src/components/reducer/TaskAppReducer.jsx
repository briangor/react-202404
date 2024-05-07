import AddTask from './AddTask';
import TaskList from './TaskList';
import { useReducer } from 'react';
import tasksReducer from './tasksReducer';

export default function TaskAppReducer() {
    // const [tasks, setTasks] = useState(initialTasks);
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    function handleAddTask(text) {
        // setTasks([
        //     ...tasks,
        //     {
        //         id: nextId++,
        //         text: text,
        //         done: false,
        //     },
        // ]);

        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        // setTasks(
        //     tasks.map((t) => {
        //         if(t.id == task.id) {
        //             return task;
        //         } else {
        //             return t;
        //         }
        //     })
        // );

        dispatch({
            type: 'changed',
            task: task,
        });
    }

    function handleDeleteTask(taskId) {
        // setTasks(tasks.filter((t) => t.id !== taskId));

        dispatch({
            type: 'deleted',
            id: taskId,
        });
    }

    return (
        <>
        <h1>Prague itenerary (Reducer)</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList 
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
        />
        </>
    );
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];

