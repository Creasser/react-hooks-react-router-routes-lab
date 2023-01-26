import React from "react";
import { NavLink } from "react-router-dom";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";
import Home from "./Home";

function NavBar() {
  return (
  <div>
    <NavLink exact to='/'>Home</NavLink>
    <NavLink exact to='/movies'>Movies</NavLink>
    <NavLink exact to='/directors'>Directors</NavLink>
    <NavLink exact to='/actors'>Actors</NavLink> 
  </div>
  );
}

export default NavBar;
