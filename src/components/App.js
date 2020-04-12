import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { AppBar, Toolbar, Button, Container } from "@material-ui/core";
// import Home from "./Home";
import NewQuestion from "./NewQuestion";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="center">
        <Container maxWidth="lg">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit">Home</Button>
              <Button color="inherit">New Question</Button>
              <Button color="inherit">Leader Board</Button>
            </Toolbar>
          </AppBar>
          <NewQuestion />
        </Container>
      </div>
    );
  }
}

export default connect()(App);
