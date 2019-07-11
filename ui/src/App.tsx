import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Planning from './Planning';

const Resources: React.FC = () => <div>Resources</div>;

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline/>
      <Switch>
        <Route path="/planning" render={() => <Planning/>}/>
        <Route path="/resources" component={Resources}/>
        <Route component={() => <Redirect to="/planning"/>}/>
      </Switch>
    </Router>
  );
}

export default App;
