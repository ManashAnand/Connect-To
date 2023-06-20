import React, { useEffect, useState } from 'react'
import './MainProfile.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { userAuth } from '../context/UserContext';


const MainProfile = () => {
  const [profileData,setProfileData] = useState({});
  const [userInfoId,setUserInfoId] = useState(); 
  const navigate  = useNavigate();

    const {id} = useParams();
    useEffect(() => {
      getProfileData();
      console.log("The id of the user who is searching")
      var userInfo =       localStorage.getItem("user-data");
      userInfo = JSON.parse(userInfo);
      setUserInfoId(userInfo._id);
    
    },[])
  const getProfileData = async () => {
    // console.log(id);
    const {data} = await axios.get(`http://127.0.0.1:4000/profile/${id}`);
    

    setProfileData(data);
  }

  return (
    <>
      <div className="MainProfile_container">
        <div className="MainProfile_box">
          <div className="profile_box_">
            
            <div className="profile_photo">
              <img src={`http://localhost:4000/${profileData?.cover}`} alt="" height={"100%"} width={"100%"}/>
            </div>
            <div className="profile_name same">
              {profileData?.name}
            </div>
            <div className="profile_mail same">
            {profileData?.email}
            </div>
            <div className="profile_College same">
            {profileData?.college}
            </div>
            <div className="profile_alumni same">
              {profileData?.alumni == true? "Alumni":"Entrepreneur"}
            </div>
            <div className="profile_created same">
            {new Date(profileData?.createdAt).toLocaleDateString()}
            {/* {formatDistanceToNow(new Date(profileData?.createdAt), {
                    addSuffix: true,
                  })} */}
            </div>
           { 
            userInfoId != profileData?._id && 
          
           <>
           <div className="profile_btn same" onClick={() => navigate(`/chat/${profileData?._id}`)}>
                Message
            </div>
           </>
    
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default MainProfile
