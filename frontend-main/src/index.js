import OffersPage from "./components/OffersListPage.jsx";
import OfferInfoPage from "./components/OfferInfoPage.jsx";


import "./styles/App.css";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={OffersPage} />
          <Route exact path="/offer" component={OfferInfoPage} />
          
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
