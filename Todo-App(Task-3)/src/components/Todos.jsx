import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo, ischecked } from '../store/userSlice';

const Todos = () => {
    const dispatch = useDispatch();
    const { todos, completedTodos } = useSelector((state) => state.app);

    return (
        <div className="container mx-auto">
            <div className="text-left text-2xl font-bold mb-4">Pending Todos</div>
            <ul className="flex flex-wrap items-center justify-center border-2 border-white px-3 py-4">
                {todos.map((e) => (
                    <li
                        key={e.id}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-4 flex flex-col justify-between items-center bg-zinc-800 px-4 py-2 rounded shadow-lg"
                    >
                        <div className="w-full flex flex-col justify-start items-center">
                            <div className='w-full flex justify-between'>
                                <input
                                    type="checkbox"
                                    className='text-5xl'
                                    checked={e.checked || false}
                                    onChange={() => dispatch(ischecked(e.id))}
                                />
                                <span className="text-white mr-3 p-2 rounded-full my-2">{e.date}</span>
                            </div>
                            <div className="text-white border-2 w-full mr-3 p-2 my-2 rounded">{e.title}</div>
                            <div className="text-white border-2 w-full mr-3 p-2 rounded my-2">{e.description}</div>
                        </div>
                        <div className='w-full flex justify-between'>
                            {!e.checked && (
                                <button
                                    onClick={() => dispatch(updateTodo({
                                        id: e.id,
                                        title: prompt("Enter new title:", e.title) || e.title,
                                        description: prompt("Enter new description:", e.description) || e.description,
                                    }))}
                                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md mt-2"
                                >
                                    Edit
                                </button>
                            )}
                            <button
                                onClick={() => dispatch(removeTodo(e.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md mt-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="text-left text-2xl font-bold mb-4">Completed Todos</div>
            <ul className="flex flex-wrap items-center justify-center border-2 border-white px-3 py-4">
                {completedTodos.map((e) => (
                    <li
                        key={e.id}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-4 flex flex-col justify-between items-center bg-green-800 px-4 py-2 rounded shadow-lg"
                    >
                        <div className="w-full flex flex-col justify-end items-center">
                            <div className='w-full flex justify-between'>
                                <input
                                    type="checkbox"
                                    className='text-5xl'
                                    checked={e.checked || false}
                                    onChange={() => dispatch(ischecked(e.id))}
                                />
                                <span className="text-white mr-3 p-2 rounded-full my-2">{e.date}</span>
                            </div>
                            <div className="text-white border-2 w-full mr-3 p-2 my-2 rounded">{e.title}</div>
                            <div className="text-white border-2 w-full mr-3 p-2 rounded my-2">{e.description}</div>
                        </div>
                        <div className='w-full flex justify-between'>
                            <button
                                onClick={() => dispatch(removeTodo(e.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md mt-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;

