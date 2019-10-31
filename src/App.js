import {React, Component} from 'react';
import logo from './logo.svg';
import "react-bootstrap";
import {Router, Switch, Route} from "react-router-dom";
import Login from "./components/login";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path={"/"} component={LandingPage}/>
              <Route exact path={"/login"} component={Login}/>

            </Switch>
          </div>
        </Router>
    )
  }
}
//<Route exact path={"/home"} component={Home} />
function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

