import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProjectPlanning from './projectPlanning';
import RedTheme from './RedTheme';
import { MuiThemeProvider } from '@material-ui/core/styles'

const Resources: React.FC = () => <div>Resources</div>;

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={RedTheme}>
      <Router>
        <CssBaseline/>
        <Switch>
          <Route path="/planning" component={ProjectPlanning}/>
          <Route path="/resources" component={Resources}/>
          <Route component={() => <Redirect to="/planning"/>}/>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
