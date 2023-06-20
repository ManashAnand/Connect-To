import React, { useEffect, useState } from "react";
import "./Homepage.css";
import Profile from "./Profile";
import CreatePost_Container from "./CreatePost_Container";
import CreatePost_Container_Icons from "./CreatePost_Container_Icons";
import axios from "axios";
import Post from "./Post/Post";
import { useNavigate } from "react-router-dom";



const Homepage = () => {
    const [userDataFromLocal,setUserDataFromLocal] = useState({});
    const [allPost,setAllPost] = useState([]);
    const navigate = useNavigate();

  



    useEffect(() => {
      const userInfo = localStorage.getItem("user-data");
      setUserDataFromLocal(JSON.parse(userInfo));
      getAllPost();
    },[])
  

    const getAllPost = async () => {
      
      try {
        const {data} = await axios.get("http://127.0.0.1:4000/post/getAllPost");
        setAllPost([...allPost,...data]);
        console.log("this is the length of array"+allPost.length)
        console.log(allPost);
        
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <>
    
      <div className="profile_startPost">
        <div className="profile">
            <Profile userInfo={userDataFromLocal}/>
        </div>
        <div className="createPost">
            <CreatePost_Container userInfo={userDataFromLocal}/>
            <CreatePost_Container_Icons/>
        </div>
        <div className="blog_section">
          <div id="blog_section_photo">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              height="3rem"
              width="3rem"
              style={{marginRight:"1rem",cursor:"pointer"}}
              className="photo_photo_photo"
              onClick={() => navigate('/create-post')}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <p style={{fontSize: "1rem"}}>Photo</p>
            
          </div>
          <div id="blog_section_blog">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              height="3rem"
              width="3rem"
              style={{marginRight:"1rem",cursor:"pointer"}}
              onClick={() => navigate('/create-post')}
            >
              <path
              className="photo_photo_blog"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <p style={{fontSize: "1rem"}}>Blog</p>
          </div>
          <div id="blog_section_article">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              height="3rem"
              width="3rem"
              style={{marginRight:"1rem",cursor:"pointer"}}
              onClick={() => navigate('/create-post')}
            >
              <path
              
              className="photo_photo_article"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>
            <p style={{fontSize: "1rem"}}>Article</p>
          </div>
        </div>
      </div>
      
      <div className="main_post_container">
     
        {
          allPost?.map((post) => {
            return(
              <>
                <Post post={post}/>
              </>
            )
          })
        }
      </div>

      </>
  );
};

export default Homepage;
