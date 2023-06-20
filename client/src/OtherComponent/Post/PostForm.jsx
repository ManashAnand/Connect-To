import React, { useEffect, useState } from 'react'
import './PostForm.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userAuth } from '../../context/UserContext';


const PostForm = () => {
  
      const [Title, setTitle] = useState("");
      const [descp,setDescp] = useState("");
      const [files, setFiles] = useState();
      const [type,setType] = useState("");
      const navigate = useNavigate();
  const [userInfo] = userAuth();


  useEffect(() => {
      if(Object.keys(userInfo).length === 0){
          navigate('/login');
      } 
    },[])

    const handleCreatePost = async (e) => {
        e.preventDefault();
        const userInfo = localStorage.getItem('user-data');
        // console.log(JSON.parse(userInfo))
        const userData = JSON.parse(userInfo);
        // console.log(userData)

        const formData = new FormData();
        formData.set('Title',Title);
        formData.set('descp',descp);
        formData.set('type',type);
        formData.set('file',files); 
        formData.set('Like',0);
        formData.set('name',userData._id);
        try {
            // console.log("working")
            const res = await axios.post('http://127.0.0.1:4000/post/create-post',formData);
            // console.log(res);
            if(res?.success)
            {
                console.log("post uploaded")
                navigate('/');
            }
            else console.log("Some error occurred")
        } catch (error) {
            console.log(error)
        }
        
    }

  return (
    <>
          <div className="LoginContainer">
      <div className="LoginBox">
        <div className="LoginHeader">Create Post</div>
      
        <div className="loginInputBox">
          
        <input
            type="text"
            placeholder="Enter the Title of the Blog"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
          
         <textarea id="textarea_design" cols="30" rows="10" value={descp} onChange={(e) => setDescp(e.target.value)}> </textarea>

          <div className="inputRadio">
            <div>
              <input
                type="radio"
                name="type"
                onChange={(e) => setType("Photo")}
              />{" "}
              Photo
            </div>
            <div>
              <input
                type="radio"
                name="type"
                onChange={() => setType("Blog")}
              />{" "}
              Blog
            </div>
            <div>
              <input
                type="radio"
                name="type"
                onChange={() => setType("Article")}
              />{" "}
              Article
            </div>
          </div>
                <div className="file">
                
                <input
                    id="inputTag"
                    type="file"
                    placeholder='Add a cover photo'
                    onChange={(e) => setFiles(e.target.files[0])}
                />
                </div>
        </div>
        <div className="LoginBtnBox" >
          <button onClick={handleCreatePost} style={{marginTop: "1rem",width:"10rem",display:"flex",justifyContent:"center",alignItems:"center"}}>Create Post</button>
        </div>  
    
      </div>
    </div>
    </>
  )
}

export default PostForm
