import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Container,
  Select,
  MenuItem,
  Button,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    selectedUser: "",
  };

  handleSelectChange = (e) => {
    this.setState({ selectedUser: e.target.value });
  };

  login = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(setAuthedUser(this.state.selectedUser));
  };

  render() {
    const { selectedUser } = this.state;

    let selectOptions = this.props.userIds.map((id) => (
      <MenuItem key={id} value={id}>
        {this.props.users[id].name}
      </MenuItem>
    ));

    return (
      <Container className="center" maxWidth="lg">
        <AppBar position="static">
          <Toolbar></Toolbar>
        </AppBar>
        <h3 style={{ marginTop: 50 }}>Select a user to login</h3>
        <br />
        <Select
          value={selectedUser}
          onChange={this.handleSelectChange}
          style={{ width: "30%", minWidth: 300, marginBottom: 30 }}
        >
          {selectOptions}
        </Select>
        <br />
        <Button
          disabled={!selectedUser}
          variant="contained"
          color="primary"
          onClick={this.login}
        >
          Login
        </Button>
      </Container>
    );
  }
}

function mapStateToProps({ users }) {
  const userIds = Object.keys(users);
  return {
    userIds,
    users,
  };
}

export default connect(mapStateToProps)(Login);
