import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Projects from "../src/pages/Projects";
import Experience from "../src/pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../src/styles/App.css"

const App = () => {

    return(
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App;