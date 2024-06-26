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
// import Lists from "./components/Movie/MovieList/Lists.js";
import AddPlaylist from "./components/Movie/AddPlaylist.js";
import { isAuthenticated } from "./auth.js";
import PlaylistPage from "./components/Movie/MovieList/PlaylistPage.js";
function App() {
  return (
    <div>
      <Router>
        <ConditionalHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          {/* <ProtectedRoute path="/movieList" element={<MovieList />} /> */}
          {/* <ProtectedRoute path="/PlayList" element={<PlayList />} /> */}
          <Route path="/movieList" element={<ProtectedRoute><MovieList /></ProtectedRoute>}/>
          <Route path="/PlayList" element={<ProtectedRoute><PlayList /></ProtectedRoute>}/>
          <Route path="/shared_playlist/:uuid" element={<ProtectedRoute><PlaylistPage /></ProtectedRoute>}/>
          <Route path="/AddPlaylist" element={<ProtectedRoute><AddPlaylist /></ProtectedRoute>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ConditionalFooter />
      </Router>
    </div>
  );
}
const ProtectedRoute = ({ children }) => {
  const authed = isAuthenticated() 
  return authed ? children : <Navigate to="/signin" />;
}

function ConditionalHeader() {
  const location = useLocation();
  return location.pathname !== '/'  && location.pathname !== '/signin'  && location.pathname !== '/Signup' && location.pathname !== '/signup' && location.pathname !== '/Signin' ? <Header /> : null;
}
function ConditionalFooter() {
  const location = useLocation();
  return location.pathname !== '/'  && location.pathname !== '/signin'  && location.pathname !== '/Signup' && location.pathname !== '/signup' && location.pathname !== '/Signin' ? <Footer /> : null;
}

export default App;
