import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SearchInput from './SearchInput';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.grey[300],
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    margin: theme.spacing(1),
    height: '100vh',
    overflow: 'auto',
  },
}));

const Planning: React.FC<{}> = () => {
  const classes = useStyles();
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
            <Paper square>
              <SearchInput/>
              <List component="nav" aria-label="List of projects">
                <ListItem button>
                  <ListItemText primary="The Project"/>
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={9}><Paper square>Detail</Paper></Grid>
          </Hidden>
        </Grid>
      </main>
    </div>
  )
}

export default Planning;