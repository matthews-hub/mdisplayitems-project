import React from "react";
import '../CSS/welcome.css'
// import Login from "./signin";
import {Router, useHistory} from 'react-router-dom'
// import {Link} from 'react-router-dom'

function Welcome(){

    let history = useHistory();
    const welcome= (()=>{
        history.push('./signin')
    })

    return(
        <div className="homecontainer">
         <h1>Hello and welcome</h1> 
        <hr></hr>
                <div>
                        <button onClick={welcome} className="welcome-btn">Sign In</button><br/><br/>
                        <button onClick={welcome} className="welcome-btn">Sign Up</button><br/><br/>
                        <br></br>
                </div>
                
       
        </div>         
    )
}
export default Welcome;