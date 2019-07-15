import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { PlannedProject, ProjectId } from '../api';

const ProjectList: React.FC<{
  projects: PlannedProject[],
  selected?: ProjectId,
}> = ({
  projects,
  selected,
}) => {
  return (
    <List component="nav" aria-label="List of projects">
      {
        projects.map(p => (
          <ListItem key={p.id} selected={selected === p.id} button component={Link} to={`/planning/${p.id}`}>
            <ListItemText primary={p.name} secondary={p.owner}/>
          </ListItem>
        ))
      }
    </List>
  );
}

export default ProjectList;