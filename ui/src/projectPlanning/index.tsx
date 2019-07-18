import React, { useEffect, useState } from 'react';
import { Switch, Route, match } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import SearchInput from '../shared/SearchInput';
import ProjectList from './ProjectList';
import Detail from './Detail';
import EmptyDetail from './EmptyDetail';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { PlannedProject, getPlannedProjects, ProjectId } from '../api';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.grey[200],
    height: '100vh',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flex: 1,
    margin: theme.spacing(1),
    overflow: 'auto',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

const NotFound = () => <div>Not Found</div>;

const ProjectPlanning: React.FC<{match: match}> = ({
  match
}) => {
  const classes = useStyles();
  const [projects, setProjects] = useState<Map<ProjectId, PlannedProject>>(new Map());

  useEffect(() => {
    getPlannedProjects().then(p => { console.log(p); return p; }).then(setProjects);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Planning
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Grid container spacing={1} alignContent="center">
          <Grid item xs={12} sm={3}>
            <Card square>
              <SearchInput/>
            </Card>
            <Card square>
              <Route
                path={`${match.url}/:projectId`}
                children={({ match: childMatch }) => (
                  <ProjectList
                    projects={[...projects.values()]}
                    selected={childMatch ? childMatch.params.projectId : null}
                    match={match}
                  />
                )}/>
            </Card>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={9}>
              <Switch>
                {
                  [...projects.values()].map(p => (
                    <Route
                      key={p.id}
                      path={`${match.url}/${p.id}`}
                      exact
                      render={
                        () => <Detail project={p} onChange={
                          (p_) => {
                            setProjects(new Map(projects.set(p_.id, p_))); 
                          }
                        }/>
                      }
                    />
                  ))
                }
                <Route path={match.url} exact component={EmptyDetail}/>
                <Route component={NotFound}/>
              </Switch>
            </Grid>
          </Hidden>
        </Grid>
        <Fab color="primary" className={classes.fab}>
          <AddIcon/>
        </Fab>
      </main>
    </div>
  )
}

export default ProjectPlanning;