import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { userAuth } from "../../context/UserContext";

const Navbar = () => {
    // const [showLogin,setShowLogin] = useState(false);
    const navigate = useNavigate();
    const [userInfo,setUserInfo] = userAuth();
    const handleLogout = () => {
        localStorage.removeItem("user-data");    
          setUserInfo({});
          navigate('/login')
    }

    useEffect(() => {
        if(Object.keys(userInfo).length === 0) setUserInfo(userInfo);
        else setUserInfo({});
    },[])

    useEffect(() => {
      const userInfo = localStorage.getItem("user-data");
      if(userInfo) setUserInfo(userInfo);
    },[])
  return (
    <>
      <div className="navBarBox">
        <div className="linkBox">
          <div className="IconBox">
            <NavLink className='lil' to='/'>Connect-To</NavLink>
          </div>
          <ul className="ulLinkBox">
            <li>
              <NavLink className='lil' to="/">Home</NavLink>
            </li>
            <li>
              <NavLink  className='lil'  to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className='lil'  to="/profile">profile</NavLink>
            </li>
            <li>
              <NavLink  className='lil' to="/call">Calls </NavLink>
            </li>
          </ul>
        </div>

        <div className="authBox">
        {
          Object.keys(userInfo).length === 0 ?
          <NavLink  className='lil' to="/login">Login</NavLink>:
          <button className="lil" onClick={handleLogout} >Logout</button>
        }
        </div>
      </div>
    </>
  );
};

export default Navbar;
