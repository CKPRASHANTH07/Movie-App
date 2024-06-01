import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Signin from "./components/Authentication/Signin.js";
import Signup from "./components/Authentication/Signup.js";
import PageNotFound from "./components/PageNotFound.js";
import MovieList from "./components/Movie/MovieList.js";
import Home from "./components/Home.js";
import Header from "./components/common/Header.js";
import Footer from "./components/common/Footer.js";
import PlayList from "./components/Movie/PlayList.js";
import Lists from "./components/Movie/MovieList/Lists.js";
import CreateList from "./components/Movie/CreateList.js";
import { isAuthenticated } from "./auth.js";
function App() {
  return (
    <div>
      <Router>
        <ConditionalHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          {/* <ProtectedRoute path="/movieList" element={<MovieList />} /> */}
          {/* <ProtectedRoute path="/PlayList" element={<PlayList />} /> */}
          <Route path="/movieList" element={<ProtectedRoute><MovieList /></ProtectedRoute>}/>
          <Route path="/PlayList" element={<ProtectedRoute><PlayList /></ProtectedRoute>}/>
          <Route path="/Lists" element={<Lists />} />
          <Route path="/CreateList" element={<CreateList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ConditionalFooter />
      </Router>
    </div>
  );
}
const ProtectedRoute = ({ children }) => {
  const authed = isAuthenticated() 
  return authed ? children : <Navigate to="/Signin" />;
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
