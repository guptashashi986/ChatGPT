import React, { useContext, useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import {FaPlus, FaRegMessage} from "react-icons/fa6";
import "./Sidebar.css";
import { dataContext } from '../../context/UserContext';
const Sidebar = () => {
    const[extend,setExtend]=useState(false)
    const {sent,prevPrompt,newChat}=useContext(dataContext)

  return (
    <div className='sidebar'>
        <GiHamburgerMenu id='ham' onClick={()=>{
            setExtend(prev=>!prev)
        }}/>

        <div className="newchat" onClick={()=>{
          newChat()
        }}>
          <FaPlus/>
          {extend?<p>New Chat</p>:null}  
        </div>
        

        <div className="recent">
            <FaRegMessage/>
            {extend?<p>Recent Searched </p>:null}
        </div>
    </div>
  )
}

export default Sidebar