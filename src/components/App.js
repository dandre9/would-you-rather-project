import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { Container } from "@material-ui/core";
import NavBar from "./NavBar";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Poll from "./Poll";
import NotFound from "./NotFound";

class App extends Component {
  //TODO: Inserir comentarios no codigo
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Container className="center" maxWidth="lg">
          <NavBar />

          {this.props.loading ? null : (
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/question/:id" component={Poll} />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        </Container>
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
