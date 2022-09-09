import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import {useEffect} from "react";

import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import AddPostPage from "./Pages/AddPostPage";
import AuthPage from "./Pages/AuthPage";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";

import { useAuth } from "./hooks/useAuth";

import "./styles/style.css"


function App() {
  const {isAuth, isAdmin} = useAuth()

    console.log(isAdmin())

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {isAuth && (<Route path ="/add-post" element={<AddPostPage/>}/>)}
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/register" element={<SignUp/>}/>
        {isAuth && (<Route path="/profile:id" element={<Profile/>}/>)}

        <Route path="*" element={<Navigate to={isAuth ? "/profile" : "/"} replace/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
