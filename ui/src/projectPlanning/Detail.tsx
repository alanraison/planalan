import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';
import { PlannedProject } from '../api';

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
        <IconButton component={Link} to={'..'}>
          <CloseIcon/>
        </IconButton>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Skill</TableCell>
            <TableCell align="center">Start</TableCell>
            <TableCell align="center">Duration</TableCell>
            <TableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          project.requirements.map(r => (
            <TableRow key={r.skill}>
              <TableCell>
                {r.skill}
              </TableCell>
              <TableCell align="center">
                <IconButton>
                  <AddIcon/>
                </IconButton>
                {r.start}
                <IconButton>
                  <RemoveIcon/>
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton>
                  <AddIcon/>
                </IconButton>
                {r.duration}
                <IconButton>
                  <RemoveIcon/>
                </IconButton>
              </TableCell>
              <TableCell>
                  gantt
              </TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </Paper>
  )
};

export default Detail;