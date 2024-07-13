import { act, createContext, useContext, useState } from "react";

const Listcontext=createContext()

export const ListProvider=({children})=>{
    const[list,setlist]=useState([])
    const AddAction=(action)=>{
        if(action==""){
            return
        }
        else{ setlist([...list,action])
            console.log(list)}
       
    }
  const RemoveAction=(action)=>{
    return setlist(list.filter((item)=>{
        return item!=action
    }))
  }
    return(
        <Listcontext.Provider value={{list,AddAction,RemoveAction}}>
            {children}
        </Listcontext.Provider>
    )
    
}
export const useList=()=>{
     return useContext(Listcontext)
}