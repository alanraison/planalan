import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Search from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  icon: {
    margin: theme.spacing(1),
    color: theme.palette.action.active,
  },
}))

const SearchInput: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Paper square className={classes.root}>
      <Search className={classes.icon}/>
      <InputBase
        placeholder="Search"
        className={classes.input}
        inputProps={{ 'aria-label': 'Search' }}
      />
    </Paper>
  );
}

export default SearchInput;