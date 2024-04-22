import React, { useEffect, useState } from 'react'
import { GrEdit } from "react-icons/gr";
import { MdDeleteSweep } from "react-icons/md";
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {

  const [todo, setTodo] = useState(" ")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

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

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)

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
    <div className=' bg-cyan-200  w-screen h-screen text-white'> 
        <Navbar/>

        <div className='container bg-stone-700 w-2/3 mx-auto rounded-xl p-5 my-5 min-[h]:80vh'>
          
            <div className='addTodo my-5'>
              <h2 className='text-xl font-bold text-cyan-200'>Add a Todo</h2>
              <input type='text'onChange={handleChange} value={todo} className='w-1/2 rounded-xl px-2 text-black' />
              <button onClick={handleAdd} disabled={todo.length<=0} className='bg-violet-300 disabled:bg-red-400 hover:bg-violet-800 py-1 px-1 text-cyan-700 text-sm font-bold rounded-md mx-6'>Save</button>
            </div>
            <input onChange={toggleFinished} type='checkbox' checked={showFinished} className='text-white'/> Show Finished
            <h2 className='text-lg font-bold'>Your Todos</h2>
            <div className="todos">
              {todos.length===0 && <div className=''> No Todos for now </div> }
              {todos.map(item=>{

                return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex w-1/4 justify-between my-2">
                  <div className='flex'>             
                    <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                    <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                  </div>
                  <div className='buttons flex h-full'>
                    <button onClick={(e)=>handleEdit(e, item.id)}  className='bg-stone-300 hover:bg-violet-800 py-1 px-1 text-sm font-bold rounded-md mx-2'> <GrEdit /> </button>
                    <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-300 hover:bg-violet-800 py-1 px-1 text-sm font-bold rounded-md mx-2'> <MdDeleteSweep className='bg-color-black' /> </button>
                  </div>

              </div>
          })} 
            </div>   
        </div>

    </div>
    </>
  )
}

export default App