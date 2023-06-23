import React, { FC } from 'react'

interface Props {
    todo: string;
    setTodo: (value: string)=>void;
    addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
    adding: boolean;
}

const TodoForm: FC<Props> = ({ todo, setTodo, addTodo, adding }) => {
    return (
        <form onSubmit={addTodo}>
            <input type="text" placeholder='Your Todo' value={todo} onChange={e => setTodo(e.target.value)} className='w-full border border-black rounded-md px-3 py-4' />
            <button type="submit" disabled={todo.length <= 0} className='w-full mt-2 bg-black text-white py-4 rounded-md min-w-full hover:bg-opacity-80 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-opacity-80 flex justify-center items-center'
            > {

                    adding ? <div className='w-4 h-4 rounded-full border border-white border-dashed animate-spin'></div> : 'Add Todo'
                }
            </button>
        </form>
    )
}

export default TodoForm