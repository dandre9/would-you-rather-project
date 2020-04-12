import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const NavBar = () => {
  //TODO: Destacar botao selecionado
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink exact to="/">
          <Button style={{ color: "white" }}>Home</Button>
        </NavLink>
        <NavLink to="/add">
          <Button style={{ color: "white" }}>New Question</Button>
        </NavLink>
        <NavLink to="/leaderboard">
          <Button style={{ color: "white" }}>Leader Board</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
