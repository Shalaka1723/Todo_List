import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {

  const [todo, setTodo] = useState(" ")
  const [todos, setTodos] = useState([])

const handleEdit = ()=>{
  
}

const handleDelete = ()=>{

}

const handleChange = (e)=>{
  setTodo(e.target.value)

}

const handleAdd = ()=>{
  setTodos([...todos, {id:uuidv4(), todo, isCompleted: false}])
  setTodo('')
  console.log(todos)

}

const handleCheckbox = (e) => {
  let id = e.target.name; 
  let index = todos.findIndex(item=()=>{
    return item.id === id;
  })
  let newTodos = todos;
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  setTodos(newTodos)
}


  return (
    <>
    <Navbar/>

    <div className='container bg-cyan-200 mx-auto rounded-xl p-5 my-5 min-[h]:80vh'>
      
        <div className='addTodo my-5'>
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input type='text'onChange={handleChange} value={todo} className='w-1/2 text-black' ></input>
        <button onClick={handleAdd} className='bg-violet-300 hover:bg-violet-800 py-1 px-1 text-sm font-bold rounded-md mx-6'>Add</button>
        </div>
      
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.map(item=>{

            return<div key={todo.id} className="todo flex w-1/4 justify-between my-2">
              <input onChange={handleCheckbox} type="checkbox" value={todo.isCompleted} name={todo.id} id="" />
              <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              <div className='buttons'>
                <button onClick={handleEdit} className='bg-violet-300 hover:bg-violet-800 py-1 px-1 text-sm font-bold rounded-md mx-2'>Edit</button>
                <button onClick={handleDelete} className='bg-violet-300 hover:bg-violet-800 py-1 px-1 text-sm font-bold rounded-md mx-2'>Delete</button>
              </div>

          </div>
      })} 
        </div>   
    </div>


    </>
  )
}

export default App