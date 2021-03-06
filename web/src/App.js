import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./Home/Home";
import Navbar from "./components/NavBar/Navbar";
import CheckIn from './components/CheckIn/CheckIn';
import web3Testing from "./components/web3Testing/web3Testing";

import "./App.css";
import { apiKey, clientId, discoveryDocs, scope } from "./apiGoogleconfig";

class App extends Component {
  constructor(props) {
    super(props);
    this.initClient = this.initClient.bind(this);
    this.handleClientLoad = this.handleClientLoad.bind(this);
    this.handleClientLoad();
  }

  initClient() {
    console.log("initializing client");
    window.gapi.client
      .init({
        apiKey: apiKey,
        clientId: clientId,
        scope: scope,
        discoveryDocs: discoveryDocs
      })
      .then(function() {
        window.gapi.load(discoveryDocs);
      });
  }

  handleClientLoad() {
    window.gapi.load("client:auth2", this.initClient);
  }

  render() {
    return (
      <Router>
        <div align="center" className="container">
          <Navbar />
          <Route exact path={"/"} component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path={"/web3Testing"} component={web3Testing} />
          <Route exact path="/checkin" component={CheckIn} />
        </div>
      </Router>
    );
  }
}

export default App;
