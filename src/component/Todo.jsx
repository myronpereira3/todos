import React, { useState } from 'react'
import "./Style.css"


const Todo = () => {
const[inputList,setInputList]=useState("")
const[Items,setItems]=useState([])

const itemEvent=(e)=>{
  setInputList(e.target.value)

}
const listOfitems=()=>{
setItems((olditems)=>{
  return [...olditems,inputList]
})
setInputList("")
}


  return(
    <>
    <div className='main-container'>
      <div className='center_container'>
      
        
        <h1 className='todo_h1'>ToDo List</h1>
        <div className='lodo_list'>
         <ol>
          
           {Items.map((e)=>{
       return(
         <li>{e}</li>
       )
           })}
         </ol>
        </div>
      <div className='input'>

        <input type="text" placeholder='Write Something' value={inputList} onChange={itemEvent} />
        <button onClick={listOfitems}>+</button>
      </div>
      </div>
    </div>
    </>
  )
   
}

export default Todo