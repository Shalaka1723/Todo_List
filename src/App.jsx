import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {

  const [todo, setTodo] = useState(" ")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  

const handleEdit = (e, id)=>{
  let t = todos.filter(i=>i.id === id)
  setTodo(t[0].todo)
  let newTodos = todos.filter(item=>{
    return item.id!==id
  });
  setTodos(newTodos)
  saveToLS()
}

const handleDelete = (e, id)=>{
  let index = todos.findIndex(item=>{
    return item.id === id;
  })
  let newTodos = todos.filter(item=>{
    return item.id!==id
  });
  setTodos(newTodos)
  saveToLS()
}

const handleChange = (e)=>{
  setTodo(e.target.value)
}

const handleAdd = ()=>{
  setTodos([...todos, {id:uuidv4(), todo, isCompleted: false}])
  setTodo('')
  saveToLS()

}

const handleCheckbox = (e) => {
  let id = e.target.name; 
  let index = todos.findIndex(item=>{
    return item.id === id;
  })
  let newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  setTodos(newTodos)
  saveToLS()
}


  return (
    <>
    <Navbar/>

    <div className='container bg-cyan-200 mx-auto rounded-xl p-5 my-5 min-[h]:80vh'>
      
        <div className='addTodo my-5'>
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type='text'onChange={handleChange} value={todo} className='w-1/2 text-black' />
          <button onClick={handleAdd} className='bg-violet-300 hover:bg-violet-800 py-1 px-1 text-sm font-bold rounded-md mx-6'>Save</button>
        </div>
      
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length===0 && <div className=''> No Todos for now </div> }
          {todos.map(item=>{

            return <div key={item.id} className="todo flex w-1/4 justify-between my-2">
              <div className='flex'>             
                <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              </div>
              <div className='buttons flex h-full'>
                <button onClick={(e)=>handleEdit(e, item.id)} className='bg-violet-300 hover:bg-violet-800 py-1 px-1 text-sm font-bold rounded-md mx-2'>Edit</button>
                <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-300 hover:bg-violet-800 py-1 px-1 text-sm font-bold rounded-md mx-2'>Delete</button>
              </div>

          </div>
      })} 
        </div>   
    </div>


    </>
  )
}

export default App