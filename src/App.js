import Main from "./layouts/Main";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chats from "./pages/Chats";
import Search from "./pages/Search";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/recipes" element={<Recipes />} />

          <Route path="/search" element={<Search />} />

          <Route path="/chats" element={<Chats />} />

          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}
