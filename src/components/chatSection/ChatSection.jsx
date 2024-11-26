import React, { useContext } from 'react'
import "./ChatSection.css"
import { LuSendHorizonal } from "react-icons/lu";
import { dataContext } from '../../context/UserContext';
import user from "../../assets/user.png";
import ai from "../../assets/ai.png";

const ChatSection = () => {
  let {sent,input,setInput,showResult,resultData,recentPrompt,loading}=useContext(dataContext)
  return (
    <div className='chatsection'>
        <div className='topsection'>
          {!showResult?<div className='headings'>
                <span>NAMASTE SHASHI,</span>
                <span>I'm Your Assistant</span>
                <span>What can I help you?</span>
             </div>:<div className='result'>
                <div className='userbox'>
                    <img src={user} alt='' width="50px"/>
                    <p>{recentPrompt}</p>
                </div>
                <div className="aibox">
                <img src={ai} alt='' width="50px"/>
                {loading?<div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>:<p>{resultData}</p>}
                
                </div>
              </div>}
             
        </div>
        <div className='bottomsection'>
            <input onChange={(e)=>setInput(e.target.value)} type='text' placeholder='Enter a prompt' value={input}/>
            {
              input?<button className='sentbtn' onClick={()=>{
                sent(input)
              }}><LuSendHorizonal/></button>:null
            }
            
        </div>
    </div>
  )
}

export default ChatSection
