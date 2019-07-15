import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/icons/List';
import Add from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: theme.palette.grey[500],
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - ${theme.spacing(4)}px)`,
    textAlign: 'center',
  },
  content: {
    margin: 'auto',
  },
  icon: {
    scale: '200%',
    verticalAlign: 'middle',
    margin: theme.spacing(1),
  }
}));

const EmptyDetail: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography component="h3" variant="h6">
          <List className={classes.icon}/>
          Select a project, or
        </Typography>
        <Typography component="h3" variant="h6">
          <Add className={classes.icon}/>
          Add a new project
        </Typography>
      </div>
    </div>
  );
}

export default EmptyDetail;