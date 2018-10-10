import React from 'react';
import { Router, Route, Switch } from "dva/router";
// import { BrowserRouter as Router, Route, Switch } from "dva/router";
import IndexPage from './routes/IndexPage';
import test from './routes/test.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" component={test} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
