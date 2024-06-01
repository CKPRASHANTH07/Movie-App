import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Signin from "./components/Authentication/Signin";
import Signup from "./components/Authentication/Signup";
import PageNotFound from "./components/PageNotFound";
import MovieList from "./components/Movie/MovieList";
import Home from "./components/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div>
      <Router>
        <ConditionalHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/movieList" element={<MovieList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function ConditionalHeader() {
  const location = useLocation();
  return location.pathname !== '/' ? <Header /> : null;
}

export default App;
