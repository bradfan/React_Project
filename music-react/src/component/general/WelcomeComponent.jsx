import React from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { createRef } from "react";
import LoginDataService from "../../service/LoginDataService";
import "../../index.css";



function WelcomeComponent()  {
  const [name, setName] = useState("");
  const [login, setLogin] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { id } = useParams();
  
 
  useEffect(() => {
    LoginDataService.addLogin(login).then((response) => {
      setLogin(response.data);
      setName(response.data);
    });
  }, []);


  const handleChange = (e) => {
    console.log("LOGIN btn clicked");
    setName(e.target.name);
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
      
      
    });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin({
      [e.target.name]: e.target.value,
    });
    LoginDataService.addLogin(login);
    setIsLoggedIn(true);
    };
  

    return (
      <div className="container">
        <div>
          <input
            className="nameField user field"
            placeholder="Enter your name"
            type="text"
            value={id}
             name="name"
            onChange={handleChange}
          ></input>
          <input
            className="passwordField user field"
            placeholder="Enter your password"
            type="text"
            value={id}
           name="password"
            onChange={handleChange}
          ></input>
          <button className="userSubmit user btn"
          onClick={handleSubmit}
          >LOGIN</button>
        </div>

        <div className="box">
         {!isLoggedIn && <h1 className="welcome">
            Welcome {login.name} to the Song Directory
          </h1> }
         {isLoggedIn &&<h2 className="manage">
            You can manage your songs
            <Link to="/songRegistry"> here</Link>
          </h2> }
          </div>
      </div>
    );
  
}
export default WelcomeComponent;



