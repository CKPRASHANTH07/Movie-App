import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Signin from "./components/Authentication/Signin";
import Signup from "./components/Authentication/Signup";
import PageNotFound from "./components/PageNotFound";
import MovieList from "./components/Movie/MovieList";
import Home from "./components/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import PlayList from "./components/Movie/PlayList";
import Lists from "./components/Movie/MovieList/Lists";
import CreateList from "./components/Movie/CreateList";

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
          <Route path="/PlayList" element={<PlayList />} />
          <Route path="/Lists" element={<Lists />} />
          <Route path="/CreateList" element={<CreateList />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ConditionalFooter />
      </Router>
    </div>
  );
}

function ConditionalHeader() {
  const location = useLocation();
  return location.pathname !== '/'  && location.pathname !== '/signin'  && location.pathname !== '/Signup' ? <Header /> : null;
}
function ConditionalFooter() {
  const location = useLocation();
  return location.pathname !== '/'  && location.pathname !== '/signin'  && location.pathname !== '/Signup' ? <Footer /> : null;
}

export default App;
