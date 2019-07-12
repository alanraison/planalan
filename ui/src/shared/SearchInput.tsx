import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Search from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

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
  iconButton: {
    padding: theme.spacing(1),
  }
}))

const SearchInput: React.FC<{}> = () => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState<string>('');

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }
  function handleEndSearch() {
    setSearchText('');
  }
  return (
    <Paper square className={classes.root}>
      {
        searchText.length === 0 ? <Search className={classes.icon}/> : (
          <IconButton className={classes.iconButton} onClick={handleEndSearch}>
            <ArrowBack/>
          </IconButton>
        )
      }
      
      <InputBase
        placeholder="Search"
        className={classes.input}
        inputProps={{ 'aria-label': 'Search' }}
        onChange={handleSearch}
        value={searchText}
      />
    </Paper>
  );
}

export default SearchInput;