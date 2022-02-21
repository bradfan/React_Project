import React from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import LoginDataService from "../../service/LoginDataService";
import "../../index.css";

function WelcomeComponent()  {
  const [name, setName] = useState("");
  const [login, setLogin] = useState({});
  const { id } = useParams();
 
  useEffect(() => {
    LoginDataService.addLogin(login).then((response) => {
      setLogin(response.data);
      setName(response.data);
    });
  }, []);

  useEffect(() => {
    LoginDataService.retrieveAllLogin().then((response) => {
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
    // e.persist();
    setLogin({
      [e.target.name]: e.target.value,
    });
    LoginDataService.addLogin(login);
  
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
          <h1 className="welcome">
            Welcome {login.name} to the Song Directory
          </h1>
          <h2 className="manage">
            You can manage your songs
            <Link to="/songRegistry"> here</Link>
          </h2>
          <p>{login.name}</p>
         </div>
      </div>
    );
  
}
export default WelcomeComponent;


// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "../../index.css";
// class WelcomeComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: this.props.name,
//       password: this.props.password
//     };
//   }
//   render() {
//     return (
//       <div className="container">
//         <div>
//           <input
//             className="nameField user field"
//             placeholder="Enter your name"
//             type="text"
//             value={this.props.name}
//             name={this.props.name}
//           ></input>
//           <input
//             className="passwordField user field"
//             placeholder="Enter your password"
//             type="text"
//             value={this.props.password}
//             name={this.props.password}
//           ></input>
//           <button className="userSubmit user btn">LOGIN</button>
//         </div>

//         <div className="box">
//           <h1 className="welcome">
//             Welcome {this.state.name} to the Song Directory
//           </h1>
//           <h2 className="manage">
//             You can manage your songs
//             <Link to="/songRegistry"> here</Link>
//           </h2>
//         </div>
//       </div>
//     );
//   }
// }
// export default WelcomeComponent;
