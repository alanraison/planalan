import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, match } from 'react-router-dom';
import { PlannedProject, ProjectId } from '../api';

const ProjectList: React.FC<{
  projects: PlannedProject[],
  selected?: ProjectId,
  match: match,
}> = ({
  projects,
  selected,
  match,
}) => {
  return (
    <List component="nav" aria-label="List of projects">
      {
        projects.map(p => (
          <ListItem key={p.id} selected={selected === p.id} button component={Link} to={`${match.url}/${p.id}`}>
            <ListItemText primary={p.name} secondary={p.owner}/>
          </ListItem>
        ))
      }
    </List>
  );
}

export default ProjectList;