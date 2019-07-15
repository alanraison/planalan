import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/icons/List';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: theme.palette.grey[500],
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    overflow: 'hidden',
    textAlign: 'center',
  },
  content: {
  },
  icon: {
    height: '200px',
    width: '200px',
  }
}));

const EmptyDetail: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <List className={classes.icon}/>
        <Typography component="h3" variant="h6" display="block">
          Select a project, or
        </Typography>
        <Button color="primary" variant="contained">Add a new Project</Button>
      </div>
    </div>
  );
}

export default EmptyDetail;