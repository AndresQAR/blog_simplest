import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';
import EditProfile from './components/EditProfile';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/login' element={<LogIn/>}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path='/profile/edit' element={<EditProfile/>}/>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
