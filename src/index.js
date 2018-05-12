import React from "react";
import { render } from "react-dom"; //import render method from react-dom
//import ReactDom from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./css/style.css";
import App from "./components/App";
import StorePicker from "./components/StorePicker";
import NotFound from "./components/NotFound"

//route stateless component
const Root = () => {
  return (
    <div>
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    </div>
  )
}

render(<Root />, document.querySelector("#main"));
//ReactDom.render();
