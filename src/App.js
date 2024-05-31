import React from "react";
import { BrowserRouter as  Router, Route, Routes  } from "react-router-dom";
import Signin from "./Authentication/Signin";
import Signup from "./Authentication/Signup";
import PageNotFound from "./components/PageNotFound";
import movieList from "./components/movieList";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
     <Router>
      <Header />
      <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/Signin" Component={Signin}/>
      <Route path="/Signup" Component={Signup}/>
      <Route path="/movieList" Component={movieList}/>
      <Route path="*" Component={PageNotFound}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
