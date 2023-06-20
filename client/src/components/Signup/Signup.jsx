import React, { useState } from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";
import axios from 'axios'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alumni, setAlumni] = useState(true);
  const [college, setCollegeName] = useState("");
  const [files, setFiles] = useState();

  const handleSignUp = async (e) => {
    e.preventDefault();
    // console.log(userInfo)
    const formData = new FormData();
    formData.set('name',name);
    formData.set('email',email);
    formData.set('password',password);
    formData.set('alumni',alumni);
    formData.set('college',college);
    formData.set('file',files);
      try {

        const  data  = await axios.post("http://127.0.0.1:4000/register",formData);
        if(data?.success){
            console.log("Image added");
        } 
        else{
            console.log("Product image uploaded succesfully");
            console.log(data);
        }
        setName("");
        setCollegeName("");
        setEmail("");
        setPassword("");
        setFiles();
      } catch (error) {
        console.log(error);
      }


  };

  return (
    <div className="LoginContainer">
      <div className="LoginBox">
        <div className="LoginHeader">Signup</div>
        <div className="loginInputBox">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your college name"
            value={college}
            onChange={(e) => setCollegeName(e.target.value)}
          />
          <div className="inputRadio">
            <div>
              <input
                type="radio"
                name="designation"
                onChange={(e) => setAlumni(true)}
              />{" "}
              Alumni
            </div>
            <div>
              <input
                type="radio"
                name="designation"
                onChange={() => setAlumni(false)}
              />{" "}
              Enterprenur
            </div>
          </div>
          <div className="file">
          
            <input
              id="inputTag"
              type="file"
              onChange={(e) => setFiles(e.target.files[0])}
            />
          </div>
        </div>
        <div className="LoginBtnBox">
          <button onClick={handleSignUp}>Signup</button>
        </div>
        <div className="SignupQuery">
          Already have an account
          <NavLink className="LoginErr" to="/Login">
            Login
          </NavLink>
          ?
        </div>
      </div>
    </div>
  );
};

export default Signup;
