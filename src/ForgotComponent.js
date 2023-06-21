import React, { useState } from 'react';
import { auth } from './firebase';
import './ForgotComponent.css';



function ForgotComponent() {

  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setResetSent(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    
    <div className='Forgot_password'>

      <h2>Forgot Password</h2>
      {resetSent ? (
        <p>Reset email sent! Check your inbox for further instructions.</p>
      ) : (
        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
}

export default ForgotComponent;


