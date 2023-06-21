import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./ProfileScreen.css"
import Nav from './Nav';
import { auth } from './firebase';
import PlanScreen from './PlanScreen';
import { Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';


function ProfileScreen() {
  
  const user =useSelector(selectUser);

  return (
    <div className='profileScreen'>
       `<Nav/>`
       <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=''></img>

            <div className="profileScreen_details">
                <h2>{user.email}</h2>
                <div className="profileScreen_plans">
                  <h3>Plans</h3>

                  <PlanScreen/>
                  <button onClick={()=> auth.signOut()} className="profileScreen_signout"><Link to='/'>Sign out</Link></button>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}



export default ProfileScreen;