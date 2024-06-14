import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import {  Routes, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contanct/Contact.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </>
  );
}

export default App;
