import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Netflix from "./pages/Netflix";
import Player from "./components/Player";
import MoviePage from "./pages/Movies";
import TVShows from "./pages/TVShow";
import UserListedMovies from "./pages/UserListedMovies";
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route  exact path="/login"  element={<Login/>} />
      <Route exact  path="/signup" element={<SignUp/>} />  
      <Route exact path="/player" element={<Player/>}/>
      <Route exact path="/new" element={<Player />} />
      <Route exact path="/movies" element={<MoviePage />} />
      <Route exact path="/tv" element={<TVShows />} />
      <Route exact path="/mylist" element={<UserListedMovies/>} />
      
      <Route exact  path="/" element={<Netflix/>} />
    </Routes>
    </BrowserRouter>
  );

}