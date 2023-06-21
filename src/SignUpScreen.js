import React ,{ useRef } from 'react';
import {auth} from './firebase';
import "./SignUpScreen.css";
import { Link } from 'react-router-dom';


function SignUpScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register =(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
       emailRef.current.value,
       passwordRef.current.value
    )
    .then((authUser)=>{
       console.log(authUser);
    })
    .catch((error)=>{
      alert(error.message);
    });
  };

  const signIn =(e)=>{
    e.preventDefault();

    auth
       .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
       )
       .then((authUser) =>{
        console.log(authUser)
       })
       .catch((error) => alert(error.message));
  };
  

  return (
    <div className='signUpScreen'>
         <form>
          <h1>Sign In</h1>
          <input ref={emailRef} placeholder="Email" type="email"/>
          <input ref={passwordRef} placeholder="Password" type="password"/>
          <button type="submit" onClick={signIn}>Sign In</button>
          
          <span className='signupScreen_gray_forgot' >
            <Link to={'/forgot'}>Forgot Password?</Link>
            </span>
          <h4>
            <span className='signupScreen_gray'>New to Netflix?</span>
            <span className="signupScreen_link" onClick={register}>Sign Up Now</span>
          </h4>
         </form>
    </div>

  )
}

export default SignUpScreen;
