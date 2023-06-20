import React from 'react'
import './CreatePost_Container.css'
import {  useNavigate } from 'react-router-dom'

const CreatePost_Container = ({userInfo}) => {
    const navigate = useNavigate();
  return (
    <>
        <div className="create_post_box">
            <div className="create_post_box_avatar">
                <div className="avatar_container">
                 <img src={`http://localhost:4000/`+userInfo?.cover} alt="" height={"100%"} width={"100%"} />
                </div>        
            </div>
            <div className="create_post_box_search">
                <div className="create_post_mini_box" onClick={() => navigate('/create-post')} >
                    Create a post
                </div>
            </div>
        </div>
    </>
  )
}

export default CreatePost_Container
