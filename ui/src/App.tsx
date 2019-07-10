import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import RedTheme from './RedTheme';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/planning" render={<div>Planning</div>}/>
        <Route path="/resources" component={<div>Resources</div>}/>
        <Route component={<Redirect path="/planning"/>}/>
      </Switch>
    </Router>
  );
}

export default App;
