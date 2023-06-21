import React , {useEffect} from 'react';
import HomeScreen from './HomeScreen';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import { auth } from './firebase';
import { useDispatch, useSelector} from "react-redux"
import { login,logout, selectUser} from './features/userSlice';
import ForgotComponent from './ForgotComponent';

function App() {

  const user =useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
     const unsubscribe= auth.onAuthStateChanged(userAuth =>{   // it listens to any authenticated state change
         if(userAuth){
          // Logged in
          dispatch(
            login({
              uid: userAuth.uid,
              email:userAuth.email
            })
          );
          
         }
         else{
          //Logged out
          dispatch(logout());
         }
      });

      return unsubscribe;
  },[dispatch])

  return (
    <div className="App">

      {/* <BrowserRouter> */}
      {!user ? (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<LoginScreen/>}></Route>
          <Route path='/forgot' element={<ForgotComponent/>}></Route>
          {/* <Route exact path="/" element={<HomeScreen/>}></Route> */}
      </Routes>
      </BrowserRouter>
      ): (
        <BrowserRouter>
        <Routes>
          <Route path='/profile' element={<ProfileScreen/>}></Route>
          
      <Route exact path="/" element={<HomeScreen/>}></Route>
      </Routes>
      </BrowserRouter>
      )}

    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
