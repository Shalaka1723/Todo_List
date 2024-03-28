import React, { useState } from 'react'
import Navbar from './Navbar'

function Home() {

const [input,setInput] = useState("")
const [arr,setArr] = useState([])
console.log(input)

const addtoArr= ()=>{
    setArr(input)
}
console.log(arr)
  return (
    <>
        <Navbar/>

        <div className='bg-black p-3'>
        <input onChange={(event)=>{ setInput(event.target.value) }} type='text' className='  w-1/2 text-black' ></input>
        <button className='bg-violet-300 hover:bg-violet-800 py-1 px-1 text-sm font-bold rounded-md mx-6'>Add</button>
        </div>

        <div>
            <ul className='pl-5'> 
                <li><input type="checkbox" id="" />afvegerg
               
                <button onClick={addtoArr} className='bg-violet-300 hover:bg-violet-800 py-1 px-1 text-sm font-bold rounded-md mx-2'>Edit</button>
                <button className='bg-violet-300 hover:bg-violet-800 py-1 px-1 text-sm font-bold rounded-md mx-2'>Delete</button>
              
                </li>
                
            </ul>
        </div>


    </>
  )
}

export default Home