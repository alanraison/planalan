import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { PlannedProject } from '../api';

const ProjectList: React.FC<{
  projects: PlannedProject[],
  onSelectProject: (p: PlannedProject) => void,
}> = ({
  projects,
  onSelectProject,
}) => {
  const [ selected, setSelected ] = useState<string | null>(null);

  function handleSelect(project: PlannedProject) {
    setSelected(project.name);
    onSelectProject(project);
  }
  return (
    <List component="nav" aria-label="List of projects">
      {
        projects.map(p => (
          <ListItem key={p.name} selected={selected === p.name} button onClick={() => handleSelect(p)}>
            <ListItemText primary={p.name} secondary={p.owner}/>
          </ListItem>
        ))
      }
    </List>
  );
}

export default ProjectList;