import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import AddPostPage from "./Pages/AddPostPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import "./styles/style.css"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path ="/add-post" element={<AddPostPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
