import React, { useState } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { PlannedProject } from '../api';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  titleRow: {
    display: 'flex',
  },
  titleField: {
    paddingBottom: theme.spacing(4),
    fontSize: 'large',
    flex: 1,
  },
  formFields: {
    margin: theme.spacing(1),
  },
}))

const Detail: React.FC<{
  project: PlannedProject,
  onChange: (project: PlannedProject) => void,
}> = ({
  project,
  onChange,
}) => {
  const classes = useStyles();
  // const [dirtyProject, setDirtyProject] = useState(project);

  function handleChange(field: string, value: any) {
    onChange({
      ...project,
      [field]: value,
    })
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.titleRow}>
        <TextField
          variant="filled"
          className={clsx(classes.titleField, classes.formFields)}
          label="Project name"
          value={project.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <TextField
          variant="filled"
          className={classes.formFields}
          label="Project manager"
          value={project.owner}
          onChange={(e) => handleChange('owner', e.target.value)}
        />
      </div>
    </Paper>
  )
};

export default Detail;