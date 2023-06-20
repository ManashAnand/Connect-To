import React from 'react'
import './profile.css'
import { useNavigate } from 'react-router-dom'

const Profile = ({userInfo}) => {
    const navigate =  useNavigate();
  return ( 
    <>

    <div className='profile_profile'>
      <div className="profile_section_one">
      <img src={`http://localhost:4000/`+userInfo?.cover} alt="" height={"100px"} width={"100px"} />
      </div>
      <div className='profile_profile_btn' onClick={() => navigate(`/profile/${userInfo?._id}`)}>
            Your Profile
      </div>
    </div>
    </>
  )
}

export default Profile
