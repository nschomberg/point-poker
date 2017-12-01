import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { initGA, trackPageView } from 'services/tracking';

// Import the components.
import Layout from './components/Layout';
import Home from './components/Home';
import Auth from './components/Auth';
import Room from './components/Room';
import Join from './components/Join';

// Initialize analytics tracking
initGA();
// Track first page (router will track every update after this one)
trackPageView();

const Routes = () => (
  <Router history={browserHistory} onUpdate={() => trackPageView()}>
    <Route component={Layout}>
      <Route path="/" component={Home} />
      <Route path="/join" component={Join}/>
      <Route path="/join/:room" component={Auth}/>
      <Route path="/join/:room/:user" component={Room}/>
      <Route path="/*" component={Home}/>
    </Route>
  </Router>
);

export default Routes;
