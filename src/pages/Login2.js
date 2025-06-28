import { useState } from 'react';
import api from './../common/Api'
import logo from './../onlysublogo.png'

import './Login2.css'
import { useNavigate } from "react-router-dom";
//mraming way ng pagawa ng function 

//heto ang basic
// function  x(){}

// //here's anohter way
// const x= ()=>{}

// same lang yan

//tingnan mo tong LOgin2 sa baba, function din yan. gets?oo login componentt  a maarrow funticon nice


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const Login2 = () => {
  const navigate = useNavigate();

    // gento magdeclare ng variable sa react. 
    // variable na email  na may laman na "fan" tapos may setEmail para if babaguhin mo laman nung email
    // kaya natin need ng setEmail para irender ulit  ni react yung html nya kasi nagbago laman
    
    //palitan mo nga gawin mong username nice
    const [username, setUsername] = useState("onlysubfan")
    const [password, setPassword] = useState("Password123!!");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    //heto  yung login function
    const logIn = async () => {
  
      try{
        //well gagawin nya yung ginawa ng documentation tas may username at password

        //so idto gumawa ako ng json na may username at passwo
        // pero since pareho lang naman yung name pwede ko na tanggalin yung field name ng json para shortcut so pareho lang to
        // bahala ako ano prefer mo
        const res = await api.post(`/auth/login`, { username, password });

        //get=retrive, post=create misc, patch=update, put= update or create, delete=delete

        
        //dito sa response kinuha ko yung token, nagrespond sya ng json
        const accessToken = res?.data?.accessToken;
    
        if(!accessToken){ throw Error('login failed')}
        // if(typeof accessToken ==='undefined') throw Error("Login failed");

        
        ///hayan if may token login success
        alert('login success!');
        localStorage.setItem('accessToken', accessToken);
        setIsLoggedIn(true);  
        navigate("/");
      }catch(e){
        console.log(e);
        alert("login failed!");
      }
    };
  
    //heto function lang na idedelete yung token tas irereset yung variables palitan mo yung email ng username
    const logOut = () =>{
      localStorage.removeItem('accessToken');
      setUsername('')
      setPassword('')
      setIsLoggedIn(false);
    }


    ///now itatali natin yung variable sa input ta
    return <div className="login-container">
    <div className="logo">
      <img src={logo} width="330px" height="80px" />
    </div>
    <form>
      <div className="form-group">
        <input type="text" placeholder="username" value={username}/>
      </div>
      <div className="form-group password-field">
        <input type="password" placeholder="password" value={password}/>
      </div>
      <button type="button" defaultvalue="Sign In" className="login-button" onClick={logIn}>
        Login
      </button>
    </form>
    <div className="help-text">
      Visit <a href="#">Help Center</a> for any help if you are not able to login
      with your existing account.
    </div>
    <div className="signup-text">
      Don't have an account yet? <a href="#">Sign up here</a>.
    </div>
    <div className="forgot-text">
      <a href="#">Forgot password?</a>
    </div>
    <div className="divider">
      <div className="divider-line" />
      <span className="divider-text">Or</span>
      <div className="divider-line" />
    </div>
    <div className="social-login">
      <button className="social-button twitter-button">
        Sign in with Twitter
      </button>
      <button className="social-button google-button">Sign in with Google</button>
    </div>
  </div>    
};
export default Login2;