import React from 'react';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Course from './Components/Courses';
import Blog from './Components/Blog';
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import Footer from "./Components/Footer";


const App:React.FunctionComponent = ()=>{
  return (
    <>
      <Header/>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/courses' element={<Course/>}/>
              <Route path='/blog' element={<Blog/>}/>
              <Route path="/login/user" element={<Login/>} />
              <Route path="/register/user" element={<Register/>}/>
              <Route path='/about/team' element={<About/>}/>
          </Routes>
      </Router>
      <Footer/>
  </>
  );
}

export default App;
