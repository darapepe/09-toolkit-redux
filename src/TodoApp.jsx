import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosAPI"


export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);

    //const { data: todos = [], isLoading } = useGetTodosQuery();
    //console.log(data);
    const { data: todo = [], isLoading } = useGetTodoQuery(todoId);

    const NextTodo = () => {
        setTodoId(todoId + 1);
    }

    const PrevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    }


    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
            <pre>{JSON.stringify(todo)}</pre>
            {/* <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'DONE' : 'Pending'} </strong>
                        {todo.title}
                    </li>
                ))}
            </ul> */}
            <button onClick={PrevTodo}>Prev Todo</button>
            <button onClick={NextTodo}>Next Todo</button>
        </>
    )
}
