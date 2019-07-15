import React from 'react';
import Paper from '@material-ui/core/Paper';
import { PlannedProject } from '../api';

const Detail: React.FC<{
  project: PlannedProject
}> = ({
  project,
}) => (
  <Paper>
    {project.name}
  </Paper>
);

export default Detail;