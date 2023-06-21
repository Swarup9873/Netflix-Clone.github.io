import React, { useState } from "react";
import "./LoginScreen.css"
import SignUpScreen from "./SignUpScreen";


function LoginScreen(){
    const [SignIn,setSignIn]=useState(false);

    return (
        
    <div className="loginScreen">
        <div className="loginScreen_background">
            <img className="loginScreen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            
            <button className="logoinScreen_button" onClick={()=>setSignIn(true)}> Sign In</button>
           
           <div className="loginScreen_gradient"/>
        </div>

        <div className="loginScreen_body">
            {SignIn ? (
                <SignUpScreen />
            ):(
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere , cancel at any time</h2>
                <h3>Ready to watch? Enter your Email to create or restart your membership</h3>

                <div className="loginScreen_input">
                    <form>
                        <input type="email" placeholder="Email Address"></input>
                        <button 
                        onClick={()=> setSignIn(true)} className="loginScreen_getStarted">Get Started</button>
                    </form>
                </div>
             </>
            )}
             
        </div>
    </div>

    );
}

export default LoginScreen;