import React, { Component } from 'react';
import DoComp from '../DoComp/DoComp';
import DoingComp from '../DoingComp/DoingComp';
import DoneComp from '../DoneComp/DoneComp';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 500,
      width: 350,
      margin: 3,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
});

class ToDoApp extends Component {
  render() {
    const { classes } = this.props;

    return (
        <Grid container className={classes.root} spacing={32}>
            <Grid item xs>
                <Paper className={classes.paper}><DoComp /></Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper}><DoingComp /></Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper}><DoneComp /></Paper>
            </Grid>
        </Grid>
    )
  }
}


export default withStyles(styles)(ToDoApp);