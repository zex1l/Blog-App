import {BrowserRouter, Routes, Route} from "react-router-dom"

import HomePage from "./Pages/HomePage";
import AddPostPage from "./Pages/AddPostPage";
import Header from "./components/Header";

import "./styles/style.css"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path ="/add-post" element={<AddPostPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
