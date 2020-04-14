import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { logoutUser } from "../actions/authedUser";

class NavBar extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;

    dispatch(logoutUser());
  };

  render() {
    const { users, userId } = this.props;

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
          <span
            style={{ position: "absolute", right: "45%" }}
          >{`Welcome, ${users[userId].name}`}</span>
          <img
            src={users[userId].avatarURL}
            alt={`Avatar of ${users[userId].name}`}
            style={{
              position: "absolute",
              right: 110,
              color: "white",
              width: 45,
              height: 45,
              margin: "auto",
            }}
            className="avatar"
          />
          <Button
            onClick={this.handleLogout}
            style={{ position: "absolute", right: 30, color: "white" }}
          >
            Logout
          </Button>
          {/* </div> */}
        </Toolbar>
      </AppBar>
    );
  }
}

export default connect()(NavBar);
