import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import SearchInput from '../shared/SearchInput';
import ProjectList from './ProjectList';
import { PlannedProject, getPlannedProjects } from '../api';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.grey[200],
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    margin: theme.spacing(1),
    height: '100vh',
    overflow: 'auto',
  },
}));

const ProjectPlanning: React.FC<{}> = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState<PlannedProject[]>([]);

  useEffect(() => {
    getPlannedProjects().then(setProjects);
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
              <ProjectList projects={projects}/>
            </Card>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={9}><Paper square>Detail</Paper></Grid>
          </Hidden>
        </Grid>
      </main>
    </div>
  )
}

export default ProjectPlanning;