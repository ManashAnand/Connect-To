import React, { useEffect, useState } from 'react'
import './Chat.css'
import { useLocation } from "react-router-dom";
// socket example

import  io  from "socket.io-client";
import { userAuth } from '../context/UserContext';
import axios from 'axios';

const Chat = () => {
    const [userInfo] = userAuth();
    const [msg,setMsg] = useState("");
    const [allMsg,setAllMsg] = useState([{}]);
    const location = useLocation();
    const [otherPersonId,setOtherPersonId] = useState("");
    const [myId,setMyId] = useState("");


      
    const socket = io('http://localhost:4000');
    socket.on("connect", () => {
    // socket.emit('userConnected', myId);
      socket.on('recieve-message',(message) => {
          console.log(message)
      })    
    })

    useEffect(() => {
      setOtherPersonId(location.pathname.split('/')[2]);
      console.log("The other person id "+location.pathname.split('/')[2])  
      const userInfo = localStorage.getItem("user-data");
      const userId = JSON.parse(userInfo);
      setMyId(userId._id);
      console.log("The socket id of mine "+myId)
      // console.log("the my id is "+)

    },[])

   

    

    const handleSendMessage = async (e) => {
        // const {data} = await fetch(`http://localhost:4000/userSocketId/${otherPersonId}`)
        // console.log("The socket id of otheruser "+data)
        socket.emit('send-message',msg,otherPersonId);
        
    }

  return (
    
    <>
      <div className="Chat_Main_Container">
            <div className="CHat_Main_Box">
                <div className="chat_Container">
                {/* otherPerson */}
                    <div className="firstPerson">
                        <div className="otherPersonPhoto">
                            photo
                        </div>
                        <div className="otherPersonMsg">
                            hey Lorem ipsum dolor sit amet consectetur
                        </div>
                    </div>
                </div>
                <div className="input_btn_container">
                    <input type="text" placeholder='Enter the message' onChange={(e) => setMsg(e.target.value)}/>
                    <div className="sendBtn" onClick={handleSendMessage}>Send</div>
                </div>
            </div>
      </div>
    </>
  )
}

export default Chat
