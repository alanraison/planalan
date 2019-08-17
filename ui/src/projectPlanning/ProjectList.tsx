import React from 'react';
import { History } from 'history';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { match } from 'react-router-dom';
import { PlannedProject, ProjectId } from '../api';

const useStyles = makeStyles((theme: Theme) => ({
  closeIcon: {
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
    }
  },

}))

const ProjectList: React.FC<{
  projects: PlannedProject[],
  selected?: ProjectId,
  match: match,
  history: History,
  // ref: React.Ref<any>,
}> = ({
  projects,
  selected,
  match,
  history,
  // ref,
}) => {
  const classes = useStyles();
  // const ref = useRef();

  function handleClick(p: PlannedProject) {
    if (selected === p.id) {
      history.push(match.url);
    } else {
      history.push(`${match.url}/${p.id}`);
    }
  }

  return (
    <List component="nav" aria-label="List of projects">
      {
        projects.map(p => {
          const isSelected = selected === p.id
          return (
            <ListItem key={p.id} selected={isSelected} button onClick={() => handleClick(p)}>
              <ListItemText
                primary={p.name}
                primaryTypographyProps={{noWrap: true}}
                secondary={p.owner}
                secondaryTypographyProps={{noWrap: true}}
              />
              { isSelected ? <CloseIcon className={classes.closeIcon} /> : null }
            </ListItem>
          )
        })
      }
    </List>
  );
}

export default ProjectList;