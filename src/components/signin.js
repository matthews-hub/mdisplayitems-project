import '../CSS/signin.css'
import email from "../images/email.png";
import log from "../images/log.png";
import pass from "../images/pass.png";
import React from 'react';
import {useState} from 'react';
import {Router, useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
 
 
function Login (){

    const [emails, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };




    let history = useHistory();

    const login = (()=>{
        history.push('/addItems')
    })

    return (
        <div className='main'>
            <div className="sub-main">
                <div>
                    <div className= "images">
                        <div className="images-container">
                            <img src={log} alt="login" className='log'/>
                        </div>
                    </div>
                    <div>
                        <h1>Sign In</h1>
                        <div>
                            <img src={email} alt="email" className="email"/>
                            <input type="text" 
                            placeholder="Enter Username" 
                            className="name"
                            onChange={handleEmailChange}
                            /> 
                        </div>

                        <div>
                            <img src={pass} alt="pass" className="email"/>
                            <input type="password" 
                            placeholder="Enter Password" 
                            className="name"
                            onChange={handlePasswordChange}
                            /> 
                        </div>
                        
                        <button onClick={login} 
                        className="Submit-btn2"
                        disabled={!emails || !password}>
                        Sign In
                        </button>
                        
                            <p className="links">
                                <a href='#'>Forgot password ? </a>
                                Or
                                <a href='#'> Sign Up</a>
                            </p>
                         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

