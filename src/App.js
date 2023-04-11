// import React from "react";
import {Route} from "react-router-dom";
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Canvas from "./components/Canvas";
import Palette from "./components/Palette";

function App() {
  return (
    <>
    <Router>
      <div>
      <Navbar/>
      <Canvas/>

      <Palette/>

      <Footer/>
      
      </div>
    </Router>

    </>
    );
}

export default App;
