import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Call = () => {
    const [roomId,setRoomId] = useState("");
    const [mineId,setMineId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("user-data");
        const userId = JSON.parse(userInfo);
        console.log(userId?._id)
        // console.log("The id of mine "+userId?._id)
        getProfileData(userId?._id);

    })

    // useEffect(() => {
    //     getProfileData();
    // },[mineId])

    const getProfileData = async (id) => {
        try {
            const data = await axios.get(`http://127.0.0.1:4000/profile/${id}`);
            console.log(data?.data);
            // navigate(`/room/${data?.data?.videoUid}`)
            // setRoomId(data?.data?.videoUid)
          } catch (error) {
            console.log(error)
          }
    }

    const handleEnterRoom = () => {
        navigate(`/room/${roomId}`)
    }

  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBox">
          <div className="LoginHeader">Room </div>
          <div className="loginInputBox">
            <input
              type="text"
              placeholder="Enter your access code"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
          
          </div>
          <div className="LoginBtnBox">
            <button onClick={() => {
                handleEnterRoom()
            }}>Enter room</button>
          
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Call
