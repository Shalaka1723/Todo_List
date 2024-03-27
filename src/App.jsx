import React from 'react'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <div className='container bg-cyan-200 mx-auto rounded-xl p-5 my-5'>
      
        <div className='addTodo'>
        <h2 classname=''>Your Todos</h2>
        <input type='text'/>
        <button>Add</button>
        </div>
        <h2 classname=''>Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            <div className='buttons'>
              <button>Edit</button>
              <button>Delete</button>
            </div>

          </div>
        </div>
      
    </div>


    </>
  )
}

export default App