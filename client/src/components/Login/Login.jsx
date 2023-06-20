import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import { userAuth } from "../../context/UserContext";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userInfo,setUserInfo] = userAuth();

  const handleLogin = async (e) => { 
    e.preventDefault();
    console.log(e);
    try {
      const data = await axios.post("http://127.0.0.1:4000/login", {
        name,
        password,
      });
      if (data.status == 200) {
        console.log("Login succesfull by frontend" );
          console.log(data);
        setUserInfo(data.data);  
        <Toaster/>
        toast('Login succesfull')
        console.log(data.data)
        localStorage.setItem('user-data',JSON.stringify(data.data));

        setName("");
        setPassword("");
        navigate("/")


      } else console.log("Login error in frontend");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBox">
          <div className="LoginHeader">Login</div>
          <div className="loginInputBox">
            <input
              type="text"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="LoginBtnBox">
            <button onClick={handleLogin}>Login</button>
          
          </div>
          <div className="SignupQuery">
            Don't have an account
            <NavLink className="LoginErr" to="/signup">
              Signup
            </NavLink>
            ?
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
