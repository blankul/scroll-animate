import React from 'react';
import { Router, Route, Switch } from "dva/router";
// import { BrowserRouter as Router, Route, Switch } from "dva/router";
import IndexPage from './routes/IndexPage';
import absolute from './routes/absolute.js';
import fixed from './routes/fixed.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/absolute" component={absolute} />
        <Route path="/fixed" component={fixed} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
