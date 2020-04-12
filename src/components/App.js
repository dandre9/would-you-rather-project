import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { AppBar, Toolbar, Button, Container } from "@material-ui/core";
import Home from "./Home";
import NewQuestion from "./NewQuestion";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="center">
          <Container maxWidth="lg">
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
            {this.props.loading ? null : (
              <div>
                <Route path="/" exact component={Home} />
                <Route path="/add" component={NewQuestion} />
                {/* <Route path="/tweet/:id" component={TweetPage} /> */}
              </div>
            )}
          </Container>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
