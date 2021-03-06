import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper style={{backgroundColor: "darkgrey"}} className={classes.paper}>
        <Grid style={{ color: "white" }} container wrap="nowrap" spacing={2}>
            <AccountCircleOutlinedIcon />
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Text</Typography>
          </Grid>
        </Grid>
        </Paper>
      <Paper style={{backgroundColor: "darkgrey"}} className={classes.paper}>
        <Grid style={{ color: "white" }}  container wrap="nowrap" spacing={2}>
          <AccountCircleOutlinedIcon />
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Text</Typography>
          </Grid>
        </Grid>
          </Paper>
          <Paper style={{backgroundColor: "darkgrey"}} className={classes.paper}>
        <Grid style={{ color: "white" }}  container wrap="nowrap" spacing={2}>
          <AccountCircleOutlinedIcon />
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Text</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
