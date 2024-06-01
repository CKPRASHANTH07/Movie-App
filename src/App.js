import React from "react";
import { BrowserRouter as  Router, Route, Routes  } from "react-router-dom";
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
      <Header />
      <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/Signin" Component={Signin}/>
      <Route path="/Signup" Component={Signup}/>
      <Route path="/movieList" Component={MovieList}/>
      <Route path="*" Component={PageNotFound}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
