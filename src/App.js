import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import './App.css'

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <LandingPage />
      <TechStack />
      <Experience />
      <Projects />
    </div>
  )
}
export default App;