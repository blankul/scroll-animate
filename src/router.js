import React from 'react';
import { Router, Route, Switch } from "dva/router";
// import { BrowserRouter as Router, Route, Switch } from "dva/router";
import IndexPage from './routes/IndexPage';
import absolute from './routes/absolute.js';
import fixed from './routes/fixed.js';
import sticky from './routes/sticky.js';
import test from './routes/test.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/absolute" component={absolute} />
        <Route path="/fixed" component={fixed} />
        <Route path="/sticky" component={sticky} />
        <Route path="/test" component={test} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
