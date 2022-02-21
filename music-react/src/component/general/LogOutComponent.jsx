import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";



function LogOut() {

    return(
        <div className="big-div">
            <h1 className="farewell">Thank you for visiting our Song Directory. To return to the Home page please click on the button below.</h1>
        <Link to="/"><button className="btn log-out">RETURN</button></Link>

        </div>
    )



}

export default LogOut;


