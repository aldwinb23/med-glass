import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main1 from "./components/Main1/Main1";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Main1 />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
