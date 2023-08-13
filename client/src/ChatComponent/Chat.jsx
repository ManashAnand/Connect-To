import React, { useEffect, useState } from 'react'
import './Chat.css'
import { useLocation, useNavigate } from "react-router-dom";

import { userAuth } from '../context/UserContext';
import axios from 'axios';

const Chat = () => {
    const [userInfo] = userAuth();
    const [msg,setMsg] = useState("");
    const [allMsg,setAllMsg] = useState([{}]);
    const location = useLocation();
    const [otherPersonId,setOtherPersonId] = useState("");
    const [myId,setMyId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      setOtherPersonId(location.pathname.split('/')[2]);
      console.log("The other person id "+location.pathname.split('/')[2])  
      const userInfo = localStorage.getItem("user-data");
      const userId = JSON.parse(userInfo);
      setMyId(userId._id);
      console.log("The socket id of mine "+userId?._id)
      
    },[])

    useEffect(() => {
      getRoomId(myId,otherPersonId)
    },[myId])

    const getRoomId = async (myId,anotherPersonId) => {
      try {
        const data = await axios.post('http://127.0.0.1:4000/post/setCall',{myId,anotherPersonId});
        console.log(data?.data?.videoUid);
        navigate(`/room/${data?.data?.videoUid}`)
      } catch (error) {
        console.log(error)
      }
    }

   

    

    const handleSendMessage = async (e) => {
        
    }

  return (
    
    <>
     video call
    </>
  )
}

export default Chat
