import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <Button style={{ color: "white" }}>Home</Button>
        </Link>
        <Link to="/add">
          <Button style={{ color: "white" }}>New Question</Button>
        </Link>
        <Link>
          <Button style={{ color: "white" }}>Leader Board</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
