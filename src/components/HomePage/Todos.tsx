import { TodoModel } from '@/models/todo';
import React, { FC } from 'react'

interface Props {
    todos: TodoModel[];
    checkTodo: (todo: TodoModel) => void;
    onDelete: (id: string) => void;
}

const Todos: FC<Props> = ({ todos, checkTodo, onDelete }) => {
    return (
        todos.map(todo => (
            <div key={todo.id} className='flex items-center justify-between border border-black rounded-md px-3 py-4 mt-2'>
                <aside className='flex items-center gap-2 justify-center'>
                    <input type="checkbox" checked={todo.isDone} onChange={() => checkTodo(todo)} />
                    <p className={`${todo.isDone && "line-through"}`}>{todo.todo}</p>
                </aside>
                <button onClick={() => onDelete(todo.id)} className='px-5 py-1 border border-black rounded-md'>Delete</button>
            </div>
        ))
    )
}

export default Todos