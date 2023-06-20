import React, { useState } from "react";
import "./Post.css";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

export const notifySuccess = (message) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "success"
  });

  export const notifyError = (message) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "error"
  });

const Post = ({ post }) => {
  const [likeState,setLikeState] = useState(false);
  // console.log(post)
  const navigate = useNavigate();


  const handleLike = async () => {
    const userInfo = localStorage.getItem('user-data');
    if(Object.keys(userInfo).length === 0) {
      notifyError("Please login first");
      return;
    };
    const id = post?._id;
    if(likeState == true) setLikeState(false);
    else setLikeState(true);
    var inc_or_dec = 0;
    if(!likeState)
    {
      inc_or_dec = 1;
    }
    const data = await axios.put('http://localhost:4000/post/incLike',{id,inc_or_dec});
    
    if(data){
      console.log("like increases");  
      
      if(inc_or_dec)notifySuccess("like increased")
      else notifySuccess("like decreased")
    } else {
      console.log("like unchanged")
    }
  }

  return (
    <>
      <div class="card">
        <div class="card-header">
          <img src={`http://localhost:4000/${post?.file}`} alt="post"/>
        </div>
        <div class="card-body">
          <span class="tag tag-teal">{post?.type}</span>
          <h4>{post?.title}</h4>
          <p>{post?.descp}</p>
          <div className="userBox">
            <div class="user">
              <img
                src={`http://localhost:4000/${post?.name?.cover}`}
                alt="user"
                 onClick={() => navigate(`/profile/${post?.name?._id}`)} 
                 style={{cursor:"pointer"}}
                //  onClick={() => navigate(post?.name?._id)} 
              />
              <div class="user-info">
                <h5>{post?.name?.name}</h5>
                {/* <small>{moment().format(post?.createdAt).fromNow()}</small> */}
                <small>
                  {formatDistanceToNow(new Date(post?.createdAt), {
                    addSuffix: true,
                  })}
                </small>
              </div>
            </div>

            <div className="likeIcon" style={{color:likeState?"red":""}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 like"
                onClick={handleLike}
                values={likeState}
               
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                 

                />
              </svg>
                {post?.Like}
            </div>
        <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
