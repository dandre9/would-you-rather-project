import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { Container } from "@material-ui/core";
import NavBar from "./NavBar";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Poll from "./Poll";
import NotFound from "./NotFound";
import Login from "./Login";

class App extends Component {
  //TODO: Inserir comentarios no codigo
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Container className="center" maxWidth="lg">
          {!this.props.authedUser ? (
            <div>
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </div>
          ) : (
            <NavBar userId={this.props.authedUser} users={this.props.users} />
          )}

          {this.props.authedUser && (
            <div>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/question/:id" component={Poll} />
                <Route path="/login" component={Login} />
                <Route path="*" component={NotFound} />
              </Switch>
              <Redirect to="/" />
            </div>
          )}
        </Container>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(App);
