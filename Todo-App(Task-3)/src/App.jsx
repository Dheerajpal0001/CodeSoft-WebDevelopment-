import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import Todos from './components/Todos';
import { addTodo } from './store/userSlice';

function App() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
      setInput({
        title:'',
        description:''
      });
  }

  return (
    <>
      <div className='w-screen min-h-screen bg-gray-700 p-10 text-white'>
        <form action="" onSubmit={addTodoHandler} className='flex flex-col items-center justify-center'>
          <input type="text"
            placeholder='Add Todo'
            required
            name='title'
            value={input.title}
            className='w-1/2 p-2 rounded-md m-3 text-black'
            onChange={handleChange} />
          <textarea name="description"
          value={input.description} 
          className='w-1/2 p-2 rounded-md m-3 text-black' 
          onChange={handleChange} 
          required
          id="desc" 
          placeholder='Enter Description'></textarea>
          <button type='submit' className='bg-blue-600 font-medium text-md rounded-lg px-3 py-2 m-3 '>Add Todo</button>
        </form>
        <Todos />
      </div>
    </>
  )
}

export default App


