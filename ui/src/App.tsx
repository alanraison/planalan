import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import RedTheme from './RedTheme';

const Planning: React.FC = () => <div>Planning</div>;
const Resources: React.FC = () => <div>Resources</div>;

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/planning" render={() => <Planning/>}/>
        <Route path="/resources" component={Resources}/>
        <Route component={() => <Redirect to="/planning"/>}/>
      </Switch>
    </Router>
  );
}

export default App;
