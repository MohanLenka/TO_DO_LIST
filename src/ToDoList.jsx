import { useEffect, useMemo, useRef, useState } from "react"
import { useList } from "./Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPenToSquare} from '@fortawesome/free-solid-svg-icons'
const ToDoList=()=>{
   const{list,AddAction,RemoveAction}=useList()
   const[input,setinput]=useState("")
   const task=useRef()
   const add=useRef()

    return(
        <>
       
        <center className="center">
        <h1>TO-DO-LIST</h1>
          <div className="input">
            <input type="text" placeholder="Add some Task" ref={task} onChange={(e)=>{
                setinput(e.target.value)
            }}></input>
            <button ref={add} className="add" onClick={()=>{
             AddAction(input)
             if(task.current.value!=""){
                task.current.value=""
             }
             if(add.current.innerText=="Update"){
               add.current.innerText="Add"
             }
            }}>Add</button>
            <div className="list">
                    {
                      
                        list.map((item)=>{
                            return(
                                <div className="tasks" key:index>
                                         <p>{item}</p>
                                         <div className="buttons">
                                         <button onClick={()=>{
                                        RemoveAction(item);
                                        task.current.value=item
                                        add.current.innerText="Update"
                                    }} 
                                    ><span> <FontAwesomeIcon icon={ faPenToSquare} ></FontAwesomeIcon></span></button>
                                   
                                    <span><button onClick={()=>{
                                        RemoveAction(item)
                                    }}>delete</button></span>
                                   
                                    </div>
                                    
                                    </div>
                            )
                        })
                    }
                   
                </div>
          </div>
          <h2></h2>
        </center>
        
        </>
    )
}
export default ToDoList